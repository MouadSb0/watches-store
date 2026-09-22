const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const srcDir = './src/pages';
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

let imports = '';
let routes = '';

function camelCase(str) {
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

function parseStyle(styleStr) {
    if (!styleStr) return "{}";
    const styles = {};
    styleStr.split(';').forEach(s => {
        if (!s.trim()) return;
        const parts = s.split(':');
        if (parts.length >= 2) {
            const key = camelCase(parts[0].trim());
            const val = parts.slice(1).join(':').trim();
            styles[key] = val;
        }
    });
    return JSON.stringify(styles);
}

function domToJsx(node) {
    if (node.nodeType === 3) { // Text node
        return node.textContent.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
    }
    if (node.nodeType !== 1) return ''; // Element node only
    
    if (node.tagName.toLowerCase() === 'script' || node.tagName.toLowerCase() === 'style') return '';

    let jsx = `<${node.tagName.toLowerCase()}`;
    
    for (let attr of node.attributes) {
        let name = attr.name;
        let value = attr.value;
        
        if (name === 'class') name = 'className';
        if (name === 'for') name = 'htmlFor';
        if (name.includes('-') && !name.startsWith('data-') && !name.startsWith('aria-')) {
            // just keep it or skip? standard HTML attributes don't usually have hyphens except data-
        }
        
        if (name === 'style') {
            jsx += ` style={${parseStyle(value)}}`;
        } else {
            jsx += ` ${name}="${value.replace(/"/g, '&quot;')}"`;
        }
    }
    
    const selfClosing = ['img', 'input', 'br', 'hr', 'meta', 'link'].includes(node.tagName.toLowerCase());
    if (selfClosing) {
        jsx += ` />`;
    } else {
        jsx += `>`;
        for (let child of node.childNodes) {
            jsx += domToJsx(child);
        }
        jsx += `</${node.tagName.toLowerCase()}>`;
    }
    return jsx;
}

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const dom = new JSDOM(content);
    const body = dom.window.document.body;
    
    // Convert body children to JSX
    let jsxContent = '';
    for (let child of body.childNodes) {
        jsxContent += domToJsx(child);
    }

    const componentName = file
        .replace('.html', '')
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    const componentCode = `
import React from 'react';

export default function ${componentName}() {
    return (
        <div className="${componentName.toLowerCase()}-page">
            ${jsxContent}
        </div>
    );
}
`;
    fs.writeFileSync(path.join(srcDir, `${componentName}.jsx`), componentCode);
    console.log(`Converted ${file} to ${componentName}.jsx`);
    
    imports += `import ${componentName} from './${componentName}';\n`;
    const routePath = `/${file.replace('.html', '')}`;
    routes += `        <Route path="${routePath}" element={<${componentName} />} />\n`;
});

const appCode = `
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
${imports}

function App() {
  return (
    <Router>
      <Routes>
${routes}
        <Route path="/" element={
            <div style={{padding: '20px'}}>
                <h1>Home Page</h1>
                <p>Welcome to the React App.</p>
                <ul>
                    {${JSON.stringify(files.map(f => '/' + f.replace('.html', '')))}.map(route => (
                        <li key={route}><Link to={route}>{route}</Link></li>
                    ))}
                </ul>
            </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync('./src/App.jsx', appCode);
console.log('Generated App.jsx');
