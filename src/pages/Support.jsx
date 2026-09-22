
import React from 'react';

export default function Support() {
    return (
        <div className="support-page">
            

<header className="bg-background dark:bg-background text-primary dark:text-on-background font-label-caps text-label-caps w-full top-0 sticky border-b border-primary dark:border-outline-variant flat no shadows z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<button className="cursor-pointer active:opacity-70 hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>menu</span>
</button>
<a className="font-headline-md text-headline-md tracking-widest text-primary dark:text-on-background cursor-pointer active:opacity-70 hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300" href="#">
                VANGO
            </a>
<button className="cursor-pointer active:opacity-70 hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300 font-label-caps text-label-caps uppercase">
                Cart
            </button>
</div>
</header>

<aside className="fixed inset-y-0 left-0 w-80 bg-surface dark:bg-surface border-r border-primary dark:border-outline-variant flex flex-col h-full p-gutter transform -translate-x-full transition-transform duration-300 z-50" id="nav-drawer">
<div className="flex items-center justify-between mb-8">
<span className="font-headline-md text-headline-md text-primary dark:text-on-surface">VANGO</span>
<button className="text-primary cursor-pointer active:opacity-70" id="close-drawer">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<nav className="flex flex-col gap-4 font-label-caps text-label-caps">
<a className="flex items-center gap-4 p-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">watch</span>
<span>Collections</span>
</a>
<a className="flex items-center gap-4 p-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">history</span>
<span>Heritage</span>
</a>
<a className="flex items-center gap-4 p-4 text-on-surface dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">auto_awesome</span>
<span>Bespoke</span>
</a>
<a className="flex items-center gap-4 p-4 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container hover:bg-surface-variant dark:hover:bg-tertiary-container transition-all cursor-pointer active:translate-x-1" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span>Support</span>
</a>
</nav>
</aside>

<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">

<section className="text-center mb-24 max-w-3xl mx-auto">
<h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-primary mb-8 tracking-tighter uppercase">Support Center</h1>
<div className="relative w-full">
<input className="w-full bg-transparent border-b border-primary py-4 font-label-caps text-label-caps text-primary placeholder-outline-variant rounded-none" placeholder="HOW CAN WE ASSIST YOU?" type="text" />
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined">search</span>
</button>
</div>
</section>

<nav className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 font-label-caps text-label-caps border-b border-outline-variant pb-4">
<button className="text-primary border-b-2 border-primary pb-2 font-bold uppercase cursor-pointer" data-target="shipping">Shipping</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-2 uppercase cursor-pointer" data-target="returns">Returns</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-2 uppercase cursor-pointer" data-target="warranty">Warranty</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-2 uppercase cursor-pointer" data-target="care">Care</button>
</nav>

<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="hidden md:block md:col-span-4 h-full min-h-[500px]">
<div className="bg-cover bg-center w-full h-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="A macro photograph of an intricate, luxury mechanical watch movement, glowing softly in dramatic, low-key lighting. The gears are meticulously crafted from polished steel and gold, set against a deep charcoal background. The aesthetic is highly technical, precise, and editorial, emphasizing the microscopic perfection of horological engineering." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3nIXY9guc3z8ORC-GcQyERzlHUMpU6NrqMMqEk3W6DSMVdOCzDAbo6s9VBCW6kJDL3Iu7TecL3NI85M-jry08b-iSZopnNPDYSfZaaeAsg14eKEl1cRhFfh_c_IOnkL-rfmyhu3LpgcLHMIZCdkA_M-i6ST_sTaGn7HkE5DAZlduVEBjtUi7KjRDzULg7TETn38zsdcgOUy6sYVi0zYBMLlWqMEPmB0jassk5CzjRPWBYKbQy9WuD')"}}></div>
</div>

<div className="col-span-1 md:col-span-8 flex flex-col gap-0 border-t border-primary">

