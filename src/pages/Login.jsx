
import React from 'react';

export default function Login() {
    return (
        <div className="login-page">
            

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[0]">
    <img src="imgs/img_3d1.jpeg" className="absolute top-[5%] right-[10%] w-32 md:w-48 floating-watch-1 opacity-[0.25]" alt="3D Watch Background" />
    <img src="imgs/img_3d2.png" className="absolute bottom-[5%] right-[2%] w-40 md:w-56 floating-watch-2 opacity-[0.25]" alt="3D Watch Background" />
    <img src="imgs/img_3d.png" className="absolute top-[45%] right-[18%] w-24 md:w-36 floating-watch-3 opacity-[0.15]" alt="3D Watch Background" />
</div>
<main className="w-full max-w-[480px] px-margin-mobile md:px-0 relative z-10">

<div className="text-center mb-16">
<img src="imgs/logo_bg.jpg" alt="Axios Logo with bg" className="h-36 mx-auto mb-10" />
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Welcome Back</h2>
</div>

<form action="#" className="flex flex-col gap-8 w-full" method="POST">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Email Address</label>
<input className="w-full font-body-lg text-body-lg text-on-surface py-2" id="email" name="email" placeholder="name@example.com" required="" type="email" />
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center w-full">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="password">Password</label>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase underline underline-offset-4" href="forgot_pass.html">Forgot Password?</a>
</div>
<input className="w-full font-body-lg text-body-lg text-on-surface py-2" id="password" name="password" placeholder="••••••••" required="" type="password" />
</div>
<button className="w-full bg-primary text-on-primary font-label-caps text-label-caps uppercase py-5 mt-6 hover:bg-[#C5A059] transition-colors duration-300" type="submit">
                Log In
            </button>
</form>

<div className="mt-12 flex justify-center w-full">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase flex gap-4 items-center">
                New to Vango? 
                <a className="text-primary hover:text-[#C5A059] underline underline-offset-4 transition-colors font-bold" href="register.html">Create Account</a>
</p>
</div>
</main>

        </div>
    );
}
