import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-background text-on-background antialiased font-body-md overflow-x-hidden min-h-screen flex flex-col">

      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="text-white font-headline-md text-headline-md font-label-caps text-label-caps docked full-width top-0 border-b border-outline-variant sticky z-50" style={{ background: 'linear-gradient(to right, #1F2226, #2A2D32)' }}>
        <div className="flex justify-between items-center px-margin-mobile h-24 w-full max-w-container-max mx-auto md:px-margin-desktop relative md:gap-12">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer" onClick={() => setDrawerOpen(true)}>menu</span>
          </div>
          {/* Logo */}
          <div className="font-headline-md text-headline-md tracking-tighter font-bold text-white flex items-center gap-2 scale-90">
            <img src="/imgs/logo_axios.png" alt="VANGO Logo" className="h-32" />
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
            <Link to="/login"><button style={{ border: '2px solid rgb(196, 194, 194)', padding: '11px 20px', borderRadius: '17px', color: 'white' }}>Sign In</button></Link>
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
        <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 transition-opacity" onClick={() => setDrawerOpen(false)}></div>
      )}

      {/* Mobile Navigation Drawer */}
      <aside className={`fixed inset-y-0 left-0 w-80 bg-surface border-r border-primary z-50 transform transition-transform duration-300 flex flex-col h-full p-gutter shadow-xl md:hidden ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-headline-md text-headline-md text-primary">VANGO</span>
          <button className="text-primary p-2" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
          <Link className="flex items-center gap-4 p-4 bg-primary text-on-primary font-label-caps text-label-caps rounded-sm transition-all" to="/" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">home</span><span>Home</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-variant font-label-caps text-label-caps rounded-sm transition-all" to="/all_collections" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">watch</span><span>Collections</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-variant font-label-caps text-label-caps rounded-sm transition-all" to="/our_story" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">history</span><span>Our Story</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-variant font-label-caps text-label-caps rounded-sm transition-all" to="/jornal" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">article</span><span>Blog</span>
          </Link>
          <Link className="flex items-center gap-4 p-4 text-on-surface hover:bg-surface-variant font-label-caps text-label-caps rounded-sm transition-all" to="/support" onClick={() => setDrawerOpen(false)}>
            <span className="material-symbols-outlined">help_outline</span><span>Support</span>
          </Link>
        </nav>
      </aside>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F2226 0%, #2A2D32 50%, #1a1a1a 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #775a19 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c8c6c5 0%, transparent 40%)' }}></div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-12 py-20">
          <div className="flex-1 text-left">
            <p className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest">SINCE 1889 — SWISS CRAFTSMANSHIP</p>
            <h1 className="font-display-xl text-display-xl text-white mb-6 leading-none">
              TIME IS<br /><span className="text-secondary">AN ART</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/70 mb-10 max-w-xl">
              Discover our exclusive collection of luxury timepieces, where tradition meets contemporary elegance. Each watch is a masterwork of precision engineering.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/all_collections">
                <button className="bg-secondary text-on-secondary font-label-caps text-label-caps px-8 py-4 hover:bg-secondary-fixed-dim transition-colors tracking-widest">
                  EXPLORE COLLECTION
                </button>
              </Link>
              <Link to="/our_story">
                <button className="border border-white text-white font-label-caps text-label-caps px-8 py-4 hover:bg-white hover:text-primary transition-colors tracking-widest">
                  OUR STORY
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/imgs/img_3d.png" alt="Luxury Watch" className="max-h-[500px] object-contain drop-shadow-2xl" />
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-label-caps text-label-caps text-[10px] tracking-widest">SCROLL</span>
          <span className="material-symbols-outlined text-[20px] animate-bounce">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Marquee / Brand Ticker */}
      <section className="bg-secondary py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee-right_25s_linear_infinite]">
          {['FREE WORLDWIDE SHIPPING', 'SWISS MADE', '2 YEAR WARRANTY', 'AUTHENTIC LUXURY', 'EXCLUSIVE DESIGNS', 'PREMIUM MATERIALS', 'FREE WORLDWIDE SHIPPING', 'SWISS MADE', '2 YEAR WARRANTY', 'AUTHENTIC LUXURY', 'EXCLUSIVE DESIGNS', 'PREMIUM MATERIALS'].map((item, i) => (
            <span key={i} className="font-label-caps text-label-caps text-on-secondary tracking-widest flex items-center gap-4">
              {item} <span className="text-on-secondary/50">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <p className="font-label-caps text-label-caps text-secondary mb-2 tracking-widest">CURATED FOR YOU</p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">Featured Collections</h2>
          </div>
          <Link to="/all_collections" className="font-label-caps text-label-caps text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors tracking-widest">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'ROYAL CHRONOGRAPH', price: '$8,500', label: 'BESTSELLER', img: '/imgs/img_3d.png' },
            { name: 'HERITAGE AUTOMATIC', price: '$5,200', label: 'NEW ARRIVAL', img: '/imgs/img_3d1.jpeg' },
            { name: 'SIGNATURE TOURBILLON', price: '$24,000', label: 'LIMITED EDITION', img: '/imgs/img_3d2.png' },
          ].map((product, i) => (
            <Link to="/product_details" key={i} className="group relative bg-surface-container-low overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden aspect-square bg-surface-container">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-secondary text-on-secondary font-label-caps text-label-caps px-3 py-1 text-[10px] tracking-widest">{product.label}</span>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                </button>
              </div>
              <div className="p-6">
                <p className="font-label-caps text-label-caps text-outline mb-2 tracking-widest">VANGO</p>
                <h3 className="font-headline-md text-headline-md text-primary mb-3 text-[16px]">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-price-display text-price-display text-primary">{product.price}</span>
                  <button className="font-label-caps text-label-caps text-[10px] border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-on-primary transition-colors tracking-widest">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="relative overflow-hidden py-section-padding" style={{ background: 'linear-gradient(to right, #1F2226, #2A2D32)' }}>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-label-caps text-label-caps text-secondary mb-4 tracking-widest">THE VANGO LEGACY</p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase mb-6">
              Crafted With<br />Obsession
            </h2>
            <p className="font-body-lg text-body-lg text-white/70 mb-8 max-w-lg">
              For over a century, VANGO has been synonymous with precision, luxury, and innovation. Every timepiece we create is a testament to our unwavering commitment to horological excellence.
            </p>
            <Link to="/our_story">
              <button className="font-label-caps text-label-caps text-secondary border border-secondary px-8 py-4 hover:bg-secondary hover:text-on-secondary transition-colors tracking-widest">
                DISCOVER OUR STORY
              </button>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { value: '135+', label: 'YEARS OF EXCELLENCE' },
              { value: '50K+', label: 'HAPPY CLIENTS' },
              { value: '12', label: 'COLLECTIONS' },
              { value: '48', label: 'COUNTRIES' },
            ].map((stat, i) => (
              <div key={i} className="border border-white/20 p-8 text-center">
                <p className="font-display-xl text-[40px] text-secondary font-bold">{stat.value}</p>
                <p className="font-label-caps text-label-caps text-white/60 mt-2 tracking-widest text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full bg-surface-container-low">
        <div className="text-center mb-12">
          <p className="font-label-caps text-label-caps text-secondary mb-2 tracking-widest">JUST ARRIVED</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'ECLIPSE GMT', price: '$3,800' },
            { name: 'NOIR DIVER', price: '$4,200' },
            { name: 'CELESTIA MOON', price: '$9,500' },
            { name: 'APEX CARBON', price: '$6,700' },
          ].map((item, i) => (
            <Link to="/product_details" key={i} className="group bg-surface-container-lowest p-4 hover:shadow-lg transition-shadow">
              <div className="bg-surface-container aspect-square mb-4 overflow-hidden flex items-center justify-center">
                <img src="/imgs/img_3d.png" alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="font-label-caps text-label-caps text-outline mb-1 text-[10px] tracking-widest">VANGO</p>
              <h4 className="font-headline-md text-[14px] text-primary mb-2">{item.name}</h4>
              <span className="font-price-display text-price-display text-primary text-[16px]">{item.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center mb-12">
          <p className="font-label-caps text-label-caps text-secondary mb-2 tracking-widest">CLIENT VOICES</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: 'An extraordinary timepiece that truly captures the essence of luxury. VANGO has redefined what a watch can be.', name: 'Alexandre D.', title: 'Collector, Paris' },
            { quote: 'The craftsmanship is impeccable. Every detail speaks of generations of expertise and passion for perfection.', name: 'Sofia M.', title: 'Watch Enthusiast, Milan' },
            { quote: 'My VANGO watch is not just a timekeeper — it is a conversation piece, an heirloom, and a work of art.', name: 'James H.', title: 'CEO, London' },
          ].map((t, i) => (
            <div key={i} className="border border-outline-variant p-8 flex flex-col gap-4">
              <div className="flex gap-1 text-secondary">
                {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>)}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant italic">"{t.quote}"</p>
              <div className="mt-auto pt-4 border-t border-outline-variant">
                <p className="font-headline-md text-[14px] text-primary">{t.name}</p>
                <p className="font-label-caps text-label-caps text-outline text-[10px] tracking-widest mt-1">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto text-center flex flex-col items-center gap-6">
          <p className="font-label-caps text-label-caps text-secondary tracking-widest">EXCLUSIVE ACCESS</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary uppercase">Join The Inner Circle</h2>
          <p className="font-body-lg text-body-lg text-on-primary/70 max-w-lg">
            Subscribe to receive exclusive offers, new arrivals, and invitations to private events reserved for our most valued clients.
          </p>
          <form className="flex w-full max-w-lg gap-0" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-transparent border border-white/30 text-on-primary font-label-caps text-label-caps px-6 py-4 placeholder-white/40 focus:outline-none focus:border-secondary tracking-widest text-[12px]"
            />
            <button type="submit" className="bg-secondary text-on-secondary font-label-caps text-label-caps px-6 py-4 hover:bg-secondary-fixed-dim transition-colors tracking-widest whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant py-12 px-margin-mobile md:px-margin-desktop" style={{ background: '#1F2226' }}>
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <img src="/imgs/logo_axios.png" alt="VANGO" className="h-20 mb-4" />
              <p className="font-body-md text-body-md text-white/50 max-w-xs">
                Swiss luxury watches since 1889. Crafting time for those who value the finest things in life.
              </p>
              <div className="flex gap-4 mt-6">
                {['instagram', 'facebook', 'twitter'].map(icon => (
                  <span key={icon} className="material-symbols-outlined text-white/50 hover:text-secondary cursor-pointer transition-colors">{icon}</span>
                ))}
              </div>
            </div>
            {[
              { title: 'COLLECTIONS', links: ['New Arrivals', 'Chronographs', 'Dress Watches', 'Sport Watches', 'Limited Editions'] },
              { title: 'COMPANY', links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers'] },
              { title: 'SUPPORT', links: ['FAQ', 'Shipping & Returns', 'Warranty', 'Care Guide', 'Contact Us'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-label-caps text-label-caps text-white tracking-widest mb-6">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="font-body-md text-body-md text-white/50 hover:text-secondary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-label-caps text-label-caps text-white/30 text-[10px] tracking-widest">© 2024 VANGO SA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="font-label-caps text-label-caps text-white/30 hover:text-secondary transition-colors text-[10px] tracking-widest">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
