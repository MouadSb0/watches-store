import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <div className="bg-background text-on-background antialiased font-body-md overflow-x-hidden min-h-screen flex flex-col w-full">

      {/* Header */}
      <header className="text-white font-headline-md text-headline-md font-label-caps text-label-caps docked full-width top-0 border-b border-outline-variant sticky z-40" style={{ background: 'linear-gradient(to right, #1F2226, #2A2D32)' }}>
        <div className="flex justify-between items-center px-margin-mobile h-24 w-full max-w-container-max mx-auto md:px-margin-desktop relative md:gap-12">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer text-2xl" onClick={() => setDrawerOpen(true)}>menu</span>
          </div>
          {/* Logo */}
          <div className="font-headline-md text-headline-md tracking-tighter font-bold text-white flex items-center gap-2 scale-90">
            <Link to="/">
              <img src={`${base}imgs/logo_axios.png`} alt="VANGO Logo" className="h-28 object-contain" />
            </Link>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-full justify-center flex-1 md:gap-12">
            <Link className="font-label-caps text-label-caps text-white border-b-2 border-white h-full flex items-center pt-[2px]" to="/">HOME</Link>
            <Link className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" to="/all_collections">SHOP</Link>
            <Link className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" to="/all_collections">PRODUCTS</Link>
            <Link className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" to="/jornal">BLOG</Link>
          </nav>
          {/* Action Icons */}
          <div className="flex items-center gap-4 text-white">
            <Link to="/login"><button className="border-2 border-[#c4c2c2] px-5 py-2.5 rounded-[17px] text-white hover:border-secondary hover:text-secondary transition-colors font-label-caps text-label-caps">Sign In</button></Link>
            <span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block">search</span>
            <Link to="/profile"><span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block">person</span></Link>
            <Link to="/favorites"><span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block">favorite</span></Link>
            <Link to="/cart">
              <div className="relative cursor-pointer hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-white">shopping_bag</span>
                <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" onClick={() => setDrawerOpen(false)}></div>
      )}

      {/* Mobile Navigation Drawer */}
      <aside className={`fixed inset-y-0 left-0 w-80 bg-[#fbf9f8] border-r border-[#1b1c1c] z-50 transform transition-transform duration-300 flex flex-col h-full p-6 shadow-2xl md:hidden ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-headline-md text-headline-md text-primary font-bold">VANGO</span>
          <button className="text-primary p-2 cursor-pointer" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
          <Link className="flex items-center gap-4 p-4 bg-primary text-white font-label-caps text-label-caps rounded-sm transition-all" to="/" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">home</span><span>Home</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-container font-label-caps text-label-caps rounded-sm transition-all" to="/all_collections" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">watch</span><span>Collections</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-container font-label-caps text-label-caps rounded-sm transition-all" to="/our_story" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">history</span><span>Our Story</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-container font-label-caps text-label-caps rounded-sm transition-all" to="/jornal" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">article</span><span>Blog</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-container font-label-caps text-label-caps rounded-sm transition-all" to="/support" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">help_outline</span><span>Support</span>
          </Link>
        </nav>
      </aside>

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F2226 0%, #2A2D32 50%, #1a1a1a 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #775a19 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c8c6c5 0%, transparent 40%)' }}></div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-12 py-16 w-full">
          <div className="flex-1 text-left">
            <p className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest text-[#e9c176]">SINCE 1889 — SWISS CRAFTSMANSHIP</p>
            <h1 className="font-display-xl text-display-xl text-white mb-6 leading-tight">
              TIME IS<br /><span className="text-[#e9c176]">AN ART</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/70 mb-10 max-w-xl">
              Discover our exclusive collection of luxury timepieces, where tradition meets contemporary elegance. Each watch is a masterwork of precision engineering.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/all_collections">
                <button className="bg-[#775a19] hover:bg-[#8e6c1e] text-white font-label-caps text-label-caps px-8 py-4 transition-colors tracking-widest cursor-pointer shadow-lg">
                  EXPLORE COLLECTION
                </button>
              </Link>
              <Link to="/our_story">
                <button className="border border-white text-white font-label-caps text-label-caps px-8 py-4 hover:bg-white hover:text-black transition-colors tracking-widest cursor-pointer">
                  OUR STORY
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/15 group">
              <img 
                src={`${base}imgs/hero_watch.jpg`} 
                alt="VANGO Luxury Watch Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="font-label-caps text-label-caps text-[10px] tracking-widest">SCROLL</span>
          <span className="material-symbols-outlined text-[20px] animate-bounce">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Marquee / Brand Ticker */}
      <section className="py-4 overflow-hidden w-full bg-[#775a19] shadow-inner marquee-container select-none">
        <div className="animate-marquee-ltr flex items-center whitespace-nowrap">
          {[
            'FREE WORLDWIDE SHIPPING',
            'SWISS MADE',
            '2 YEAR WARRANTY',
            'AUTHENTIC LUXURY',
            'EXCLUSIVE DESIGNS',
            'PREMIUM MATERIALS',
            'FREE WORLDWIDE SHIPPING',
            'SWISS MADE',
            '2 YEAR WARRANTY',
            'AUTHENTIC LUXURY',
            'EXCLUSIVE DESIGNS',
            'PREMIUM MATERIALS',
            'FREE WORLDWIDE SHIPPING',
            'SWISS MADE',
            '2 YEAR WARRANTY',
            'AUTHENTIC LUXURY',
            'EXCLUSIVE DESIGNS',
            'PREMIUM MATERIALS',
            'FREE WORLDWIDE SHIPPING',
            'SWISS MADE',
            '2 YEAR WARRANTY',
            'AUTHENTIC LUXURY',
            'EXCLUSIVE DESIGNS',
            'PREMIUM MATERIALS',
          ].map((item, i) => (
            <span key={i} className="font-label-caps text-label-caps text-white tracking-widest flex items-center gap-6 px-6 text-xs font-semibold">
              <span>{item}</span>
              <span className="text-white/60 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <p className="font-label-caps text-label-caps text-[#775a19] mb-2 tracking-widest font-semibold">CURATED FOR YOU</p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase font-bold text-3xl md:text-4xl">Featured Collections</h2>
          </div>
          <Link to="/all_collections" className="font-label-caps text-label-caps text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors tracking-widest text-xs font-semibold">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'ROYAL CHRONOGRAPH', price: '$8,500', label: 'BESTSELLER', img: `${base}imgs/hero_watch_box.jpg` },
            { name: 'HERITAGE AUTOMATIC', price: '$5,200', label: 'NEW ARRIVAL', img: `${base}imgs/hero_watch_satin.jpg` },
            { name: 'SIGNATURE TOURBILLON', price: '$24,000', label: 'LIMITED EDITION', img: `${base}imgs/hero_watch_stack.jpg` },
          ].map((product, i) => (
            <Link to="/product_details" key={i} className="group relative bg-[#f5f3f3] overflow-hidden cursor-pointer rounded-sm border border-[#e4e2e2] hover:border-[#775a19] transition-all">
              <div className="relative overflow-hidden aspect-square bg-[#efeded] flex items-center justify-center p-0">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#775a19] text-white font-label-caps text-label-caps px-3 py-1 text-[10px] tracking-widest">{product.label}</span>
                <button className="absolute bottom-4 right-4 bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md">
                  <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                </button>
              </div>
              <div className="p-6">
                <p className="font-label-caps text-label-caps text-[#747878] mb-2 tracking-widest text-xs">VANGO</p>
                <h3 className="font-headline-md text-headline-md text-primary mb-3 text-lg font-bold">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-price-display text-price-display text-primary font-bold text-xl">{product.price}</span>
                  <button className="font-label-caps text-label-caps text-[10px] border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors tracking-widest font-semibold">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="relative overflow-hidden py-section-padding my-8" style={{ background: 'linear-gradient(to right, #1F2226, #2A2D32)' }}>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-label-caps text-label-caps text-[#e9c176] mb-4 tracking-widest font-semibold">THE VANGO LEGACY</p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase mb-6 font-bold text-3xl md:text-5xl leading-tight">
              Crafted With<br />Obsession
            </h2>
            <p className="font-body-lg text-body-lg text-white/70 mb-8 max-w-lg">
              For over a century, VANGO has been synonymous with precision, luxury, and innovation. Every timepiece we create is a testament to our unwavering commitment to horological excellence.
            </p>
            <Link to="/our_story">
              <button className="font-label-caps text-label-caps text-[#e9c176] border border-[#e9c176] px-8 py-4 hover:bg-[#e9c176] hover:text-black transition-colors tracking-widest font-semibold cursor-pointer">
                DISCOVER OUR STORY
              </button>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {[
              { value: '135+', label: 'YEARS OF EXCELLENCE' },
              { value: '50K+', label: 'HAPPY CLIENTS' },
              { value: '12', label: 'COLLECTIONS' },
              { value: '48', label: 'COUNTRIES' },
            ].map((stat, i) => (
              <div key={i} className="border border-white/20 p-8 text-center bg-white/5 backdrop-blur-sm">
                <p className="font-display-xl text-[40px] text-[#e9c176] font-bold">{stat.value}</p>
                <p className="font-label-caps text-label-caps text-white/70 mt-2 tracking-widest text-[10px] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center mb-12">
          <p className="font-label-caps text-label-caps text-[#775a19] mb-2 tracking-widest font-semibold">JUST ARRIVED</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase font-bold text-3xl md:text-4xl">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'ECLIPSE GMT', price: '$3,800', img: `${base}imgs/img_3d.png` },
            { name: 'NOIR DIVER', price: '$4,200', img: `${base}imgs/img_3d1.jpeg` },
            { name: 'CELESTIA MOON', price: '$9,500', img: `${base}imgs/img_3d2.png` },
            { name: 'APEX CARBON', price: '$6,700', img: `${base}imgs/img_3d.png` },
          ].map((item, i) => (
            <Link to="/product_details" key={i} className="group bg-white p-4 border border-[#e4e2e2] hover:shadow-xl transition-all rounded-sm">
              <div className="bg-[#f5f3f3] aspect-square mb-4 overflow-hidden flex items-center justify-center p-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="font-label-caps text-label-caps text-[#747878] mb-1 text-[10px] tracking-widest">VANGO</p>
              <h4 className="font-headline-md text-base text-primary mb-2 font-bold">{item.name}</h4>
              <span className="font-price-display text-price-display text-primary text-base font-bold">{item.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center mb-12">
          <p className="font-label-caps text-label-caps text-[#775a19] mb-2 tracking-widest font-semibold">CLIENT VOICES</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase font-bold text-3xl md:text-4xl">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: 'An extraordinary timepiece that truly captures the essence of luxury. VANGO has redefined what a watch can be.', name: 'Alexandre D.', title: 'Collector, Paris' },
            { quote: 'The craftsmanship is impeccable. Every detail speaks of generations of expertise and passion for perfection.', name: 'Sofia M.', title: 'Watch Enthusiast, Milan' },
            { quote: 'My VANGO watch is not just a timekeeper — it is a conversation piece, an heirloom, and a work of art.', name: 'James H.', title: 'CEO, London' },
          ].map((t, i) => (
            <div key={i} className="border border-[#c4c7c7] p-8 flex flex-col gap-4 bg-white rounded-sm shadow-sm">
              <div className="flex gap-1 text-[#775a19]">
                {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>)}
              </div>
              <p className="font-body-lg text-body-lg text-[#444748] italic leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto pt-4 border-t border-[#e4e2e2]">
                <p className="font-headline-md text-[14px] text-primary font-bold">{t.name}</p>
                <p className="font-label-caps text-label-caps text-[#747878] text-[10px] tracking-widest mt-1 font-semibold">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#1c1b1b] text-white">
        <div className="max-w-container-max mx-auto text-center flex flex-col items-center gap-6">
          <p className="font-label-caps text-label-caps text-[#e9c176] tracking-widest font-semibold">EXCLUSIVE ACCESS</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase font-bold text-3xl md:text-4xl">Join The Inner Circle</h2>
          <p className="font-body-lg text-body-lg text-white/70 max-w-lg">
            Subscribe to receive exclusive offers, new arrivals, and invitations to private events reserved for our most valued clients.
          </p>
          <form className="flex w-full max-w-lg gap-0 shadow-lg" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-white/10 border border-white/30 text-white font-label-caps text-label-caps px-6 py-4 placeholder-white/50 focus:outline-none focus:border-[#e9c176] tracking-widest text-[12px]"
            />
            <button type="submit" className="bg-[#775a19] hover:bg-[#8e6c1e] text-white font-label-caps text-label-caps px-8 py-4 transition-colors tracking-widest whitespace-nowrap font-bold cursor-pointer">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-margin-mobile md:px-margin-desktop text-white" style={{ background: '#1F2226' }}>
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={`${base}imgs/logo_axios.png`} alt="VANGO" className="h-20 mb-4 object-contain" />
              <p className="font-body-md text-body-md text-white/50 max-w-xs leading-relaxed">
                Swiss luxury watches since 1889. Crafting time for those who value the finest things in life.
              </p>
            </div>
            {[
              { title: 'COLLECTIONS', links: ['New Arrivals', 'Chronographs', 'Dress Watches', 'Sport Watches', 'Limited Editions'] },
              { title: 'COMPANY', links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers'] },
              { title: 'SUPPORT', links: ['FAQ', 'Shipping & Returns', 'Warranty', 'Care Guide', 'Contact Us'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-label-caps text-label-caps text-white tracking-widest mb-6 font-bold text-xs">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="font-body-md text-body-md text-white/50 hover:text-[#e9c176] transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-label-caps text-label-caps text-white/30 text-[10px] tracking-widest">© 2024 VANGO SA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="font-label-caps text-label-caps text-white/30 hover:text-[#e9c176] transition-colors text-[10px] tracking-widest">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
