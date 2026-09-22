
import React from 'react';

export default function ForgotPass() {
    return (
        <div className="forgotpass-page">
            


<main className="flex-grow flex items-center justify-center pt-24 pb-section-padding px-margin-mobile md:px-margin-desktop">
<div className="w-full max-w-md mx-auto">
<div className="mb-12 text-center md:text-left">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-6">RECOVER ACCESS</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Enter the email address associated with your account. We will send you a link to reset your password.</p>
</div>
<form action="#" className="space-y-10" method="POST">
<div className="relative">
<input className="w-full bg-transparent border border-primary py-4 px-4 text-primary font-label-caps text-label-caps outline-none focus:border-primary placeholder-primary tracking-widest uppercase" id="email" name="email" placeholder="EMAIL ADDRESS" required="" type="email" />
</div>
<button className="w-full bg-primary text-on-primary py-5 px-6 flex items-center justify-between hover:bg-secondary hover:text-on-secondary transition-colors duration-300 group cursor-pointer border border-primary hover:border-secondary" type="submit">
<span className="font-label-caps text-label-caps uppercase tracking-widest">SEND RECOVERY LINK</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300" data-icon="arrow_forward">arrow_forward</span>
</button>
<div className="text-center pt-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest underline underline-offset-4 decoration-1" href="login.html">BACK TO LOGIN</a>
</div>
</form>
</div>
</main>

<footer className="bg-black text-white w-full mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center py-10 px-margin-mobile md:px-margin-desktop gap-gutter w-full max-w-container-max mx-auto text-center md:text-left">
<span className="font-label-caps text-label-caps tracking-widest uppercase">© 2024 VANGO HOROLOGY. ALL RIGHTS RESERVED.</span>
<nav className="flex gap-6 mt-6 md:mt-0 justify-center">
<a className="font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">PRIVACY</a>
<a className="font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">TERMS</a>
<a className="font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">CONTACT</a>
</nav>
</div>
</footer>

        </div>
    );
}
