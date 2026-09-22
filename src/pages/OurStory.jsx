
import React from 'react';

export default function OurStory() {
    return (
        <div className="ourstory-page">
            

<header className="bg-background dark:bg-background w-full top-0 sticky border-b border-primary dark:border-outline-variant z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<button aria-label="Menu" className="text-primary dark:text-on-background cursor-pointer active:opacity-70 md:hidden">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="font-headline-md text-headline-md tracking-widest text-primary dark:text-on-background cursor-pointer active:opacity-70">
                VANGO
            </div>
<nav className="hidden md:flex gap-8">
<a className="text-on-surface-variant dark:text-outline font-label-caps text-label-caps hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300" href="#">COLLECTIONS</a>
<a className="text-primary dark:text-on-background font-bold border-b border-primary font-label-caps text-label-caps hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300" href="#">HERITAGE</a>
<a className="text-on-surface-variant dark:text-outline font-label-caps text-label-caps hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300" href="#">BESPOKE</a>
</nav>
<button className="text-primary dark:text-on-background cursor-pointer active:opacity-70 font-label-caps text-label-caps hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300 flex items-center gap-2">
<span className="hidden md:inline">Cart</span>
<span className="material-symbols-outlined md:hidden" data-icon="shopping_bag">shopping_bag</span>
</button>
</div>
</header>

<aside className="fixed inset-y-0 left-0 w-80 bg-surface dark:bg-surface border-r border-primary dark:border-outline-variant z-[60] transform -translate-x-full transition-transform duration-300 ease-in-out md:hidden" id="mobile-drawer">
<div className="flex flex-col h-full p-gutter">
<div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-4">
<span className="font-headline-md text-headline-md text-primary dark:text-on-surface">VANGO</span>
<button className="text-primary cursor-pointer" id="close-drawer">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<nav className="flex flex-col gap-4">
<a className="flex items-center gap-4 p-3 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="watch">watch</span>
                    Collections
                </a>
<a className="flex items-center gap-4 p-3 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container translate-x-1 font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
                    Heritage
                </a>
<a className="flex items-center gap-4 p-3 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
                    Bespoke
                </a>
<a className="flex items-center gap-4 p-3 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                    Support
                </a>
</nav>
</div>
</aside>
<main>

<section className="w-full relative h-[70vh] md:h-[90vh] flex items-end">
<div className="absolute inset-0 bg-primary-container">
<img className="w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="A moody, high-contrast black and white photograph of a master watchmaker's hands meticulously assembling a complex mechanical movement. The scene is lit by a single, sharp desk lamp, creating deep shadows and highlighting the metallic gleam of microscopic gears and tweezers. The composition is highly editorial, dramatic, and emphasizes traditional Swiss craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXzWFLK7-b-0LyrIzdTQl-mHTqOauPKZ9Zo9ItOBFNx2whEDWwQLQ1_XfX-1u8uaJZJtAvMEZX8TM77d5sJ8i9e2rxhca6Zkq5f1lOIwZfms6Ep09JSp1keTAJSl3P2pKl3Nwy41ApS4-kPfrikbjHe-TdtNQmst_S9NFRa82DaY5J1PGkYerSfmcE8UkzpvBhEaEvyNnkH9hqMz2OAE38ZVfnpFi77pK6l8jcXQHXk4eoCtLibO99" />
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-padding">
<h1 className="font-display-xl text-display-xl text-on-primary max-w-3xl">A LEGACY OF PRECISION</h1>
</div>
</section>

<section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<div className="md:col-span-4 border-t border-primary pt-4">
<h2 className="font-label-caps text-label-caps text-primary">THE VISION</h2>
</div>
<div className="md:col-span-8 md:col-start-5">
<p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
                        Time is not merely measured; it is crafted.
                    </p>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl columns-1 md:columns-2 gap-8">
                        At VANGO, we believe that true luxury lies in the uncompromising pursuit of mechanical perfection. Every gear, every spring, and every bridge is a testament to an ideology that values permanence over the ephemeral. Our vision was born in the quiet stillness of the Swiss Alps, where the relentless passage of time demanded a worthy vessel. We do not just build watches; we engineer heirlooms designed to outlast their creators, embodying a silent poetry of motion and geometry.
                    </p>
</div>
</div>
</section>

<section className="w-full bg-surface-container-high py-section-padding border-y border-outline-variant">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
<div className="order-2 md:order-1 border border-primary p-4 bg-background">
<img className="w-full h-auto aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="A striking macro shot of a complex watch movement, specifically focusing on the tourbillon or balance wheel. The image has a stark, clinical aesthetic with high-contrast lighting, emphasizing the sharp angles of the bridges, the rubies, and the meticulously finished metallic surfaces. The color palette is minimal, primarily steel greys and deep blacks with hints of brass." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC86P-3lmEQ0bnv2inDZxN1XU9yrhb_X5LBPgWELXSUOrb-vKYneIOPqfqc-0FIPorMxwS4gkh3_O8p_i1Fy-A4y6coGElusHZ3pzL73-aVGB_xzEwHCCQJixsFOCd6H8NxHz_5pz3rUPqE6JvoxznG8MOOyM-ZpL57WM7ng21yBnC2X-7B2GGkxOmpaqb7NbOGS6rFYthA3dTWBv4fnsubVdVtW5IeazVEMyoRo4Ivm_HxnDtlw2uN" />
</div>
<div className="order-1 md:order-2 md:pl-margin-desktop">
<span className="font-label-caps text-label-caps text-outline block mb-4">CRAFTSMANSHIP</span>
<h3 className="font-headline-md text-headline-md text-primary mb-6">UNCOMPROMISING ARCHITECTURE</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                            Our proprietary calibers are entirely conceived, developed, and assembled in-house in Geneva. We treat each movement as a micro-architectural project, stripping away unnecessary ornamentation to reveal the raw, structural beauty of the mechanics. The finishing techniques—anglage, perlage, and black polishing—are executed by hand, requiring hundreds of hours per timepiece to achieve a flawless, light-reflecting surface that machine production simply cannot replicate.
                        </p>
<a className="inline-block border border-primary px-8 py-4 font-label-caps text-label-caps text-primary hover:bg-secondary-fixed-dim hover:border-secondary-fixed-dim hover:text-tertiary transition-colors duration-300" href="#">
                            DISCOVER OUR CALIBERS
                        </a>
</div>
</div>
</div>
</section>

<section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="border-t border-primary pt-4 mb-16">
<h2 className="font-label-caps text-label-caps text-primary">TIMELINE</h2>
</div>
<div className="relative border-l border-outline-variant ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
<div className="relative">
<div className="absolute w-3 h-3 bg-primary -left-[38px] md:-left-[70px] top-2"></div>
<div className="font-headline-md text-headline-md text-primary mb-2">2014</div>
<h4 className="font-label-caps text-label-caps text-outline mb-4">FOUNDED IN GENEVA</h4>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        VANGO is established by a collective of master watchmakers disillusioned by mass production, united by a singular desire to return to the core principles of haute horlogerie.
                    </p>
</div>
<div className="relative">
<div className="absolute w-3 h-3 bg-primary -left-[38px] md:-left-[70px] top-2"></div>
<div className="font-headline-md text-headline-md text-primary mb-2">2016</div>
<h4 className="font-label-caps text-label-caps text-outline mb-4">THE FIRST PROTOTYPE</h4>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        After two years of intense research and development, the Series One prototype is unveiled, establishing the brand's signature minimalist aesthetic and architectural case design.
                    </p>
</div>
<div className="relative">
<div className="absolute w-3 h-3 bg-primary -left-[38px] md:-left-[70px] top-2"></div>
<div className="font-headline-md text-headline-md text-primary mb-2">2018</div>
<h4 className="font-label-caps text-label-caps text-outline mb-4">FIRST IN-HOUSE CALIBER</h4>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        A milestone achievement: the launch of the VG-01 caliber. A manually wound movement celebrated for its structural integrity, brutalist bridge design, and 72-hour power reserve.
                    </p>
</div>
<div className="relative">
<div className="absolute w-3 h-3 bg-primary -left-[38px] md:-left-[70px] top-2"></div>
<div className="font-headline-md text-headline-md text-primary mb-2">2023</div>
<h4 className="font-label-caps text-label-caps text-outline mb-4">THE GRAND COMPLICATION</h4>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        Introduction of the highly anticipated perpetual calendar, seamlessly integrating immense mechanical complexity within the brand's strictly austere design language.
                    </p>
</div>
</div>
</section>

<section className="py-section-padding px-margin-mobile md:px-margin-desktop text-center bg-primary text-on-primary">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 max-w-2xl mx-auto">
                BECOME PART OF THE LEGACY
            </h2>
<a className="inline-block bg-on-primary text-primary px-12 py-4 font-label-caps text-label-caps hover:bg-secondary-fixed-dim hover:text-tertiary transition-colors duration-300" href="#">
                EXPLORE THE COLLECTION
            </a>
</section>
</main>

<footer className="bg-surface-container-highest dark:bg-tertiary-container text-primary dark:text-on-tertiary-container w-full mt-section-padding border-t border-primary dark:border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
<div className="md:col-span-1">
<span className="font-headline-md text-headline-md uppercase tracking-tighter">VANGO</span>
</div>
<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Shop</a>
</div>
<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Support</a>
<a className="font-label-caps text-label-caps text-primary dark:text-on-background font-bold hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Company</a>
</div>
<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Privacy</a>
</div>
<div className="md:col-span-4 mt-16 pt-8 border-t border-outline-variant text-center">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 VANGO GENÈVE. ALL RIGHTS RESERVED.</p>
</div>
</div>
</footer>


        </div>
    );
}
