
import React from 'react';

export default function Jornal() {
    return (
        <div className="jornal-page">
            

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
<a className="font-label-caps text-label-caps text-white border-b-2 border-white h-full flex items-center pt-[2px]" href="jornal.html">BLOG</a>
</nav>

<div className="flex items-center gap-4 text-white">
<button className="bg-gray-800 border-2 border-[#c4c2c2] px-5 py-[11px] rounded-2xl text-white hover:border-none hover:bg-secondary hover:text-on-primary transition-colors duration-300" style={{"borderRadius":"17px"}}>
  Sign In
</button>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="search">search</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="person">person</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="favorite">favorite</span>
<div className="relative cursor-pointer hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-white" data-icon="shopping_bag">shopping_bag</span>
<span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</div>
</div></div>
</header>

<div className="overlay fixed inset-0 bg-primary z-40" id="nav-overlay"></div>

<aside className="nav-drawer fixed inset-y-0 left-0 w-80 bg-surface dark:bg-surface border-r border-primary dark:border-outline-variant z-50 flex flex-col h-full p-gutter" id="nav-drawer">
<div className="flex justify-between items-center mb-section-padding">
<div className="font-headline-md text-headline-md text-primary dark:text-on-surface uppercase">
                VANGO
            </div>
<button className="cursor-pointer hover:text-secondary transition-colors" id="close-menu-btn">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<nav className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all p-2 cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">watch</span>
<span className="font-label-caps text-label-caps uppercase">Collections</span>
</a>
<a className="flex items-center gap-4 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all p-2 cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-label-caps text-label-caps uppercase">Heritage</span>
</a>
<a className="flex items-center gap-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all p-2 cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">auto_awesome</span>
<span className="font-label-caps text-label-caps uppercase">Bespoke</span>
</a>
<a className="flex items-center gap-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all p-2 cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-caps text-label-caps uppercase">Support</span>
</a>
</nav>
</aside>

<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding space-y-section-padding">

<div className="text-center space-y-4">
<h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase text-primary">Journal</h1>
<p className="font-body-lg text-body-lg text-outline max-w-2xl mx-auto">Stories, insights, and editorial explorations into the art of horology and the VANGO heritage.</p>
</div>

<article className="grid grid-cols-1 md:grid-cols-12 gap-gutter group cursor-pointer">
<div className="md:col-span-8 overflow-hidden bg-surface-container-high h-[400px] md:h-[600px] relative">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A highly detailed close-up shot of a complex mechanical watch movement. Gears, springs, and ruby jewels are visible in sharp focus. The lighting is dramatic and moody, with high contrast highlighting the polished steel and brass components. The style is hyper-realistic luxury product photography, evoking precision and heritage in a sleek, modern light-mode context." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdrjLJCKGnWlnWuFR5Oj1UXnkppmQKBtGscjBhLA6AJJrjFiXTu_tJjtAyxFYZ5pVuRDF1hzxE0memtFTNblubH9VkKsj2A_6itnNX4n0Nj_Vxz0FA9r4RXUIJuYDosuxvPZlxSpIVOQWUNYLYljsOdP4BCnNZJ2qhZ3JQzDdaaCW8Z68siMdH5bGJR0MMdhPV5_W2SNE20wND9Y-R577x0ryJsukGFaoqpjvqllKqUlN6_UotxD-i')"}}></div>
</div>
<div className="md:col-span-4 flex flex-col justify-center space-y-6 md:pl-gutter pt-8 md:pt-0">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest border-b border-primary w-max pb-1">Technical</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase group-hover:text-secondary transition-colors duration-300">The Soul of Mechanical Movement</h2>
<p className="font-body-md text-body-md text-on-surface-variant">An exploration into the intricate ballet of gears and springs that define the heartbeat of a true luxury timepiece. We delve into the craftsmanship that transcends generations.</p>
<div className="pt-4">
<span className="font-label-caps text-label-caps text-primary uppercase flex items-center gap-2 group-hover:text-secondary transition-colors duration-300">
                        Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</div>
</article>

<div className="w-full border-t border-outline-variant h-px"></div>

