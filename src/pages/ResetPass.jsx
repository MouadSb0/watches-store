
import React from 'react';

export default function ResetPass() {
    return (
        <div className="resetpass-page">
            

<header className="bg-surface dark:bg-on-background fixed top-0 w-full z-50 border-b border-outline dark:border-on-surface-variant">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 w-full max-w-container-max mx-auto">

<button aria-label="Go back" className="cursor-pointer active:scale-95 text-primary dark:text-on-primary hover:opacity-70 transition-opacity duration-200">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>

<div className="text-center flex-grow">
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-surface-bright tracking-[0.2em] uppercase">
                    VANGO
                </h1>
</div>

<div className="w-6"></div>
</div>
</header>

<main className="flex-grow flex items-center justify-center pt-24 pb-section-padding px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
<div className="w-full max-w-[480px] flex flex-col gap-12">

<div className="flex flex-col gap-4 text-center md:text-left">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">NEW PASSWORD</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Create a secure new password for your VANGO account.</p>
</div>

<form action="#" className="flex flex-col gap-8 w-full" method="POST">

<div className="relative w-full group">
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="new-password">NEW PASSWORD</label>
<input className="w-full bg-transparent border-0 border-b border-primary text-primary font-body-lg text-body-lg p-0 py-2 placeholder-on-surface-variant/50 focus:border-b-2 transition-colors duration-200" id="new-password" name="new-password" placeholder="Enter new password" required="" type="password" />
<button className="absolute right-0 bottom-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onclick="togglePassword('new-password')" type="button">
<span className="material-symbols-outlined text-[20px]" id="icon-new-password">visibility</span>
</button>
</div>

<div className="relative w-full group">
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="confirm-password">CONFIRM PASSWORD</label>
<input className="w-full bg-transparent border-0 border-b border-primary text-primary font-body-lg text-body-lg p-0 py-2 placeholder-on-surface-variant/50 focus:border-b-2 transition-colors duration-200" id="confirm-password" name="confirm-password" placeholder="Confirm new password" required="" type="password" />
<button className="absolute right-0 bottom-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onclick="togglePassword('confirm-password')" type="button">
<span className="material-symbols-outlined text-[20px]" id="icon-confirm-password">visibility</span>
</button>
</div>

<div className="flex flex-col gap-2 mt-2">
<p className="font-label-caps text-label-caps text-on-surface-variant">PASSWORD MUST CONTAIN:</p>
<ul className="flex flex-col gap-1">
<li className="flex items-center gap-2 font-body-md text-[14px] text-on-surface-variant" id="req-length">
<span className="material-symbols-outlined text-[16px]">check_circle</span> 8+ characters
                        </li>
<li className="flex items-center gap-2 font-body-md text-[14px] text-on-surface-variant" id="req-uppercase">
<span className="material-symbols-outlined text-[16px]">check_circle</span> One uppercase letter
                        </li>
<li className="flex items-center gap-2 font-body-md text-[14px] text-on-surface-variant" id="req-number">
<span className="material-symbols-outlined text-[16px]">check_circle</span> One number
                        </li>
</ul>
</div>

<button className="w-full flex items-center justify-between bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 hover:bg-[#C5A059] transition-colors duration-300 mt-4 cursor-pointer" type="submit">
<span>UPDATE PASSWORD</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</form>
</div>
</main>

<footer className="bg-surface dark:bg-on-background w-full border-t border-outline dark:border-on-surface-variant mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center py-10 px-margin-mobile md:px-margin-desktop gap-gutter w-full max-w-container-max mx-auto">
<div className="font-headline-md text-[18px] font-bold text-primary dark:text-surface-bright uppercase tracking-[0.2em]">
                VANGO
            </div>
<nav className="flex gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300 cursor-pointer" href="#">PRIVACY</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300 cursor-pointer" href="#">TERMS</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300 cursor-pointer" href="#">CONTACT</a>
</nav>
<div className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline-variant text-center">
                © 2024 VANGO HOROLOGY. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>



        </div>
    );
}
