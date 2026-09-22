
import React from 'react';

export default function Profile() {
    return (
        <div className="profile-page">
            

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
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block border-b-2 border-white h-full flex items-center pt-[2px] pb-4" data-icon="person">person</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="favorite">favorite</span>
<div className="relative cursor-pointer hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-white" data-icon="shopping_bag">shopping_bag</span>
<span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</div>
</div></div>
</header>

<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-section-padding">

<section className="mb-24 flex flex-col items-center text-center border-b border-outline-variant pb-12">
<h2 className="font-display-xl text-display-xl mb-4">Welcome, Julian</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Manage your VANGO experience, view your order history, and update your personal details in one secure location.</p>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<aside className="hidden lg:block lg:col-span-3 pr-8">
<nav className="flex flex-col gap-6 sticky top-32">
<button className="text-left font-label-caps text-label-caps text-primary border-b border-primary pb-2 w-full flex justify-between items-center group">
                        ORDER HISTORY
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="text-left font-label-caps text-label-caps text-on-surface-variant border-b border-transparent hover:border-outline-variant pb-2 w-full transition-colors flex justify-between items-center group">
                        ADDRESSES
                    </button>
<button className="text-left font-label-caps text-label-caps text-on-surface-variant border-b border-transparent hover:border-outline-variant pb-2 w-full transition-colors flex justify-between items-center group">
                        PAYMENT METHODS
                    </button>
<button className="text-left font-label-caps text-label-caps text-on-surface-variant border-b border-transparent hover:border-outline-variant pb-2 w-full transition-colors flex justify-between items-center group">
                        ACCOUNT SETTINGS
                    </button>
<button className="text-left font-label-caps text-label-caps text-on-surface-variant border-b border-transparent hover:text-error hover:border-error pb-2 w-full transition-colors mt-12 flex justify-between items-center">
                        SIGN OUT
                    </button>
</nav>
</aside>

<div className="lg:col-span-9 flex flex-col gap-section-padding">

<section id="orders">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">Recent Orders</h3>
<div className="flex flex-col gap-8">

<div className="border border-primary-container p-6 flex flex-col md:flex-row gap-6 items-start md:items-center bg-surface-container-lowest">
<div className="w-24 h-24 bg-surface-container flex-shrink-0 relative overflow-hidden">
<img className="object-cover w-full h-full" data-alt="A macro photograph of a luxury mechanical watch face, showcasing intricate gears, silver and gold tones, and meticulous Swiss craftsmanship against a stark white background in a highly lit, minimal studio setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwOtf6nLUj_6zgtSJWl8tAzB5JcSBJ14WOkfNawkDoCJnxHVK97sWOaz0MlKBjdzJbZRGfwLmjCuXpo5S-ItAA5dEWtzGMFbDZJtJvJML0LInjoyb4zk9hpQRm_6cIc6GsayGRX5SDWkmoNzEOcnTLCVG_An9zaq2i7oYYGm75FXugOfUo3-rYsVhQteltQD3HRHFPrYJK_w1feiSq72uAcgVJXH5FwSWojXX-LOj0KssWLz0XZZUu" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline-md text-headline-md text-primary-container">Chronograph Masterpiece</h4>
<span className="font-price-display text-price-display">$12,500</span>
</div>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-4">ORDER #VN-84729 • OCT 12, 2023</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-body-md text-body-md text-secondary uppercase tracking-widest text-xs font-semibold">Delivered</span>
</div>
</div>
<div className="mt-4 md:mt-0 w-full md:w-auto">
<button className="w-full md:w-auto border border-primary-container px-6 py-3 font-label-caps text-label-caps text-primary-container hover:bg-primary-container hover:text-on-primary transition-colors">VIEW DETAILS</button>
</div>
</div>

<div className="border border-outline-variant p-6 flex flex-col md:flex-row gap-6 items-start md:items-center bg-surface-container-lowest opacity-70">
<div className="w-24 h-24 bg-surface-container flex-shrink-0 relative overflow-hidden">
<img className="object-cover w-full h-full grayscale" data-alt="A minimalist overhead shot of a classic leather watch strap in deep brown, resting on a stark white background with sharp, geometric lighting creating high contrast and absolute precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1CkDbi3_Rss2A4uNAAVj0hDdFKPm32Lc17waMpD6x9m7-yVoesPyjmExksHu6KX4xOojg0Rd-gKTq5ewZ-nCHP5f9zUhrNtZiT6_cnmaQbVeoGkvm2jv2aeZFPnBj6UDl8ggXjLEMtRQT4YYq2cc2ed6HF8glDJm-UKZYxZHqiemqgWqHv8ydHF0tpaO7esqLGh7f1tqpdTzqSQJhY5KykileC7aOwQLfnvjkOz-E4tDiuZ60CTJ9" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline-md text-headline-md text-on-surface-variant text-lg">Heritage Leather Strap</h4>
<span className="font-price-display text-price-display text-on-surface-variant text-base">$450</span>
</div>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-4">ORDER #VN-73810 • SEP 05, 2023</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-body-md text-body-md text-on-surface-variant uppercase tracking-widest text-xs font-semibold">Delivered</span>
</div>
</div>
</div>
</div>
</section>

<section id="addresses">
<div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Shipping Addresses</h3>
<button className="font-label-caps text-label-caps text-primary hover:text-secondary flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="add">add</span> NEW
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border border-primary-container p-6 relative bg-surface-container-lowest">
<span className="absolute top-6 right-6 font-label-caps text-label-caps text-primary bg-surface px-2 py-1">DEFAULT</span>
<h4 className="font-headline-md text-headline-md text-lg mb-2">Julian Vance</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                1440 Precision Ave<br />
                                Suite 12B<br />
                                Geneva, GE 1201<br />
                                Switzerland
                            </p>
<div className="mt-6 flex gap-4">
<button className="font-label-caps text-label-caps text-on-surface hover:text-secondary border-b border-transparent hover:border-secondary transition-all">EDIT</button>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-8 border border-outline-variant" id="settings">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">Personal Details</h3>
<form className="space-y-8 max-w-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative">
<input className="block w-full border-0 border-b border-primary-container bg-transparent py-2 px-0 text-on-surface focus:ring-0 focus:border-secondary font-body-md transition-colors peer" id="firstName" placeholder=" " type="text" value="Julian" />
<label className="absolute left-0 -top-4 font-label-caps text-label-caps text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-body-md peer-focus:-top-4 peer-focus:text-label-caps peer-focus:font-label-caps" htmlFor="firstName">FIRST NAME</label>
</div>
<div className="relative">
<input className="block w-full border-0 border-b border-primary-container bg-transparent py-2 px-0 text-on-surface focus:ring-0 focus:border-secondary font-body-md transition-colors peer" id="lastName" placeholder=" " type="text" value="Vance" />
<label className="absolute left-0 -top-4 font-label-caps text-label-caps text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-body-md peer-focus:-top-4 peer-focus:text-label-caps peer-focus:font-label-caps" htmlFor="lastName">LAST NAME</label>
</div>
</div>
<div className="relative mt-8">
<input className="block w-full border-0 border-b border-primary-container bg-transparent py-2 px-0 text-on-surface focus:ring-0 focus:border-secondary font-body-md transition-colors peer" id="email" placeholder=" " type="email" value="julian.vance@example.com" />
<label className="absolute left-0 -top-4 font-label-caps text-label-caps text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:font-body-md peer-focus:-top-4 peer-focus:text-label-caps peer-focus:font-label-caps" htmlFor="email">EMAIL ADDRESS</label>
</div>
<div className="pt-8">
<button className="bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 w-full md:w-auto hover:bg-secondary transition-colors" type="button">SAVE CHANGES</button>
</div>
</form>
</section>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-background border-t border-outline-variant z-50">
<button className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-caps text-[10px] mt-1">HOME</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="font-label-caps text-[10px] mt-1">SEARCH</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
<span className="font-label-caps text-[10px] mt-1">SAVED</span>
</button>
<button className="flex flex-col items-center justify-center text-primary scale-110 opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-caps text-[10px] mt-1">PROFILE</span>
</button>
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