<article className="border-b border-primary py-6 cursor-pointer group accordion-toggle">
<div className="flex justify-between items-center w-full">
<h3 className="font-body-lg text-body-lg text-primary font-medium group-hover:text-secondary transition-colors pr-8">What is the processing time for my order?</h3>
<span className="material-symbols-outlined text-primary accordion-icon">expand_more</span>
</div>
<div className="accordion-content mt-4 font-body-md text-body-md text-on-surface-variant pr-8">
<p>All Vango timepieces are meticulously assembled and rigorously tested before dispatch. Please allow 3 to 5 business days for standard order processing. Bespoke or engraved pieces require an additional 10 to 14 business days to ensure the highest standards of craftsmanship are met.</p>
</div>
</article>

<article className="border-b border-primary py-6 cursor-pointer group accordion-toggle">
<div className="flex justify-between items-center w-full">
<h3 className="font-body-lg text-body-lg text-primary font-medium group-hover:text-secondary transition-colors pr-8">Do you offer international shipping?</h3>
<span className="material-symbols-outlined text-primary accordion-icon">expand_more</span>
</div>
<div className="accordion-content mt-4 font-body-md text-body-md text-on-surface-variant pr-8">
<p>Yes, we provide secure, fully insured international delivery via premium couriers. Duties and taxes are calculated at checkout based on your destination country. All shipments are trackable and require a direct signature upon delivery to guarantee security.</p>
</div>
</article>

<article className="border-b border-primary py-6 cursor-pointer group accordion-toggle">
<div className="flex justify-between items-center w-full">
<h3 className="font-body-lg text-body-lg text-primary font-medium group-hover:text-secondary transition-colors pr-8">How do I track my shipment?</h3>
<span className="material-symbols-outlined text-primary accordion-icon">expand_more</span>
</div>
<div className="accordion-content mt-4 font-body-md text-body-md text-on-surface-variant pr-8">
<p>Once your order departs our Geneva atelier, you will receive an email containing a secure tracking link. You may also track the status directly within your Vango client portal under 'Order History'.</p>
</div>
</article>

<article className="border-b border-primary py-6 cursor-pointer group accordion-toggle">
<div className="flex justify-between items-center w-full">
<h3 className="font-body-lg text-body-lg text-primary font-medium group-hover:text-secondary transition-colors pr-8">What is your policy on missing packages?</h3>
<span className="material-symbols-outlined text-primary accordion-icon">expand_more</span>
</div>
<div className="accordion-content mt-4 font-body-md text-body-md text-on-surface-variant pr-8">
<p>Every Vango parcel is fully insured until it is signed for by the recipient. In the rare event of a transit issue, our dedicated concierge team will initiate an investigation with the courier immediately and arrange for a replacement or refund.</p>
</div>
</article>
</div>
</section>

<section className="mt-24 text-center border border-primary p-12 bg-surface">
<h2 className="font-headline-md text-headline-md text-primary mb-4 uppercase">Still Need Assistance?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-lg mx-auto">Our dedicated concierge team is available to assist you with any further inquiries regarding your timepiece or order.</p>
<button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase px-8 py-4 hover:bg-secondary transition-colors">
                Contact Concierge
             </button>
</section>
</main>

<footer className="bg-surface-container-highest dark:bg-tertiary-container text-primary dark:text-on-tertiary-container w-full mt-section-padding border-t border-primary dark:border-outline-variant flat no shadows">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
<div className="col-span-1">
<span className="font-headline-md text-headline-md uppercase tracking-tighter">VANGO</span>
<p className="font-body-md text-body-md mt-4 text-on-surface-variant">© 2024 VANGO GENÈVE. ALL RIGHTS RESERVED.</p>
</div>
<div className="col-span-1 md:col-start-3 flex flex-col gap-4 font-label-caps text-label-caps">
<a className="text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Shop</a>
<a className="text-primary dark:text-on-background font-bold hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Support</a>
</div>
<div className="col-span-1 flex flex-col gap-4 font-label-caps text-label-caps">
<a className="text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Company</a>
<a className="text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>


        </div>
    );
}
