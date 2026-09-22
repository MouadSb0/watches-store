
import React from 'react';

export default function Contact() {
    return (
        <div className="contact-page">
            

<header className="w-full top-0 sticky bg-surface border-b border-primary z-50">
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile">

<button aria-label="Menu" className="cursor-pointer transition-opacity duration-200 active:opacity-70 text-primary hover:text-secondary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>menu</span>
</button>

<a className="font-headline-md text-headline-md font-bold text-primary tracking-[0.2em] cursor-pointer transition-opacity duration-200 active:opacity-70 hover:text-secondary" href="#">
                VANGO
            </a>

<button aria-label="Shopping Bag" className="cursor-pointer transition-opacity duration-200 active:opacity-70 text-primary hover:text-secondary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>shopping_bag</span>
</button>
</div>
</header>
<main className="max-w-container-max mx-auto">

<section className="w-full px-margin-mobile md:px-margin-desktop pt-section-padding pb-gutter flex flex-col items-center text-center">
<h1 className="font-display-xl text-display-xl text-primary mb-6 uppercase md:text-display-xl text-headline-lg-mobile">Connect With Us</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                For inquiries regarding collections, heritage pieces, or bespoke services, our horological concierges are at your disposal.
            </p>
</section>

<section className="w-full px-margin-mobile md:px-margin-desktop py-section-padding">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-7 lg:pr-gutter">
<form className="flex flex-col gap-12">
<div className="flex flex-col md:flex-row gap-gutter">
<div className="flex-1">
<label className="sr-only" htmlFor="name">Name</label>
<input id="name" name="name" placeholder="FULL NAME" required="" type="text" />
</div>
<div className="flex-1">
<label className="sr-only" htmlFor="email">Email</label>
<input id="email" name="email" placeholder="EMAIL ADDRESS" required="" type="email" />
</div>
</div>
<div>
<label className="sr-only" htmlFor="subject">Subject</label>
<input id="subject" name="subject" placeholder="SUBJECT OF INQUIRY" required="" type="text" />
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="resize-none" id="message" name="message" placeholder="YOUR MESSAGE" required="" rows="5"></textarea>
</div>
<div className="pt-4">
<button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-secondary transition-colors duration-300 flex items-center gap-3" type="submit">
                                SEND INQUIRY
                                <span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 0"}}>arrow_right_alt</span>
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 lg:pl-gutter mt-section-padding lg:mt-0 flex flex-col gap-12 hairline-top lg:hairline-top-0 lg:border-l border-primary pt-12 lg:pt-0">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-6 uppercase tracking-widest">Global Headquarters</h3>
<address className="not-italic font-body-md text-body-md text-on-surface-variant space-y-2">
<p>Rue du Rhône 65</p>
<p>1204 Geneva, Switzerland</p>
<p className="pt-4">+41 22 555 0100</p>
<p>concierge@vangohorology.ch</p>
<p className="pt-4 font-label-caps text-label-caps text-primary">MON-FRI: 10:00 - 18:30</p>
</address>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-6 uppercase tracking-widest text-lg">London Boutique</h3>
<address className="not-italic font-body-md text-body-md text-on-surface-variant space-y-2">
<p>15 New Bond Street</p>
<p>London W1S 3ST, United Kingdom</p>
<p className="pt-4">+44 20 7946 0958</p>
</address>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-6 uppercase tracking-widest text-lg">New York Boutique</h3>
<address className="not-italic font-body-md text-body-md text-on-surface-variant space-y-2">
<p>750 Madison Avenue</p>
<p>New York, NY 10065, USA</p>
<p className="pt-4">+1 212 555 0199</p>
</address>
</div>
</div>
</div>
</section>

<section className="w-full px-margin-mobile md:px-margin-desktop pb-section-padding">
<div className="w-full h-96 bg-surface-container-high hairline-all overflow-hidden relative group">
<img className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" data-alt="A highly detailed, minimalist grayscale map of Geneva, Switzerland, focusing on the Rue du Rhône area. The map uses stark high-contrast black and white lines to denote streets and water, embodying a precise, architectural, and luxury horological aesthetic. No text or labels are visible, just the geometric precision of the city layout." data-location="Geneva, Switzerland" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_m9AzO5QKIpv9UmeYxTJvEChVnOa9d2rEvAY1HP4WGl89PrBgAcM66tdE77otLbebzc1Myp9K7Ekd1lqYaOQ-39WC8dkOf6ilF0Jh9KUU9JYtNjsH-rNL5rfqPu1or5DSLZwZFxXdjmKwnPfUInddhlpQDQTp4tlH2ZHh5dHrvI-sgR7dsER7--flYazV5jIg98KZe473-KvcUp7MkIWY_bPiG-sFHLLxLjI4MI-13OsG3hrypIU-" />
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="material-symbols-outlined text-primary text-4xl" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
</div>
</div>
</section>
</main>

<footer className="w-full mt-section-padding bg-primary text-on-primary border-t border-outline">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-section-padding max-w-container-max mx-auto gap-gutter md:px-margin-desktop px-margin-mobile">

<nav className="flex flex-wrap justify-center md:justify-start gap-6 font-body-md text-body-md uppercase tracking-widest">
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-colors duration-300 cursor-pointer" href="#">COLLECTIONS</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-colors duration-300 cursor-pointer" href="#">HERITAGE</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-colors duration-300 cursor-pointer" href="#">SERVICE</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-colors duration-300 cursor-pointer" href="#">BOUTIQUES</a>
<a className="text-on-primary font-bold hover:text-secondary-fixed-dim transition-colors duration-300 cursor-pointer" href="#">CONTACT</a>
</nav>

<div className="flex flex-col items-center md:items-end gap-2 mt-8 md:mt-0">
<span className="font-headline-md text-headline-md text-on-primary tracking-[0.2em] font-bold">VANGO</span>
<span className="font-body-md text-body-md uppercase tracking-widest text-on-primary-fixed-variant text-xs text-center md:text-right">
                    © 2024 VANGO HOROLOGY. ALL RIGHTS RESERVED.
                </span>
</div>
</div>
</footer>

        </div>
    );
}
