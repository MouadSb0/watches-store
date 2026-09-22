
import React from 'react';

export default function AllCollections() {
    return (
        <div className="allcollections-page">
            

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
<a className="font-label-caps text-label-caps text-white border-b-2 border-white h-full flex items-center pt-[2px]" href="all_collections.html">SHOP</a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="all_collections.html">PRODUCTS </a>
<a className="font-label-caps text-label-caps text-white hover:text-secondary transition-colors h-full flex items-center" href="jornal.html">BLOG</a>
</nav>

<div className="flex items-center gap-4 text-white">
<button style={{"border":"2px solid rgb(196, 194, 194)","padding":"11px 20px","borderRadius":"17px","color":"white"}}>Sign In</button>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="search">search</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="person">person</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="favorite">favorite</span>
<div className="relative cursor-pointer hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-white" data-icon="shopping_bag">shopping_bag</span>
<span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</div>
</div></div>
</header>

<div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 hidden transition-opacity opacity-0" id="nav-drawer-overlay"></div>
<aside className="fixed inset-y-0 left-0 w-80 bg-surface dark:bg-surface border-r border-primary dark:border-outline-variant z-50 transform -translate-x-full transition-transform duration-300 flex flex-col h-full p-gutter shadow-xl md:hidden" id="nav-drawer">
<div className="flex justify-between items-center mb-8">
<span className="font-headline-md text-headline-md text-primary dark:text-on-surface">VANGO</span>
<button className="text-primary p-2" id="close-drawer">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-4 p-4 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-label-caps text-label-caps rounded-sm translate-x-1 transition-all" href="#">
<span className="material-symbols-outlined">watch</span>
<span>Collections</span>
</a>
<a className="flex items-center gap-4 p-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container font-label-caps text-label-caps rounded-sm transition-all" href="#">
<span className="material-symbols-outlined">history</span>
<span>Heritage</span>
</a>
<a className="flex items-center gap-4 p-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container font-label-caps text-label-caps rounded-sm transition-all" href="#">
<span className="material-symbols-outlined">auto_awesome</span>
<span>Bespoke</span>
</a>
<a className="flex items-center gap-4 p-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container font-label-caps text-label-caps rounded-sm transition-all" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span>Support</span>
</a>
</nav>
</aside>
<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-12">

<div className="flex flex-col gap-6">
<nav className="font-label-caps text-label-caps text-outline flex items-center gap-2">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span>/</span>
<span className="text-primary">Shop</span>
</nav>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">All Collections</h1>
</div>

<div className="sticky top-[73px] z-30 bg-background/90 backdrop-blur-md border-b border-primary py-4 flex justify-between items-center -mx-margin-mobile px-margin-mobile md:-mx-margin-desktop md:px-margin-desktop">
<button className="flex items-center gap-2 font-label-caps text-label-caps text-primary border border-primary px-4 py-2 hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[16px]">tune</span>
                FILTER
            </button>
<div className="hidden md:flex gap-4 font-label-caps text-label-caps text-outline">
<span className="text-primary cursor-pointer border-b border-primary">ALL</span>
<span className="cursor-pointer hover:text-primary transition-colors">MEN</span>
<span className="cursor-pointer hover:text-primary transition-colors">WOMEN</span>
<span className="cursor-pointer hover:text-primary transition-colors">COMPLICATIONS</span>
</div>
<div className="flex items-center gap-2 font-label-caps text-label-caps text-primary">
<span className="hidden md:inline">SORT BY:</span>
<select className="bg-transparent border-none text-primary font-label-caps text-label-caps cursor-pointer focus:ring-0 p-0 pr-6">
<option>NEWEST</option>
<option>PRICE: HIGH TO LOW</option>
<option>PRICE: LOW TO HIGH</option>
</select>
</div>
</div>

<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-gutter md:gap-y-16 mt-4">

<article className="flex flex-col gap-4 group cursor-pointer">
<div className="aspect-square bg-surface-container-low flex items-center justify-center relative overflow-hidden group-hover:bg-surface-variant transition-colors duration-500">
<img className="object-cover w-[80%] h-[80%] drop-shadow-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-700" data-alt="A macro studio shot of a luxury watch, BREGUET Tradition 7057bb. The watch features an open-worked dial showcasing intricate mechanical gears and bridges in silver and ruthenium tones. The case is polished white gold, set against a pristine, stark white background. Lighting is highly controlled, emphasizing the metallic textures, bevels, and the classic blue steel hands. The aesthetic is extremely high-contrast, sharp, and editorial, suitable for a minimalist print catalog." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrS4au4VCU6CdTOrRXV_sElK8OtEf__d6M74E-dazRupyTt8eUHiybpag33yvF56DLFvap8Rnrnnwv1iZFXlF1tbuNlioXBJKPUjwAWhgNw3LAwZUMp1j28J6yS72-regu_0PB9_1Ur4cnapneSDoWdF-3r0UHqfyt4HRs2YYIoGETU3xY8gyMlpstdSS7eB-ig8wK4qaOLIxJFbRKdQ0h8LF_e_xbXkkGS6g_S4bpETfI0ZWLYPoc" />
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11/12 md:w-auto text-center hover:bg-secondary">ADD TO BAG</button>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<span className="font-label-caps text-label-caps text-outline tracking-widest uppercase">Breguet</span>
<h3 className="font-body-lg text-body-lg text-primary truncate w-full">Tradition 7057bb</h3>
<span className="font-price-display text-price-display text-primary mt-2">$32,500.00</span>
</div>
</article>

<article className="flex flex-col gap-4 group cursor-pointer">
<div className="aspect-square bg-surface-container-low flex items-center justify-center relative overflow-hidden group-hover:bg-surface-variant transition-colors duration-500">
<img className="object-cover w-[80%] h-[80%] drop-shadow-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-700" data-alt="A front-facing, highly detailed product photograph of an Audemars Piguet Royal Oak watch in stainless steel. The iconic octagonal bezel with exposed screws is sharply in focus, alongside the blue 'Grande Tapisserie' patterned dial. The background is an expansive, flat light grey, emphasizing the precise geometry of the watch. The lighting is even and soft, creating a sleek, industrial luxury vibe devoid of shadows or distractions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8944ufLYJb4dqykXyb0zDgnbMYikTXdY41suoDi797sMDNrp5_SWQ5P6MAzz3aRQ3Ag48NmzD_am1OHaSxELTXlCrh_x-rcBa4C98ZfdNbTz-e8o50OosUxMuQ07EC5T9vUuqrD1xPU9OxOb1v_NQyX7WYy0_Pb7vRBk5GT6jRx9uClLjoCB0jrfEKbaKkRq_uI3qFhLI-kxhpf4qAZsn18QDGvIDssbUJni8qj_M2sgsn61NN0vK" />
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11/12 md:w-auto text-center hover:bg-secondary">ADD TO BAG</button>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<span className="font-label-caps text-label-caps text-outline tracking-widest uppercase">Audemars Piguet</span>
<h3 className="font-body-lg text-body-lg text-primary truncate w-full">Royal Oak 15500ST</h3>
<span className="font-price-display text-price-display text-primary mt-2">$25,300.00</span>
</div>
</article>

<article className="flex flex-col gap-4 group cursor-pointer">
<div className="aspect-square bg-surface-container-low flex items-center justify-center relative overflow-hidden group-hover:bg-surface-variant transition-colors duration-500">
<img className="object-cover w-[80%] h-[80%] drop-shadow-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-700" data-alt="A sophisticated studio shot of a Patek Philippe Calatrava watch. The timepiece features a sleek 18k rose gold case, a minimalist white dial with gold indices, and a dark brown alligator leather strap. The watch is positioned squarely against a pure white, featureless background to isolate its elegant lines. The lighting highlights the warm tones of the rose gold and the subtle texture of the leather, presenting a timeless, classic aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSSPeBZCr6XNLMukBtAX4KNDXe8Zh_JUd0TNKSjxLByhJYNrhiIv4IgGuR5jU8TrJdy6Nd5JOmehBjp_K1wbaQzRr0h7xkKjAicAe9zPBTiMNwMLzuomyGKgsCuHmgXj5NIc7lmRp1TD2xxsM-U107bENelRqz3v4AYaFX14jD_HoE71Q-FwPBkZuwhy6fwzlrFGX6bxJkMM4Y6dCkIP2iMTZz_5zmB2EZNrT4Q0kvfrnniSNGQap_" />
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11/12 md:w-auto text-center hover:bg-secondary">ADD TO BAG</button>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<span className="font-label-caps text-label-caps text-outline tracking-widest uppercase">Patek Philippe</span>
<h3 className="font-body-lg text-body-lg text-primary truncate w-full">Calatrava 5227R</h3>
<span className="font-price-display text-price-display text-primary mt-2">$37,850.00</span>
</div>
</article>

<article className="flex flex-col gap-4 group cursor-pointer">
<div className="aspect-square bg-surface-container-low flex items-center justify-center relative overflow-hidden group-hover:bg-surface-variant transition-colors duration-500">
<img className="object-cover w-[80%] h-[80%] drop-shadow-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-700" data-alt="A striking product image of an A. Lange & Söhne Lange 1 watch. The platinum case and distinctive asymmetrical dial layout with an outsize date and power reserve indicator are meticulously captured. The background is a very light, almost white grey, creating a stark, high-contrast environment. The image emphasizes the German silver movement components visible through the sapphire case back (implied by reflections), focusing on mechanical purity and architectural precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgqwudJRdNf1QRgYjmqENOA4w4Hb883EoBSWpzT6uJdeRY3zh4k-5RMnOlsd36X8IRtoQPWQg-mcCp_0w9Mk6ADIqhdETXMphU2YQ6q7848GcXe71Cs1gu24BRUTQIUts7IUUl8dii3raUHZRfDrppoZfK3SRkPRF3SjzDUShe1oG_2JVuDGkV9xQu-rH-Pmf1QkMDLyPUmmBnwRacj8HJQ-VYrx7KkZ1JHffXx6CBYB_wTfjqKPTW" />
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11/12 md:w-auto text-center hover:bg-secondary">ADD TO BAG</button>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<span className="font-label-caps text-label-caps text-outline tracking-widest uppercase">A. Lange & Söhne</span>
<h3 className="font-body-lg text-body-lg text-primary truncate w-full">Lange 1</h3>
<span className="font-price-display text-price-display text-primary mt-2">$42,100.00</span>
</div>
</article>
</section>

<div className="flex justify-center mt-12 mb-8">
<button className="border border-primary text-primary font-label-caps text-label-caps px-12 py-4 hover:bg-primary hover:text-on-primary transition-colors">LOAD MORE (24)</button>
</div>
</main>

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
