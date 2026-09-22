
import React from 'react';

export default function Register() {
    return (
        <div className="register-page">
            

<div className="hidden md:block md:w-1/2 relative bg-surface-container-high border-r border-primary">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A striking, close-up photograph of a luxury mechanical watch movement, focusing on the intricate gears, rubies, and polished steel components. The lighting is dramatic and directional, highlighting the brushed textures and creating deep, contrasting shadows. The overall aesthetic is highly technical, precise, and sophisticated, reflecting high-end horology. Colors are predominantly cool greys, silver, and deep black, with small bright red ruby accents." style={{"backgroundImage":"url('imgs/bg_register.webp')"}}></div>
<div className="absolute inset-0 bg-primary/10"></div> 
</div>

<div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center px-margin-mobile py-section-padding md:px-margin-desktop bg-background">
<div className="max-w-[480px] w-full mx-auto">

<header className="mb-16 text-center">
<img src="imgs/logo_bg.jpg" alt="Logo" className="h-24 mx-auto mb-4" />
<p className="font-headline-md text-headline-md text-on-surface-variant font-light">Join the Legacy</p>
</header>

<form action="#" className="space-y-8 flex flex-col gap-gutter" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="relative pt-6">
<label className="absolute top-0 left-0 font-label-caps text-label-caps text-on-surface-variant uppercase pointer-events-none" htmlFor="first_name">First Name</label>
<input className="input-minimal font-body-md text-body-md text-on-background placeholder-outline-variant" id="first_name" name="first_name" placeholder="" required="" type="text" />
</div>

<div className="relative pt-6">
<label className="absolute top-0 left-0 font-label-caps text-label-caps text-on-surface-variant uppercase pointer-events-none" htmlFor="last_name">Last Name</label>
<input className="input-minimal font-body-md text-body-md text-on-background placeholder-outline-variant" id="last_name" name="last_name" placeholder="" required="" type="text" />
</div>
</div>

<div className="relative pt-6">
<label className="absolute top-0 left-0 font-label-caps text-label-caps text-on-surface-variant uppercase pointer-events-none" htmlFor="email">Email Address</label>
<input className="input-minimal font-body-md text-body-md text-on-background placeholder-outline-variant" id="email" name="email" placeholder="" required="" type="email" />
</div>

<div className="relative pt-6">
<label className="absolute top-0 left-0 font-label-caps text-label-caps text-on-surface-variant uppercase pointer-events-none" htmlFor="password">Password</label>
<input className="input-minimal font-body-md text-body-md text-on-background placeholder-outline-variant" id="password" name="password" placeholder="" required="" type="password" />
</div>

<div className="flex items-start gap-4 pt-4">
<div className="flex items-center h-6">
<input className="checkbox-minimal" id="newsletter" name="newsletter" type="checkbox" />
</div>
<label className="font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="newsletter">
                        Subscribe to the Journal to receive exclusive updates, editorial content, and early access to new collections.
                    </label>
</div>

<div className="pt-8">
<button className="w-full bg-primary hover:bg-secondary text-on-primary font-label-caps text-label-caps py-5 px-8 uppercase tracking-widest transition-colors duration-300 flex justify-center items-center gap-2" type="submit">
                        Create Account
                        <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 0"}}>arrow_forward</span>
</button>
</div>
</form>

<div className="mt-12 text-center border-t border-primary-fixed-dim pt-8">
<p className="font-body-md text-body-md text-on-surface-variant">
                    Already a member? 
                    <a className="font-label-caps text-label-caps text-primary uppercase tracking-widest ml-2 border-b border-primary hover:text-secondary hover:border-secondary transition-colors duration-300 pb-1" href="login.html">Sign In</a>
</p>
</div>
</div>
</div>

        </div>
    );
}
