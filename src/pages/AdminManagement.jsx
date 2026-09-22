
import React from 'react';

export default function AdminManagement() {
    return (
        <div className="adminmanagement-page">
            

<nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed border-r border-gray-800 bg-black py-8 space-y-4 z-40">

<div className="px-gutter mb-12">
<img src="imgs/logo_axios.png" alt="Axios Logo" className="h-30" />
</div>

<div className="flex-1 space-y-2">

<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Analytics</span>
</a>
<a className="flex items-center space-x-4 px-gutter py-3 bg-white text-black font-bold hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="watch">watch</span>
<span>Products</span>
</a>
<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
<span>Orders</span>
</a>

<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Customers</span>
</a>
<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 font-bold transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</div>
</nav>

<div className="flex-1 flex flex-col md:ml-64 min-h-screen">

<header className="w-full top-0 absolute flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-black border-b border-gray-800">

<div aria-label="Menu" className="md:hidden flex items-center cursor-pointer active:opacity-80 text-white hover:bg-white/10 transition-colors p-2">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</div>

<div className="flex-1 md:flex-none flex md:block justify-center">
</div>

<div aria-label="Account" className="flex items-center cursor-pointer active:opacity-80 text-white hover:bg-white/10 transition-colors p-2">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</div>
</header>

<main className="flex-1 px-margin-mobile md:px-margin-desktop py-12 max-w-[container-max] mx-auto w-full pt-32">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">Inventory</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">Manage the collection catalog. View stock levels, update pricing, and manage product details with absolute precision.</p>
</div>
<button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-secondary transition-colors flex items-center gap-2 border border-primary" id="open-modal-btn">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                    NEW TIMEPIECE
                </button>
</div>

<div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-primary pb-4">
<div className="w-full md:w-96 relative">
<span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="w-full bg-transparent border-none border-b border-primary focus:ring-0 focus:border-primary pl-8 py-2 font-body-md text-body-md placeholder:text-outline text-primary uppercase" placeholder="Search by model, SKU, or movement..." type="text" />
</div>
<div className="flex gap-4 w-full md:w-auto">
<button className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors border border-outline px-4 py-2 uppercase">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
<button className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors border border-outline px-4 py-2 uppercase">
<span className="material-symbols-outlined text-sm" data-icon="sort">sort</span>
                        Sort
                    </button>
</div>
</div>

<div className="w-full overflow-x-auto pb-8">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-primary">
<th className="py-4 px-4 font-label-caps text-label-caps text-outline uppercase tracking-widest">Timepiece</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-outline uppercase tracking-widest">SKU</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-outline uppercase tracking-widest">Movement</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-outline uppercase tracking-widest text-right">Price</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-outline uppercase tracking-widest">Stock</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-outline uppercase tracking-widest text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">

<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-4 flex items-center gap-4">
<div className="w-16 h-16 bg-[#F5F5F5] border border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover mix-blend-multiply" data-alt="A pristine top-down view of a classic stainless steel luxury chronograph watch with a black dial on a minimalist light grey background. The lighting highlights the polished metal and technical subdials, evoking mechanical precision and high-end horology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCykDievwtxAV0A8HchsJlM3MT6HIxIfTXuXl6MKsJqGA-83qPdUAJT7E-ht2eZg91e_MgWmC4PlVyW7_Luh0GgWB7ogv5jxqPZS8qM4An_LoolvVsXTqL3_9rOR_uW6kn0IFltIqNu4EIOw5fK5h7iLm4Uji0HXF7YIwbo2X_LKtpx2GXMqc87LjmMC5VdFjzaTIRuJiT0ez_6YnQz_9PLwuODs3NmI1VpAzm-TD4NjryTJVTpjUJn" />
</div>
<div>
<span className="block font-headline-md text-headline-md text-primary text-base">Chronograph Master</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Heritage Collection</span>
</div>
</td>
<td className="py-4 px-4 text-on-surface-variant font-mono text-sm">HCG-001-SS</td>
<td className="py-4 px-4 text-primary">Automatic Calibre 400</td>
<td className="py-4 px-4 font-price-display text-price-display text-primary text-right">$8,500</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-primary">
<span className="w-2 h-2 bg-primary block"></span> 12 Units
                                </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
<button className="p-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>

<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-4 flex items-center gap-4">
<div className="w-16 h-16 bg-[#F5F5F5] border border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover mix-blend-multiply" data-alt="A close-up profile shot of an elegant 18k rose gold dress watch with a white enamel dial and brown alligator leather strap, presented against a stark white backdrop. The focus is sharp, emphasizing the flawless finishing of the precious metal and the texture of the leather." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyhhG94aLBD2k-e6RgaBarZ7M8YJOj7PqB-sakHhnRwebmpjRlfDTue-eLbsnx6z64Rj5hfZQmvdLkWZwyHGZmYyD4TK3frRRNfWqzuuW9sAxJ20kadO74lX-E3EtrqS9xxqLMJD3zWBcWWy1P-U7Gz1bERlnaQSYyYgknobEDwmnolL3qtIuNGAMUR0fLWOhQjJK8EKT4OodTcucAI-Lb3_XpPeCXMksyNbDzRplNbrECHnBB0bCi" />
</div>
<div>
<span className="block font-headline-md text-headline-md text-primary text-base">Elegance Tourbillon</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Grand Complication</span>
</div>
</td>
<td className="py-4 px-4 text-on-surface-variant font-mono text-sm">EGT-882-RG</td>
<td className="py-4 px-4 text-primary">Manual Wind Tourbillon</td>
<td className="py-4 px-4 font-price-display text-price-display text-primary text-right">$45,000</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-error">
<span className="w-2 h-2 bg-error block"></span> 2 Units (Low)
                                </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
<button className="p-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>

<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-4 flex items-center gap-4">
<div className="w-16 h-16 bg-[#F5F5F5] border border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover mix-blend-multiply" data-alt="A rugged, utilitarian professional dive watch in brushed titanium with a matte blue dial and chunky bezel, sitting flat on a pale grey studio background. The aesthetic is highly technical, durable, and ready for extreme depth, with crisp lighting defining its robust geometry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATHkAL-Cig32hZNhl8Z4RmlSA9rzsJgeMnTkiw20RrEehvL71S6CMSBxRYt2Z4AduOR71gdm5uUjlPVbAzdTSW4oQMflHaeliy39ZTrtiQYNetzrbB6k17543tLYZbFkxpg_KnUVWNhx8Ez9lnZIv2owqpaBGNXp2uU18FYrWxYjjd-v9MYwie9lcfOksxvaZhcRfjLt0ck2LL27ZOCuZmkuuhwT2vfSUs2qAbWdlBm6ddgCk_Ff2X" />
</div>
<div>
<span className="block font-headline-md text-headline-md text-primary text-base">Deep Sea Pro</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Aquatic Line</span>
</div>
</td>
<td className="py-4 px-4 text-on-surface-variant font-mono text-sm">DSP-300-TI</td>
<td className="py-4 px-4 text-primary">Automatic Calibre 200</td>
<td className="py-4 px-4 font-price-display text-price-display text-primary text-right">$6,200</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-primary">
<span className="w-2 h-2 bg-primary block"></span> 24 Units
                                </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
<button className="p-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex justify-between items-center mt-8 border-t border-primary pt-6">
<span className="font-label-caps text-label-caps text-on-surface-variant">SHOWING 1-3 OF 142 TIMEPIECES</span>
<div className="flex gap-2">
<button className="p-2 border border-outline text-outline hover:text-primary hover:border-primary transition-colors cursor-not-allowed opacity-50">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center border border-primary bg-primary text-on-primary font-label-caps text-label-caps">1</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline text-on-surface-variant hover:border-primary hover:text-primary font-label-caps text-label-caps transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline text-on-surface-variant hover:border-primary hover:text-primary font-label-caps text-label-caps transition-colors">3</button>
<button className="p-2 border border-outline text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</main>

<footer className="w-full bottom-0 bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline flat no shadows z-10 mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-6 gap-4">
<span className="font-label-caps text-label-caps text-primary">© 2024 HOROLOGIST PRECISION SYSTEMS</span>
<div className="flex gap-6">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary underline transition-all" href="#">System Status</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary underline transition-all" href="#">API Documentation</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary underline transition-all" href="#">Support</a>
</div>
</div>
</footer>
</div>
<div className="fixed inset-0 z-50 hidden overflow-y-auto" id="new-timepiece-modal">
<div className="fixed inset-0 bg-primary/40 backdrop-blur-sm" id="modal-backdrop"></div>
<div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
<div className="relative bg-surface w-full max-w-4xl border border-primary shadow-2xl flex flex-col">
<button aria-label="Close modal" className="absolute top-6 right-6 text-primary hover:text-secondary transition-colors z-10" id="close-modal-icon-btn">
<span className="material-symbols-outlined text-2xl" data-icon="close">close</span>
</button>
<div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
<div className="mb-12 pr-8">
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-2">New Timepiece Entry</h1>
<p className="text-on-surface-variant font-body-md">Ensure absolute precision when cataloging new mechanical inventory.</p>
</div>
<form className="space-y-16">

<section className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-8">
<div className="md:col-span-4">
<h3 className="font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-2 mb-4">Core Identity</h3>
<p className="text-sm text-on-surface-variant">Basic nomenclature and financial classification.</p>
</div>
<div className="md:col-span-8 space-y-8">
<div className="relative">
<label className="font-label-caps text-label-caps text-primary uppercase block mb-1" htmlFor="watch_name">Timepiece Name / Model</label>
<input className="w-full bg-transparent border-none border-b border-primary focus:ring-0 focus:border-secondary focus:border-b-2 py-2 font-body-lg text-primary" id="watch_name" name="watch_name" placeholder="e.g. Royal Oak Offshore" required="" type="text" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<label className="font-label-caps text-label-caps text-primary uppercase block mb-1" htmlFor="reference_number">Reference Number</label>
<input className="w-full bg-transparent border-none border-b border-primary focus:ring-0 focus:border-secondary focus:border-b-2 py-2 font-body-md font-mono text-primary" id="reference_number" name="reference_number" placeholder="e.g. Ref. 15400ST.OO.1220ST.01" required="" type="text" />
</div>
<div className="relative">
<label className="font-label-caps text-label-caps text-primary uppercase block mb-1" htmlFor="price_chf">Price (CHF)</label>
<input className="w-full bg-transparent border-none border-b border-primary focus:ring-0 focus:border-secondary focus:border-b-2 py-2 font-price-display text-primary" id="price_chf" name="price_chf" placeholder="e.g. 24500" required="" type="number" />
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-8">
<div className="md:col-span-4">
<h3 className="font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-2 mb-4">Visual Asset</h3>
<p className="text-sm text-on-surface-variant">High-resolution frontal shot. Plain background required.</p>
</div>
<div className="md:col-span-8">
<div className="border border-dashed border-primary hover:border-secondary hover:bg-surface-container-high w-full h-64 bg-surface-container-low flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group transition-all">
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" id="image_upload" type="file" />
<div className="text-center group-hover:scale-105 transition-transform duration-300">
<span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 block" data-icon="photo_camera">photo_camera</span>
<span className="font-label-caps text-label-caps text-primary uppercase">Click or Drag Image Here</span>
<p className="text-xs text-on-surface-variant mt-2 font-mono">PNG, JPG up to 10MB</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-8">
<div className="md:col-span-4">
<h3 className="font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-2 mb-4">Technical Specs</h3>
<p className="text-sm text-on-surface-variant">Detailed architectural and mechanical parameters.</p>
</div>
<div className="md:col-span-8">

<div className="border-t border-primary">

<div className="grid grid-cols-1 sm:grid-cols-2 border-b border-primary">
<div className="p-4 pl-0 sm:border-r border-primary border-b sm:border-b-0">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-2" htmlFor="movement">Movement Calibre</label>
<input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary" id="movement" name="movement" placeholder="e.g. Automatic Calibre 4302" type="text" />
</div>
<div className="p-4 sm:pr-0">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-2" htmlFor="power_reserve">Power Reserve</label>
<input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary" id="power_reserve" name="power_reserve" placeholder="e.g. 70 Hours" type="text" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 border-b border-primary">
<div className="p-4 pl-0 sm:border-r border-primary border-b sm:border-b-0">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-2" htmlFor="case_diameter">Case Diameter</label>
<input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary" id="case_diameter" name="case_diameter" placeholder="e.g. 41 mm" type="text" />
</div>
<div className="p-4 sm:pr-0">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-2" htmlFor="case_material">Case Material</label>
<input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary" id="case_material" name="case_material" placeholder="e.g. Stainless Steel" type="text" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 border-b border-primary">
<div className="p-4 pl-0 sm:border-r border-primary border-b sm:border-b-0">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-2" htmlFor="water_resistance">Water Resistance</label>
<input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary" id="water_resistance" name="water_resistance" placeholder="e.g. 50 m" type="text" />
</div>
<div className="p-4 sm:pr-0">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-2" htmlFor="crystal_type">Crystal Type</label>
<input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary" id="crystal_type" name="crystal_type" placeholder="e.g. Glareproofed Sapphire" type="text" />
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-8 pb-12">
<div className="md:col-span-4">
<h3 className="font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-2 mb-4">Editorial Copy</h3>
<p className="text-sm text-on-surface-variant">Marketing narrative and historical context.</p>
</div>
<div className="md:col-span-8">
<div className="relative h-full">
<label className="font-label-caps text-label-caps text-primary uppercase block mb-2 sr-only" htmlFor="description">Detailed Description</label>
<textarea className="w-full bg-surface-container-lowest border border-primary p-4 font-body-md text-primary focus:outline-none focus:border-secondary transition-colors resize-y min-h-[150px]" id="description" name="description" placeholder="Enter detailed description here..." rows="6"></textarea>
</div>
</div>
</section>
</form>
</div>
<div className="border-t border-primary p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-surface">
<button className="font-label-caps text-label-caps uppercase text-error hover:underline flex items-center gap-2" id="close-modal-btn" type="button">
<span className="material-symbols-outlined text-sm" data-icon="delete">delete</span> Discard
        </button>
<div className="flex gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none px-8 py-3 border border-primary font-label-caps text-label-caps uppercase text-primary hover:bg-surface-container-high transition-colors" type="button">Save as Draft</button>
<button className="flex-1 md:flex-none px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:bg-secondary hover:text-on-secondary transition-colors" type="submit">Publish to Store</button>
</div>
</div>
</div>
</div>
</div>
        </div>
    );
}