<section>
<div className="flex justify-between items-end mb-12">
<h3 className="font-headline-md text-headline-md text-primary uppercase">Recent Articles</h3>
<div className="hidden md:flex gap-4">
<button className="font-label-caps text-label-caps text-primary border-b border-primary pb-1">All</button>
<button className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors pb-1">Heritage</button>
<button className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors pb-1">Lifestyle</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<article className="group cursor-pointer flex flex-col gap-4">
<div className="bg-surface-container-high h-[300px] overflow-hidden relative">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A pristine, minimalist flat lay composition featuring an elegant automatic dress watch resting on a textured concrete surface. Surrounding the watch are subtle elements like a fine leather strap, a loupe, and scattered watchmaker tools. The lighting is soft, diffused, and bright, fitting a high-end luxury lifestyle editorial in a clean, high-contrast light mode design." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwBFE383jEl0KDnzyiFNXgubuNkpr9nb-6fYaxoeCx2RVAMRlzxytYgIU6LEFoDLj56tUSPgm8egJP7sYXGbxgzbTQx2ReD2y6bJvj7eHIZHTJ6PhO5Q2plf2B0c_cHYOSYXqgZC0fe-DWSv9hPgsIwhS_1CSEZs9kdHdmga2OcL2P3lVRz0-VlM8ixqYWPC9dcx070cd6oJaq2x74Z_xEW5VnupIbGiCuHYMu-WLtHDUBciw5AVSs')"}}></div>
</div>
<div className="space-y-2">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Heritage</span>
<h4 className="font-headline-md text-headline-md text-primary uppercase group-hover:text-secondary transition-colors duration-300 line-clamp-2">How to Choose Your First Automatic Watch</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Navigating the world of horology can be daunting. A guide to understanding what makes an automatic watch a worthy investment.</p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="bg-surface-container-high h-[300px] overflow-hidden relative">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A striking historical archive photo style image of an early 20th-century aviator's chronograph watch. The watch is presented against a stark white background with a sharp, deep black shadow, emphasizing its geometric case and intricate dial. The aesthetic is stark, graphic, and highly editorial, echoing vintage luxury catalogs with modern minimalist precision." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn0fyCHGjvHA4vz4Iu3-YI1UwMXkZONEl9nKgb_Z3aHlHAO8pSnGQVGv_8AdDCJ3UZWaupxT4EpjueJJO1ARmEa9OoEZm_Rk9e-V_4bAUfdZEoDgTtoMGkqiWjXi3xzsFV8cTvAc8WagMvkOP1hnT-KXe6iKNYjlZbakt7j9AB7VkDboNYg7TVcW-7q0zrIytKclIdqnCaqJsa-QKzw5KEMePnn8-MBqzWFzLJH2lqK2GFPcbHUsIq')"}}></div>
</div>
<div className="space-y-2">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Technical</span>
<h4 className="font-headline-md text-headline-md text-primary uppercase group-hover:text-secondary transition-colors duration-300 line-clamp-2">The History of the Chronograph</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Tracing the evolution of the chronograph from its origins in horse racing to its vital role in aviation and space exploration.</p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="bg-surface-container-high h-[300px] overflow-hidden relative">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated lifestyle shot showing a wrist wearing a sleek, modern luxury sports watch, resting on the steering wheel of a classic vintage sports car. The focus is sharp on the watch face, with the leather interior blurred in the background. The color palette features deep charcoal, brushed steel, and warm sunlight, conveying exclusivity and timeless elegance." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqwF_R-LPWcqMjSbjKXpsW3PKC1o_CRpOU56txELS4To_I_vLkr7oVP47bpszVCfPpGOSCA5AhFx5ty0k_CXg346t_EzshfOjuItLiGOWVM4op25qPZuPj_o8v3H-U6-TVw0kmucxrWZsJAngYddMTp69-0FAFkIcA6XTJCKTw-KM3WFPecQ63RlXw2ArIQAQdZu9vxZwn_H8CujdxjBZ0fjqnr7MzXukrpifpRvgMfbfoMRMJOM8c')"}}></div>
</div>
<div className="space-y-2">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Lifestyle</span>
<h4 className="font-headline-md text-headline-md text-primary uppercase group-hover:text-secondary transition-colors duration-300 line-clamp-2">Time and Motion: The Art of Driving</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Exploring the enduring connection between classic automobiles and mechanical timepieces. A journey through design and performance.</p>
</div>
</article>
</div>
<div className="mt-16 flex justify-center">
<button className="border border-primary px-8 py-4 font-label-caps text-label-caps text-primary uppercase hover:bg-primary hover:text-on-primary transition-colors duration-300">
                    Load More
                </button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 bg-surface-container-high mt-section-padding">
<div className="md:col-span-5 bg-primary text-on-primary p-margin-mobile md:p-margin-desktop flex flex-col justify-center space-y-6">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">Join The Inner Circle</h3>
<p className="font-body-md text-body-md text-on-primary/80">Subscribe to receive exclusive editorial content, early access to new collections, and invitations to private events.</p>
</div>
<div className="md:col-span-7 p-margin-mobile md:p-margin-desktop flex flex-col justify-center items-center">
<form className="w-full max-w-md space-y-8">
<div className="relative">
<input className="w-full bg-transparent border-0 border-b border-primary focus:ring-0 focus:border-secondary px-0 py-2 font-label-caps text-label-caps text-primary placeholder:text-outline transition-colors" placeholder="YOUR EMAIL ADDRESS" required="" type="email" />
</div>
<button className="w-full bg-primary text-on-primary font-label-caps text-label-caps uppercase py-4 hover:bg-secondary transition-colors duration-300" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>
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
