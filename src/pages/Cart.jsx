
import React from 'react';

export default function Cart() {
    return (
        <div className="cart-page">
            

<header className="text-white font-headline-md text-headline-md font-label-caps text-label-caps docked full-width top-0 border-b border-outline-variant dark:border-outline flat no shadows sticky z-50" style={{"background":"linear-gradient(to right, #1F2226, #2A2D32)"}}>
<div className="flex justify-between items-center px-margin-mobile h-24 w-full max-w-container-max mx-auto md:px-margin-desktop relative md:gap-12">
<div className="md:hidden">
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer" data-icon="menu">menu</span>
</div>

<div className="font-headline-md text-headline-md tracking-tighter font-bold text-white flex items-center gap-2 scale-90">
<img src="imgs/logo_axios.png" alt="Axios Logo" className="h-32" />
</div>

<nav className="hidden md:flex items-center h-full justify-center flex-1 md:gap-12">
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="index.html">HOME</a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="all_collections.html">SHOP</a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="all_collections.html">PRODUCTS </a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="jornal.html">BLOG</a>
</nav>

<div className="flex items-center gap-4 text-white">
<a href="login.html" className="bg-gray-800 border-2 border-[#c4c2c2] px-5 py-[11px] rounded-2xl text-white hover:border-none hover:bg-secondary hover:text-on-primary transition-colors duration-300 inline-block text-center" style={{"borderRadius":"17px"}}>
  Sign In
</a>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="search">search</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="person">person</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block " data-icon="favorite">favorite</span>
<div className="relative cursor-pointer hover:text-secondary transition-colors border-b-2 border-white h-full flex items-center pt-[2px] pb-4">
<span className="material-symbols-outlined text-white " data-icon="shopping_bag">shopping_bag</span>
<span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</div>
</div></div>
</header>

<main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding">
<h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase text-center mb-16 md:mb-24 text-primary">Your Bag</h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">

<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8 md:gap-12">

<div className="flex flex-col md:flex-row gap-6 md:gap-8 pb-8 md:pb-12 hairline-b">
<div className="w-full md:w-48 h-64 bg-[#F5F5F5] flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-multiply" data-alt="A close-up studio shot of a sleek titanium mechanical watch with a black dial and a brushed metal bracelet. High-contrast lighting highlights the intricate bezel and hands against a pristine white background. The aesthetic is clean, minimalist, and deeply luxurious, echoing high-end editorial product photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlM8a52_M-FApYrQB5puaSalGayBmlOSQzMyQ88GKjoiknAB5infVoEET2w5Jxc1ulrTdZkT-fII-W--HkfrmFKZnjPinmBoRXeHw5QXL0WLW3x2CmyollgtxeQSjc5yjl60BD5803BJPQF5EIG271cDTP66c4qcRhlS2ra8Rsx5dNeUM4pDkK6_SZl0KVAl217a1xtdNOgHxrpu23fywOYQnDBxTZvcGbAJLOvMje6umzG8OGCPyA" />
</div>
<div className="flex flex-col flex-grow justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="font-headline-md text-headline-md text-primary uppercase">Chronograph T-40</h2>
<span className="font-price-display text-price-display text-primary">$4,500</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-1">40mm Titanium</p>
<p className="font-body-md text-body-md text-on-surface-variant">Sapphire Crystal</p>
</div>
<div className="flex justify-between items-end mt-8">
<div className="flex items-center gap-4">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">QTY</span>
<div className="flex items-center border border-primary">
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[16px]">remove</span></button>
<span className="w-8 text-center font-body-md text-body-md">1</span>
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[16px]">add</span></button>
</div>
</div>
<button className="font-label-caps text-label-caps text-on-surface-variant underline hover:text-primary transition-colors">REMOVE</button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-8 pb-8 md:pb-12 hairline-b">
<div className="w-full md:w-48 h-64 bg-[#F5F5F5] flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-multiply" data-alt="An elegant dress watch featuring a thin rose gold case and a minimalist white enamel dial with slim indices. The watch is attached to a premium brown leather strap. The shot is well-lit, emphasizing the reflective qualities of the gold and the texture of the leather, set against a stark white background for a luxurious editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcnNP5qvMFTEMmY9IODq098YJg5A-7a5X4qKqh2q1o7I9scDmwQfAaQQhK4WJfirqawJH_nfUuHU74BW10pfPHZ0duNgTZLcRkBHbNR_gHvkC4Ph1Znx-T4th6e5wS75QCksOYznz7mDIwXUqUO6bWevX9gYlLTm0h-ep04M3NgBcR1LR03jMkPE2RNxY7N9EaQ_7dTgZDbQmgB55Ww0MWiMc5kUk6wSmvO9EJAFKZQc7XxN9okXc" />
</div>
<div className="flex flex-col flex-grow justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="font-headline-md text-headline-md text-primary uppercase">Ovation Rose Gold</h2>
<span className="font-price-display text-price-display text-primary">$12,800</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-1">38mm 18k Rose Gold</p>
<p className="font-body-md text-body-md text-on-surface-variant">Alligator Leather Strap</p>
</div>
<div className="flex justify-between items-end mt-8">
<div className="flex items-center gap-4">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">QTY</span>
<div className="flex items-center border border-primary">
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[16px]">remove</span></button>
<span className="w-8 text-center font-body-md text-body-md">1</span>
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[16px]">add</span></button>
</div>
</div>
<button className="font-label-caps text-label-caps text-on-surface-variant underline hover:text-primary transition-colors">REMOVE</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 xl:col-span-4 mt-12 lg:mt-0">
<div className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant">
<h3 className="font-headline-md text-headline-md text-primary uppercase mb-8 pb-4 hairline-b">Summary</h3>
<div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface mb-8">
<div className="flex justify-between">
<span>Subtotal</span>
<span>$17,300</span>
</div>
<div className="flex justify-between">
<span>Shipping</span>
<span className="uppercase font-label-caps text-label-caps self-center">Complimentary</span>
</div>
<div className="flex justify-between text-on-surface-variant text-sm">
<span>Taxes</span>
<span>Calculated at checkout</span>
</div>
</div>
<div className="flex justify-between items-end pb-8 mb-8 hairline-b">
<span className="font-headline-md text-headline-md text-primary uppercase">Total</span>
<span className="font-price-display text-price-display text-primary">$17,300</span>
</div>
<button className="w-full bg-[#1A1A1A] text-white font-label-caps text-label-caps uppercase py-4 px-6 hover:bg-[#C5A059] transition-colors mb-4 flex items-center justify-center gap-2">
                        Proceed to Checkout
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<div className="text-center font-body-md text-body-md text-on-surface-variant text-sm mt-6 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">lock</span>
                        Secure SSL Checkout
                    </div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-background border-t border-outline-variant z-50 md:hidden">
<a className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:opacity-100 transition-all duration-150 active:scale-90" href="#">
<span className="material-symbols-outlined">home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:opacity-100 transition-all duration-150 active:scale-90" href="#">
<span className="material-symbols-outlined">search</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:opacity-100 transition-all duration-150 active:scale-90" href="#">
<span className="material-symbols-outlined">favorite</span>
</a>
<a className="flex flex-col items-center justify-center text-primary scale-110 active:scale-90 transition-all duration-150" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>shopping_bag</span>
</a>
</nav>
<footer className="bg-primary text-on-primary py-16 md:py-20 border-t border-outline-variant">
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            <div className="flex flex-col gap-6">
                <div className="font-headline-md text-headline-md tracking-tighter font-bold flex items-center gap-2">
                    <img src="imgs/logo_axios.png" alt="Axios Logo" className="h-28" />
                </div>
                <p className="font-body-md text-body-md text-surface-variant opacity-80 max-w-xs">
                    Transparently building high-quality minimal watches from the finest components and materials.
                </p>
            </div>

            
            <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-2 gap-8">
                <div className="flex flex-col gap-4">
                    <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-secondary">Shop</h4>
                    <nav className="flex flex-col gap-2">
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Best Sellers</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">New Arrivals</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Vintage</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Swiss Essence</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-secondary">Support</h4>
                    <nav className="flex flex-col gap-2">
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Shipping</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Returns</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Warranty</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Contact Us</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-secondary">Company</h4>
                    <nav className="flex flex-col gap-2">
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Our Story</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Sustainability</a>
                        <a href="#" className="text-surface-variant hover:text-on-primary transition-colors text-sm">Careers</a>
                    </nav>
                </div>
            </div>

            
            <div className="flex flex-col gap-6">
                <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-secondary">Join our newsletter</h4>
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-outline-variant py-2 text-on-primary placeholder:text-surface-variant/50 focus:outline-none focus:border-secondary transition-colors" />
                    </div>
                    <button className="bg-on-primary text-primary font-label-caps text-label-caps py-3 px-6 uppercase tracking-widest hover:bg-secondary hover:text-on-primary transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span className="text-[12px] text-surface-variant opacity-60">© 2024 VANGO. All rights reserved.</span>
                <div className="flex gap-4">
                    <a href="#" className="text-[12px] text-surface-variant hover:text-on-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="text-[12px] text-surface-variant hover:text-on-primary transition-colors">Terms of Service</a>
                </div>
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-on-primary hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[20px]">public</span></a>
                <a href="#" className="text-on-primary hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[20px]">share</span></a>
                <a href="#" className="text-on-primary hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
                <a href="#" className="text-on-primary hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[20px]">camera</span></a>
            </div>
        </div>
    </div>
</footer>

        </div>
    );
}
