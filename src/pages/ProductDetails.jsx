
import React from 'react';

export default function ProductDetails() {
    return (
        <div className="productdetails-page">
            

<header className="w-full top-0 sticky bg-background dark:bg-background border-b border-primary dark:border-outline-variant z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-4 cursor-pointer active:opacity-70 hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300">
<span className="material-symbols-outlined text-primary dark:text-on-background" data-icon="menu">menu</span>
</div>
<a className="font-headline-md text-headline-md tracking-widest text-primary dark:text-on-background cursor-pointer active:opacity-70" href="/">
                VANGO
            </a>
<div className="flex items-center gap-6">

<nav className="hidden md:flex gap-8">

<a className="font-label-caps text-label-caps text-primary dark:text-on-background font-bold border-b border-primary pb-1" href="#">COLLECTIONS</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300 pb-1" href="#">HERITAGE</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300 pb-1" href="#">BESPOKE</a>
</nav>
<div className="cursor-pointer active:opacity-70 font-label-caps text-label-caps text-primary dark:text-on-background hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-300">
                    CART
                </div>
</div>
</div>
</header>

<main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12 pb-section-padding">

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-padding items-start">

<div className="md:col-span-7 flex flex-col-reverse md:flex-row gap-4 h-[60vh] md:h-[80vh] sticky top-32">

<div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar w-full md:w-24 shrink-0">
<button className="w-20 h-24 md:w-full md:h-32 bg-[#F5F5F5] hairline-border relative group flex-shrink-0" onclick="updateMainImage(this)">
<img className="w-full h-full object-cover p-2 mix-blend-multiply opacity-100 transition-opacity" data-alt="A macro photograph of a luxury titanium watch face on a stark light grey background. Extreme detail showing the hands, indices, and textured dial. Professional studio lighting highlighting the metallic finish. High contrast, minimalist composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzDwv5EMuXyqzzWTLsXzJBwO6W5tQrXSTnLECCcFECWRM5XQLw_Cp44GLbWN543PzfoCHyj70VbwbCTlUsremOurirzO3MrMsqiwMfdcy4JO4IO9wcY18WZAI3pe_jQtNYD4ZuZqRaQtkBklqGzvpF97CQevdTEeMQyzVoqZCXMjGsfjmHwSon41FVaAYyhFcH4BzawvNdtAlW_Z4lRSJqjFBCJjr0mTVVQlicO3NZ9XovUlts2US5" />
</button>
<button className="w-20 h-24 md:w-full md:h-32 bg-[#F5F5F5] border border-transparent hover:hairline-border relative group flex-shrink-0" onclick="updateMainImage(this)">
<img className="w-full h-full object-cover p-2 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity" data-alt="A side-profile macro photograph of a luxury titanium watch on a pristine light grey background. Detail focuses on the crown and case thickness. Professional studio lighting highlighting the brushed metal texture. Minimalist, high-end catalog style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApQSS0QH9f4Z2jZrf4we2Qq9v_X1RByZvG9B_x5GY054A6NE7Tgw9cV3a1EvCwSI2C5uxknZTLzNVwTUdRjD1iw777Kfo_6kjoGTL3Wm76s7d7_nMbz8eVUOo8FglL6vUsdu0EXTXTMZ7Ypn-znxM8y3h22_hXCkBv9dUkGgmcEXOb8IBAUFQIIKK5fvZGzJr5XZ7vmUqHoYsuJ_skc1P2BxidmooUzyDFgvAAsrbrLJMYNvmhKo2" />
</button>
<button className="w-20 h-24 md:w-full md:h-32 bg-[#F5F5F5] border border-transparent hover:hairline-border relative group flex-shrink-0" onclick="updateMainImage(this)">
<img className="w-full h-full object-cover p-2 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity" data-alt="A close-up photograph of a luxury watch clasp and titanium bracelet resting on a minimalist light grey surface. The focus is sharp on the intricate links and engraved logo. High-contrast lighting creating deep shadows. Editorial luxury style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe--sljro2jXgTExqC5YJPSTS9EHn_mo-8S7hdWNxWZxDiFGl5in7D8ONh21rtUoIywGCMZnXOmqKdhy7C74dO0IPO9C4yQXdqsKqy4AUFjHvEBgJoitCvEhGiLHNBfq1Y_3mqa9YlU0Jp0_T8_QP5QQXnivGtxMiPjMSw9BFJXx07A3mVFC5xqFogZMEYCa-MnS9pSwF1pKsiRKX4KbkY5KPCExOpOOY9MJuRO-Ly5tyDsaK-mTbo" />
</button>
<button className="w-20 h-24 md:w-full md:h-32 bg-[#F5F5F5] border border-transparent hover:hairline-border relative group flex-shrink-0" onclick="updateMainImage(this)">
<img className="w-full h-full object-cover p-2 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity" data-alt="A dramatic lifestyle shot of a luxury titanium watch on a wrist, posed against a stark white architectural background. Soft directional lighting highlighting the modern aesthetic. The mood is sophisticated and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5npKTv-ZIrj0fIeiYv7e3somXjsU0CSKyK2UD_3KvlF6TGX15v1Nb53cFHwYZa2yY90TJPu7ZhnjB8694rY4IpiWT43aYO8VnOglXOdGSteE4o9JYCanz9Xj1L3hO0MDiC0-T7ApHUDaBkW-jsSVz1lklgx2C2vmYlhiOTkhIX4ibu_R1MFJV6TFQ_xFhJAQb3sJ2RtvHVb_12evmKKV5mx_V_0FdmOnl78YxfHmhoW6X5GUts0_a" />
</button>
</div>

<div className="flex-1 bg-[#F5F5F5] h-full relative group">
<img className="w-full h-full object-contain p-8 mix-blend-multiply transition-opacity duration-300" data-alt="A massive, high-resolution front-facing photograph of the AXIOM Meridian 40mm luxury titanium watch perfectly centered on a seamless light grey background. Every gear, dial detail, and case bevel is tack sharp. Lighting is clean and even, classic Swiss catalog style." id="main-product-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0CuR1aJJpJVEFxP1wh-pT_UIfGwv5grfGzZWT1r2vhE3FztMxwfkWSCipiPvukPAuDI5IcLrekCbqJEAq_4GeLBardb4Id0Jwl29oH0Pe5TC-D6H_zec6khSsF9dICer3wlfRlMhTdHEosG-Ri7YzSTSxpQDgoAbUt3ws0lNGnNrKLQozn179Lky0BYHWAdsiZLE1rz4zc_p13wCIoKwPQoHm56hnRvhrfdWHxHVK2BbfbxP6aqNg" />
<button aria-label="Zoom Image" className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white hairline-border rounded-none hover:bg-surface-variant transition-colors group-hover:opacity-100 opacity-0 md:opacity-100">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="zoom_in">zoom_in</span>
</button>
</div>
</div>

<div className="md:col-span-5 flex flex-col md:pl-8 pt-8 md:pt-0">

<div className="flex items-center gap-2 mb-6 text-on-surface-variant font-label-caps text-label-caps">
<a className="hover:text-primary transition-colors" href="#">COLLECTIONS</a>
<span>/</span>
<a className="hover:text-primary transition-colors" href="#">MERIDIAN</a>
</div>
<div className="mb-8">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 uppercase break-words">
                        AXIOM Meridian
                    </h1>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-6 tracking-widest">
                        REF. AX-001 — 40MM TITANIUM
                    </p>
<p className="font-price-display text-price-display text-primary">
                        $2,450.00
                    </p>
</div>

<div className="mb-12 flex flex-col gap-4">
<button className="w-full h-14 bg-primary text-on-primary font-label-caps text-label-caps hover:bg-[#C5A059] transition-colors duration-300 flex items-center justify-center tracking-[0.2em]">
                        ADD TO BAG
                    </button>
<div className="flex items-center justify-between font-label-caps text-[10px] tracking-[0.1em] text-on-surface-variant px-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" data-icon="local_shipping">local_shipping</span>
<span>COMPLIMENTARY SHIPPING</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" data-icon="verified">verified</span>
<span>5-YEAR WARRANTY</span>
</div>
</div>
</div>

<div className="mb-12">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="hairline-border-b pb-2">
<span className="block font-label-caps text-[10px] text-on-surface-variant mb-1">MOVEMENT</span>
<span className="block font-body-md text-body-md text-primary">Automatic Cal. V.01</span>
</div>
<div className="hairline-border-b pb-2">
<span className="block font-label-caps text-[10px] text-on-surface-variant mb-1">CASE</span>
<span className="block font-body-md text-body-md text-primary">40mm Titanium</span>
</div>
<div className="hairline-border-b pb-2">
<span className="block font-label-caps text-[10px] text-on-surface-variant mb-1">WATER RESISTANCE</span>
<span className="block font-body-md text-body-md text-primary">10 ATM / 100M</span>
</div>
<div className="hairline-border-b pb-2">
<span className="block font-label-caps text-[10px] text-on-surface-variant mb-1">POWER RESERVE</span>
<span className="block font-body-md text-body-md text-primary">70 Hours</span>
</div>
</div>
</div>

<div className="flex flex-col border-t border-[#1A1A1A]">

<div className="border-b border-[#1A1A1A]">
<button className="w-full py-6 flex justify-between items-center text-left group" onclick="toggleAccordion(this)">
<span className="font-label-caps text-label-caps text-primary group-hover:text-secondary transition-colors">THE STORY</span>
<span className="material-symbols-outlined accordion-icon text-primary group-hover:text-secondary transition-colors" data-icon="expand_more">expand_more</span>
</button>
<div className="accordion-content font-body-md text-body-md text-on-surface-variant">
<p className="mb-4">The AXIOM Meridian redefines architectural precision. Forged from aerospace-grade titanium, it offers unparalleled durability while maintaining an impossibly light profile on the wrist. Designed for those who appreciate the austere beauty of industrial design paired with mechanical mastery.</p>
<p>Every surface is finished by hand, contrasting brutalist brushed textures with mirror-polished bevels. The heart of the Meridian is the Caliber V.01, a testament to relentless engineering.</p>
</div>
</div>

<div className="border-b border-[#1A1A1A]">
<button className="w-full py-6 flex justify-between items-center text-left group" onclick="toggleAccordion(this)">
<span className="font-label-caps text-label-caps text-primary group-hover:text-secondary transition-colors">SPECIFICATIONS</span>
<span className="material-symbols-outlined accordion-icon text-primary group-hover:text-secondary transition-colors" data-icon="expand_more">expand_more</span>
</button>
<div className="accordion-content font-body-md text-body-md text-on-surface-variant">
<ul className="space-y-2">
<li className="flex justify-between border-b border-surface-variant pb-2">
<span>Dial</span>
<span className="text-primary">Matte Black, Applied Indices</span>
</li>
<li className="flex justify-between border-b border-surface-variant pb-2">
<span>Crystal</span>
<span className="text-primary">Domed Sapphire, AR Coating</span>
</li>
<li className="flex justify-between border-b border-surface-variant pb-2">
<span>Thickness</span>
<span className="text-primary">10.5mm</span>
</li>
<li className="flex justify-between border-b border-surface-variant pb-2">
<span>Lug Width</span>
<span className="text-primary">20mm</span>
</li>
<li className="flex justify-between pb-2">
<span>Strap</span>
<span className="text-primary">Integrated Titanium Bracelet</span>
</li>
</ul>
</div>
</div>

<div className="border-b border-[#1A1A1A]">
<button className="w-full py-6 flex justify-between items-center text-left group" onclick="toggleAccordion(this)">
<span className="font-label-caps text-label-caps text-primary group-hover:text-secondary transition-colors">SHIPPING & RETURNS</span>
<span className="material-symbols-outlined accordion-icon text-primary group-hover:text-secondary transition-colors" data-icon="expand_more">expand_more</span>
</button>
<div className="accordion-content font-body-md text-body-md text-on-surface-variant">
<p className="mb-2">Complimentary express shipping worldwide. All pieces are delivered in our signature secure packaging.</p>
<p>Returns are accepted within 14 days of delivery, provided the timepiece remains unworn and in its original condition with all tags and protective films intact.</p>
</div>
</div>
</div>

<div className="mt-8 pt-8 hairline-border-t">
<p className="font-label-caps text-[10px] text-on-surface-variant mb-4">NEED ASSISTANCE?</p>
<a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors group" href="#">
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                        CONTACT A SPECIALIST
                    </a>
</div>
</div>
</div>

<div className="w-full mb-section-padding relative h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="A wide, cinematic lifestyle shot of a sleek titanium watch lying on dark, textured slate rock. The lighting is moody, with sharp geometric shadows cutting across the surface, emphasizing the precision engineering of the timepiece. The color palette is strictly greyscale with a hint of metallic silver. Minimalist and luxurious." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClWMGNOZH_VZDOkQg6YY-e_911Iw5TX4064mJYwhICsw2AebSOG4vj06-tH6algrbd9n15zJpLIxoJPR9vDrRzmt24K_Pirz2I1qQvrGb1P_Vck8nNF9852I-8ifye9HYTRY7vjk-Hp3UIdK7N3JE5MrIrc7yZ-MTZEIZX3CD4iA2wLSBWXyHuZZwBe00Qk5q1JN6RwHMBMKTbqCXcJLYcEQaZjH7aZnEcEbU1F8ZMlQTs4iKvxdsS" />
</div>
<div className="absolute inset-0 bg-black/40 z-10"></div>
<div className="relative z-20 text-center px-4 max-w-3xl">
<h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-white mb-6 uppercase">Uncompromising Architecture</h2>
<p className="font-body-lg text-body-lg text-white/80 max-w-xl mx-auto">Forged from the necessity of resilience, the Meridian stands as a monolithic achievement in horological design.</p>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-12 border-b border-[#1A1A1A] pb-4">
<h3 className="font-headline-md text-headline-md text-primary uppercase">You May Also Like</h3>
<a className="font-label-caps text-label-caps text-primary hover:text-secondary transition-colors hidden md:block" href="#">VIEW ALL</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group block" href="#">
<div className="bg-[#F5F5F5] aspect-[4/5] mb-6 overflow-hidden relative">
<img className="w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A macro shot of a sleek black ceramic luxury watch perfectly centered on a light grey background. Minimalist catalog aesthetic. The dial is dark, with silver indices catching the studio light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWdRm_GlPm3iSAj1Oh5h5mALR5d_OfVesEpDiBTEIGg_8x3UFXHB2K_dQQH4xE5Ay8p3U9IFGtqryr4b1i08WzrHwzGZd53nV6w4R36rS4K3-qtMdeJrWHl10F7ks8XKrnm3P-JmDMrgyHPIQ1OQiIsoz3FUbnHeWv1FdU6-E7kqNjlLVn0ySU5ybu4vfOFem0SigMDNzz4vbQEQIklxLwlAaHY0Aw7OvHLKyocNTeb_qZ5VGBVcqP" />
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-primary text-on-primary font-label-caps text-[10px] px-3 py-1 tracking-widest">DISCOVER</span>
</div>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-1 uppercase">AXIOM OBSIDIAN</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">42mm Ceramic</p>
<p className="font-price-display text-[16px] text-primary">$3,200.00</p>
</div>
</a>

<a className="group block" href="#">
<div className="bg-[#F5F5F5] aspect-[4/5] mb-6 overflow-hidden relative">
<img className="w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A front-facing photograph of a luxury stainless steel watch with a pristine white dial on a light grey background. Minimalist Swiss design catalog style. The steel bracelet gleams under soft, even lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD8oOU4YfrDfTpHgwnhVzZpjidOwb7aOPVuIKoq7kulQdsJ_V40VB6s1K3AdWyKCOhweoODvkH5FGFFvk2cHYGWRlXIxU7dwQKiVvd4_0wBjymD8hKGp729SHCmjVG18JmrYgRkwM14DDjXKs8rx-hQUNXaWynpETa9kMst4qIw98caW35lkDzAVtHzht1nMiplyf1MbwO5yox0oEWFSoUbxWlio4JdBde7KzBH4y33NNCVCRThcWO" />
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-primary text-on-primary font-label-caps text-[10px] px-3 py-1 tracking-widest">DISCOVER</span>
</div>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-1 uppercase">ELEVATION CHRONO</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">40mm Steel</p>
<p className="font-price-display text-[16px] text-primary">$4,150.00</p>
</div>
</a>

<a className="group block" href="#">
<div className="bg-[#F5F5F5] aspect-[4/5] mb-6 overflow-hidden relative">
<img className="w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="An angled studio shot of a rose gold luxury watch with a dark grey dial, presented against a stark light grey background. The warmth of the metal contrasts sharply with the cold background. Minimalist editorial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_cDlmrRpbOsA1raH0YOlfH4EFIcMxVrLFP12mfsPZY6d7-S9YNiI9pgxcKOMgo4FveCuq-1DqHXLkao0MM0M8SIs7hPnyTrzPkYE7NFoNyRPVmtuEWYgEFuiYeI4oDowE0H_C8-z84XiS3QtihYNQdlUs_f_VsuBf8oIq9jP-M4cX3gXM8l2Ni85RRU9g0qyQtcOUThmpzkEx7E4cQkUydKvF5RZGayog--X2jiyUk0OqJVp9DGky" />
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-primary text-on-primary font-label-caps text-[10px] px-3 py-1 tracking-widest">DISCOVER</span>
</div>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-1 uppercase">MERIDIAN APEX</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">38mm Rose Gold</p>
<p className="font-price-display text-[16px] text-primary">$12,500.00</p>
</div>
</a>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block border border-primary px-8 py-4 font-label-caps text-label-caps text-primary uppercase w-full" href="#">VIEW ALL COLLECTIONS</a>
</div>
</div>
</main>

<footer className="bg-surface-container-highest dark:bg-tertiary-container text-primary dark:text-on-tertiary-container w-full mt-section-padding border-t border-primary dark:border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
<div className="md:col-span-1 flex flex-col justify-between">
<div className="font-headline-md text-headline-md uppercase tracking-tighter mb-8 md:mb-0 text-primary dark:text-on-background">
                    VANGO
                </div>
</div>
<div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-primary dark:text-on-background font-bold hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">
                        Shop
                    </a>
</div>

<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">
                        Support
                    </a>
</div>

<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">
                        Company
                    </a>
</div>

<div className="flex flex-col gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-outline hover:text-secondary dark:hover:text-secondary-fixed transition-colors" href="#">
                        Privacy
                    </a>
</div>
</div>
<div className="col-span-1 md:col-span-4 mt-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<p className="font-body-md text-[12px] text-on-surface-variant">
                    © 2024 VANGO GENÈVE. ALL RIGHTS RESERVED.
                </p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary transition-colors cursor-pointer" data-icon="language">language</span>
<span className="font-label-caps text-[10px] text-on-surface-variant pt-1">EN / USD</span>
</div>
</div>
</div>
</footer>


        </div>
    );
}
