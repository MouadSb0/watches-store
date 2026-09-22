
import React from 'react';

export default function Favorites() {
    return (
        <div className="favorites-page">
            



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

<div className="flex items-center gap-4 text-white">
<a href="login.html" className="bg-gray-800 border-2 border-[#c4c2c2] px-5 py-[11px] rounded-2xl text-white hover:border-none hover:bg-secondary hover:text-on-primary transition-colors duration-300 inline-block text-center" style={{"borderRadius":"17px"}}>
  Sign In
</a>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="search">search</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block" data-icon="person">person</span>
<span className="material-symbols-outlined text-white hover:text-secondary transition-colors cursor-pointer hidden md:block border-b-2 border-white h-full flex items-center pt-[2px] pb-4" data-icon="favorite">favorite</span>
<div className="relative cursor-pointer hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-white" data-icon="shopping_bag">shopping_bag</span>
<span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</div>
</div></div>
</header>

<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
<div className="mb-16 md:mb-24 text-center flex flex-col items-center">
<h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase tracking-widest text-primary mb-4">Favorites</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Your curated selection of exceptional timepieces.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-12">

<div className="group relative flex flex-col no-corners hairline-border bg-surface-bright">
<button aria-label="Remove from favorites" className="absolute top-4 right-4 z-10 text-outline-variant hover:text-error transition-colors p-2">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
<div className="product-img-bg aspect-[4/5] w-full overflow-hidden flex items-center justify-center p-8">
<img alt="AXIOM Meridian Watch" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A pristine, high-resolution product shot of a luxury mechanical watch with a silver steel bracelet and a deep navy blue dial. The watch is positioned perfectly straight on a minimalist light grey background. High-key studio lighting emphasizes the crisp lines and metallic sheen of the casing, creating a sophisticated, high-contrast visual style typical of high-end horology catalogs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB274Xkyo9GrCVQGUqZZ0kdsFi0pgJ4gAskhDHRgEpn38c2ra5AcXcLYrM7lrfjIKJLHIXGFSzXdNOS4IIfLFJ74f2HpfEU3q7ki3m2MLjqRzZt_w38R2UR7df8a90Uoa4I2gx0YxvvOK9aNYsOXQHGy3zQroOcLPIJ_ia6W1D6UdAsGV1Ho8I-cFcwqi4lSHBj_z8OY_iH46DFM1AlYAZFbdhod91x-xvNW32QK6r1EG7VLsHIG4cn" />
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow justify-between border-t border-outline-variant">
<div className="mb-6">
<h3 className="font-headline-md text-headline-md text-primary mb-2">AXIOM Meridian</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">42mm, Automatic, Stainless Steel</p>
<p className="font-price-display text-price-display text-primary">$12,500</p>
</div>
<button className="flat-btn w-full py-4 font-label-caps text-label-caps no-corners">Add to Bag</button>
</div>
</div>

<div className="group relative flex flex-col no-corners hairline-border bg-surface-bright">
<button aria-label="Remove from favorites" className="absolute top-4 right-4 z-10 text-outline-variant hover:text-error transition-colors p-2">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
<div className="product-img-bg aspect-[4/5] w-full overflow-hidden flex items-center justify-center p-8">
<img alt="VANGUARD Classic Watch" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A detailed, macro-style product photograph of a luxury dress watch featuring a slim rose gold case and a clean white dial with Roman numerals. The watch is displayed on a textured black alligator leather strap against a flat, bright white background. The lighting is soft and even, highlighting the elegance and precision of the minimalist design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-2ODL8eQ8rkpFAgi71Q8Pjx6ghZFhxWPOHIGKPkx-qOIkjqdgXD-y-OcnynIbv_aunh7b1JjUQ17N_IheKMrtc5ZBVzuaUL7WG39AcFtnwhHzPIgHoDZhzkxmAS-xWlaiGCpkKQSz74PZg_t4kysTz14BoLIEYbfkKUK6dNgJVkdDv_WUqkdETIenUi4nOHIb40JI7ZLMYw3H7HbOv5n3Zi_h6lVS2qv03u59x9oyODZbQE6an-P" />
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow justify-between border-t border-outline-variant">
<div className="mb-6">
<h3 className="font-headline-md text-headline-md text-primary mb-2">VANGUARD Classic</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">38mm, Manual-wind, Rose Gold</p>
<p className="font-price-display text-price-display text-primary">$18,200</p>
</div>
<button className="flat-btn w-full py-4 font-label-caps text-label-caps no-corners">Add to Bag</button>
</div>
</div>

<div className="group relative flex flex-col no-corners hairline-border bg-surface-bright">
<button aria-label="Remove from favorites" className="absolute top-4 right-4 z-10 text-outline-variant hover:text-error transition-colors p-2">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
<div className="product-img-bg aspect-[4/5] w-full overflow-hidden flex items-center justify-center p-8">
<img alt="ECLIPSE Chrono Watch" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A striking studio shot of a modern, tactical luxury chronograph watch. It features a matte black ceramic case, a complex skeletonized dial revealing the mechanical movement, and a durable black rubber strap. The background is a stark, clean off-white. Dramatic, directional lighting casts sharp shadows, emphasizing the architectural and rugged nature of the timepiece." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-xUEmDSbXUOhl23TtNY2Ns1lqBa0BM3lLNSzSaIjwrLZ3KUI7itVQH5IAztispngFDqFVMVISvO3WEX_FQNzzU8i0z5lF_m-AVd5TfR8-DxNTQy7RBllVSahGJTW27OxDpkHSXcURbTFqi2ffPQCie_q_BxFxaMJoaKD5-Sg5Y068W-DeYH3mIlJowLZ8Ken1mkK_eQYWvCSwCzXl1kGfJhQHYAPQRsVds6nBAUIdOnE6UxiEVMX" />
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow justify-between border-t border-outline-variant">
<div className="mb-6">
<h3 className="font-headline-md text-headline-md text-primary mb-2">ECLIPSE Chrono</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">44mm, Chronograph, Ceramic</p>
<p className="font-price-display text-price-display text-primary">$24,900</p>
</div>
<button className="flat-btn w-full py-4 font-label-caps text-label-caps no-corners">Add to Bag</button>
</div>
</div>
</div>


</main>

<nav className="md:hidden fixed bottom-0 full-width z-50 border-t border-outline-variant dark:border-outline flat no shadows fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-background dark:bg-background">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant opacity-60 hover:opacity-100 transition-all font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="text-[10px]">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant opacity-60 hover:opacity-100 transition-all font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined mb-1" data-icon="search">search</span>
<span className="text-[10px]">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-primary dark:text-on-background scale-110 font-label-caps text-label-caps opacity-70 transition-opacity" href="#">
<span className="material-symbols-outlined mb-1" data-icon="favorite" data-weight="fill">favorite</span>
<span className="text-[10px]">Saved</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant opacity-60 hover:opacity-100 transition-all font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="text-[10px]">Profile</span>
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
