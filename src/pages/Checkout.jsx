
import React from 'react';

export default function Checkout() {
    return (
        <div className="checkout-page">
            

<header className="text-white font-headline-md text-headline-md font-label-caps text-label-caps docked full-width top-0 border-b border-outline-variant dark:border-outline flat no shadows sticky z-50" style={{"background":"linear-gradient(to right, #1F2226, #2A2D32)"}}>
<div className="flex justify-between items-center px-margin-mobile h-24 w-full max-w-container-max mx-auto md:px-margin-desktop relative md:gap-12">
<div className="md:hidden">
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer" data-icon="menu">menu</span>
</div>

<div className="font-headline-md text-headline-md tracking-tighter font-bold text-white flex items-center gap-2 scale-90">
<img src="imgs/logo_axios.png" alt="Axios Logo" className="h-32" />
</div>

<nav className="hidden md:flex items-center h-full justify-center flex-1 md:gap-12">
<a className="font-label-caps text-label-caps text-white border-b-2 border-white h-full flex items-center pt-[2px]" href="index.html">HOME</a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="all_collections.html">SHOP</a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="all_collections.html">PRODUCTS </a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="jornal.html">BLOG</a>
</nav>

<div className="flex items-center gap-4 text-white" id="header-actions">
  
  <div id="default-icons" className="flex items-center gap-4">
    <a href="login.html" className="bg-gray-800 border-2 border-[#c4c2c2] px-5 py-[11px] text-white hover:border-none hover:bg-secondary hover:text-on-primary transition-colors duration-300 inline-block text-center" style={{"borderRadius":"17px"}}>Sign In</a>
    <span id="search-icon" className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" onclick="toggleSearch()">search</span>
    <span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block">person</span>
    <span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block">favorite</span>
    <div className="relative cursor-pointer hover:text-secondary transition-colors hidden md:block">
      <span className="material-symbols-outlined text-white">shopping_bag</span>
      <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
    </div>
  </div>
  
  <div id="search-bar" className="hidden items-center gap-3">
    <div className="relative flex items-center">
      <span className="material-symbols-outlined text-white absolute left-2 text-[20px] pointer-events-none">search</span>
      <input id="search-input" type="text" placeholder="Search watches..." className="bg-white/10 border border-white/30 text-white placeholder-white/60 pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-white/70 transition-colors w-56 md:w-72" style={{"borderRadius":"4px"}} />
    </div>
    <span onclick="toggleSearch()" className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer" title="Close">close</span>
  </div>
</div></div>
</header>

<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">

<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-16">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-8">Checkout</h1>

<section>
<h2 className="font-headline-md text-headline-md mb-8 pb-4 border-b border-primary">SHIPPING ADDRESS</h2>
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-8">
<div className="md:col-span-2">
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="email">EMAIL</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="email" placeholder="jane@example.com" type="email" />
</div>
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="firstName">FIRST NAME</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="firstName" type="text" />
</div>
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="lastName">LAST NAME</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="lastName" type="text" />
</div>
<div className="md:col-span-2">
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="address1">ADDRESS LINE 1</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="address1" type="text" />
</div>
<div className="md:col-span-2">
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="address2">ADDRESS LINE 2 (OPTIONAL)</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="address2" type="text" />
</div>
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="city">CITY</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="city" type="text" />
</div>
<div className="grid grid-cols-2 gap-gutter">
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="state">STATE / PROVINCE</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="state" type="text" />
</div>
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="zip">POSTAL CODE</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="zip" type="text" />
</div>
</div>
<div className="md:col-span-2">
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="country">COUNTRY</label>
<select className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="country">
<option value="CH">Switzerland</option>
<option value="US">United States</option>
<option value="UK">United Kingdom</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
</select>
</div>
</form>
</section>

<section>
<h2 className="font-headline-md text-headline-md mb-8 pb-4 border-b border-primary">SHIPPING METHOD</h2>
<div className="space-y-4">
<label className="flex items-center justify-between p-4 border border-primary cursor-pointer hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<input checked="" className="text-primary focus:ring-primary h-5 w-5 border-outline" name="shipping" type="radio" value="standard" />
<div>
<div className="font-label-caps text-label-caps mb-1 text-on-background">STANDARD DELIVERY</div>
<div className="font-body-md text-body-md text-on-surface-variant">3-5 Business Days</div>
</div>
</div>
<div className="font-price-display text-price-display text-on-background">COMPLIMENTARY</div>
</label>
<label className="flex items-center justify-between p-4 border border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors opacity-60">
<div className="flex items-center gap-4">
<input className="text-primary focus:ring-primary h-5 w-5 border-outline" disabled="" name="shipping" type="radio" value="express" />
<div>
<div className="font-label-caps text-label-caps mb-1 text-on-background">EXPRESS COURIER</div>
<div className="font-body-md text-body-md text-on-surface-variant">Unavailable for current selection</div>
</div>
</div>
</label>
</div>
</section>

<section>
<h2 className="font-headline-md text-headline-md mb-8 pb-4 border-b border-primary">PAYMENT</h2>
<div className="space-y-6">

<div className="flex border-b border-outline-variant gap-8">
<button className="font-label-caps text-label-caps pb-4 border-b-2 border-primary text-primary">CREDIT CARD</button>
<button className="font-label-caps text-label-caps pb-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-colors">PAYPAL</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-8 pt-4">
<div className="md:col-span-2">
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="cardName">NAME ON CARD</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="cardName" type="text" />
</div>
<div className="md:col-span-2">
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="cardNumber">CARD NUMBER</label>
<div className="relative flex items-center">
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0 pr-10" id="cardNumber" placeholder="0000 0000 0000 0000" type="text" />
<span className="material-symbols-outlined absolute right-2 text-on-surface-variant">credit_card</span>
</div>
</div>
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="expDate">EXPIRATION (MM/YY)</label>
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0" id="expDate" placeholder="MM/YY" type="text" />
</div>
<div>
<label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant" htmlFor="cvv">SECURITY CODE (CVV)</label>
<div className="relative flex items-center">
<input className="w-full bg-transparent border-0 border-b border-primary rounded-none focus:ring-0 focus:border-secondary transition-colors py-3 font-body-md text-body-md text-on-background px-0 pr-10" id="cvv" placeholder="123" type="text" />
<span className="material-symbols-outlined absolute right-2 text-on-surface-variant cursor-help" title="3 or 4 digits on back of card">info</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 mt-8 pt-6 border-t border-outline-variant text-on-surface-variant">
<span className="material-symbols-outlined">lock</span>
<span className="font-body-md text-body-md text-sm">Secure 256-bit SSL Encrypted Checkout</span>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 mt-12 lg:mt-0">
<div className="bg-surface p-8 border border-primary">
<h2 className="font-headline-md text-headline-md mb-8 pb-4 border-b border-outline-variant">ORDER SUMMARY</h2>

<div className="space-y-6 mb-8 pb-8 border-b border-outline-variant">
<div className="flex gap-6 items-start">
<div className="w-24 h-24 bg-[#F5F5F5] flex-shrink-0 flex items-center justify-center relative overflow-hidden">
<img alt="Heritage Chronograph" className="object-cover w-full h-full mix-blend-multiply" data-alt="A meticulously crafted luxury wristwatch featuring a minimalist brushed steel case, a stark white dial with ultra-thin black indices, and a sleek black alligator leather strap. Shot against a pristine white background with sharp, directional lighting that highlights the metallic textures. High contrast, clean architectural lines, editorial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAU2Ey1TORXVI_1pt12NHSKrMBC96KUXHVZ0ajlm_STh47yvtCZWif-CsEJbt2GHwVRJjT7iH92yL6Nr6ydRd4rKGwRQr4S1Mkths6_KgR8Fta-YNC3P-9rQjesdCijFwnIiFbqr-zKqIcBZGmcZC9LSQr9Hw0DRgfsUjW5v0R9P3RMcM-Ryl_50F_cQtm2v9OW4bWTw1QBuwP593iFwa7ESa4M--CnjAaef11hGVmWf0Px9rEolWZ" />
</div>
<div className="flex-grow">
<h3 className="font-label-caps text-label-caps text-on-background mb-2">HERITAGE CHRONOGRAPH</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">42mm Steel Case, Black Leather</p>
<div className="font-price-display text-price-display text-on-background">CHF 12,500</div>
</div>
</div>
</div>

<div className="space-y-4 mb-8">
<div className="flex justify-between font-body-md text-body-md text-on-background">
<span>Subtotal</span>
<span>CHF 12,500</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-background">
<span>Shipping</span>
<span>Complimentary</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-background">
<span>Taxes (Included)</span>
<span>CHF 0</span>
</div>
</div>
<div className="flex justify-between font-headline-md text-headline-md text-on-background mb-10 pt-6 border-t border-primary">
<span>TOTAL</span>
<span>CHF 12,500</span>
</div>

<button className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-5 px-6 hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-4">
                        COMPLETE PURCHASE
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
<p className="font-body-md text-body-md text-sm text-on-surface-variant text-center mt-6">
                        By completing your purchase you agree to our <a className="underline hover:text-primary" href="#">Terms of Service</a>.
                    </p>
</div>
</div>
</div>
</main>

<footer className="w-full mt-section-padding bg-surface-container-highest border-t border-primary flat no shadows">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto text-primary">
<div className="md:col-span-1 mb-8 md:mb-0">
<div className="font-headline-md text-headline-md uppercase tracking-tighter mb-4">VANGO</div>
<p className="font-label-caps text-label-caps text-on-surface-variant">© 2024 VANGO GENÈVE. ALL RIGHTS RESERVED.</p>
</div>
<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors" href="#">Shop</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors" href="#">Support</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors" href="#">Company</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

        </div>
    );
}
