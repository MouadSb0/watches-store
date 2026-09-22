
import React from 'react';

export default function AdminCustomers() {
    return (
        <div className="admincustomers-page">
            

<nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed border-r border-gray-800 bg-black py-8 space-y-4 z-40">

<div className="px-gutter mb-12">
<img src="imgs/logo_axios.png" alt="Axios Logo" className="h-30" />
</div>

<div className="flex-1 space-y-2">

<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Analytics</span>
</a>
<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="watch">watch</span>
<span>Products</span>
</a>
<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
<span>Orders</span>
</a>

<a className="flex items-center space-x-4 px-gutter py-3 bg-white text-black font-bold transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Customers</span>
</a>
<a className="flex items-center space-x-4 px-gutter py-3 text-gray-300 font-bold transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</div>
</nav>

<main className="flex-1 flex flex-col min-w-0 md:ml-64 bg-background">

<header className="w-full top-0 sticky flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 z-50 bg-black border-b border-gray-800">

<div aria-label="Menu" className="md:hidden flex items-center cursor-pointer active:opacity-80 text-white hover:bg-white/10 transition-colors p-2">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</div>

<div className="flex-1 md:flex-none flex md:block justify-center">
</div>

<div aria-label="Account" className="flex items-center cursor-pointer active:opacity-80 text-white hover:bg-white/10 transition-colors p-2">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</div>
</header>

<div className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding space-y-16">

<section className="space-y-6">
<h2 className="font-display-xl text-display-xl md:text-[64px] text-headline-lg-mobile text-primary uppercase">COLLECTOR REGISTRY</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Manage the global network of VANGO collectors and their acquisition history.
                </p>
</section>

<section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-outline pb-6">

<div className="w-full md:w-96">
<label className="sr-only" htmlFor="collectorSearch">Search by Name or Email</label>
<div className="relative w-full border-b border-primary flex items-center pb-2 focus-within:border-primary-fixed transition-colors">
<span className="material-symbols-outlined text-outline mr-3">search</span>
<input className="w-full bg-transparent border-none p-0 font-body-md text-on-surface placeholder-outline focus:ring-0" id="collectorSearch" placeholder="Search by Name or Email" type="text" />
</div>
</div>

<div className="flex flex-wrap gap-4 items-center">
<span className="font-label-caps text-label-caps text-outline uppercase mr-2 tracking-widest">TIER:</span>
<button className="px-6 py-2 border border-primary text-primary font-label-caps text-label-caps uppercase hover:bg-surface-container-high transition-colors">
                        All
                    </button>
<button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:bg-[#333] transition-colors relative flex items-center gap-2">
<div className="w-2 h-2 bg-secondary-container rounded-full"></div>
                        Platinum
                    </button>
<button className="px-6 py-2 border border-primary text-primary font-label-caps text-label-caps uppercase hover:bg-surface-container-high transition-colors flex items-center gap-2">
<div className="w-2 h-2 bg-secondary-fixed rounded-full"></div>
                        Gold
                    </button>
<button className="px-6 py-2 border border-primary text-primary font-label-caps text-label-caps uppercase hover:bg-surface-container-high transition-colors flex items-center gap-2">
<div className="w-2 h-2 bg-outline-variant rounded-full"></div>
                        Silver
                    </button>
</div>
</section>

<section className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b-2 border-primary">
<th className="py-6 px-4 font-label-caps text-label-caps tracking-widest text-outline uppercase w-1/4">Collector Name</th>
<th className="py-6 px-4 font-label-caps text-label-caps tracking-widest text-outline uppercase w-1/4">Status</th>
<th className="py-6 px-4 font-label-caps text-label-caps tracking-widest text-outline uppercase w-1/4">Last Acquisition</th>
<th className="py-6 px-4 font-label-caps text-label-caps tracking-widest text-outline uppercase text-right w-1/4">Total Orders</th>
</tr>
</thead>
<tbody className="font-body-md">

<tr className="border-b border-outline-variant table-row-hover transition-colors cursor-pointer group">
<td className="py-8 px-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-headline-md text-headline-md text-primary">
                                        AS
                                    </div>
<div className="flex flex-col">
<span className="font-headline-md text-primary group-hover:underline decoration-1 underline-offset-4">Alexander Sterling</span>
<span className="text-sm text-on-surface-variant font-body-md mt-1">a.sterling@example.com</span>
</div>
</div>
</td>
<td className="py-8 px-4">
<div className="inline-flex items-center gap-2 border border-primary px-3 py-1">
<div className="w-2 h-2 bg-secondary-container"></div>
<span className="font-label-caps text-label-caps text-primary">PLATINUM</span>
</div>
</td>
<td className="py-8 px-4 text-on-surface font-semibold">
                                Axiom Meridian
                                <div className="text-sm font-normal text-on-surface-variant mt-1">Ref. 4920-A</div>
</td>
<td className="py-8 px-4 text-right font-headline-md text-headline-md text-primary">
                                14
                            </td>
</tr>

<tr className="border-b border-outline-variant table-row-hover transition-colors cursor-pointer group">
<td className="py-8 px-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-headline-md text-headline-md text-primary">
                                        EV
                                    </div>
<div className="flex flex-col">
<span className="font-headline-md text-primary group-hover:underline decoration-1 underline-offset-4">Elena Vance</span>
<span className="text-sm text-on-surface-variant font-body-md mt-1">elena.v@example.com</span>
</div>
</div>
</td>
<td className="py-8 px-4">
<div className="inline-flex items-center gap-2 border border-primary px-3 py-1">
<div className="w-2 h-2 bg-secondary-fixed"></div>
<span className="font-label-caps text-label-caps text-primary">GOLD</span>
</div>
</td>
<td className="py-8 px-4 text-on-surface font-semibold">
                                Chronos Tourbillon
                                <div className="text-sm font-normal text-on-surface-variant mt-1">Ref. 9912-T</div>
</td>
<td className="py-8 px-4 text-right font-headline-md text-headline-md text-primary">
                                5
                            </td>
</tr>

<tr className="border-b border-outline-variant table-row-hover transition-colors cursor-pointer group">
<td className="py-8 px-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-headline-md text-headline-md text-primary">
                                        MR
                                    </div>
<div className="flex flex-col">
<span className="font-headline-md text-primary group-hover:underline decoration-1 underline-offset-4">Marcus Reed</span>
<span className="text-sm text-on-surface-variant font-body-md mt-1">mreed88@example.com</span>
</div>
</div>
</td>
<td className="py-8 px-4">
<div className="inline-flex items-center gap-2 border border-primary px-3 py-1">
<div className="w-2 h-2 bg-secondary-container"></div>
<span className="font-label-caps text-label-caps text-primary">PLATINUM</span>
</div>
</td>
<td className="py-8 px-4 text-on-surface font-semibold">
                                Zenith Perpetual
                                <div className="text-sm font-normal text-on-surface-variant mt-1">Ref. 1024-P</div>
</td>
<td className="py-8 px-4 text-right font-headline-md text-headline-md text-primary">
                                22
                            </td>
</tr>

<tr className="border-b border-outline-variant table-row-hover transition-colors cursor-pointer group">
<td className="py-8 px-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-headline-md text-headline-md text-primary">
                                        SL
                                    </div>
<div className="flex flex-col">
<span className="font-headline-md text-primary group-hover:underline decoration-1 underline-offset-4">Sophia Lin</span>
<span className="text-sm text-on-surface-variant font-body-md mt-1">slin.design@example.com</span>
</div>
</div>
</td>
<td className="py-8 px-4">
<div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-1">
<div className="w-2 h-2 bg-outline-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">SILVER</span>
</div>
</td>
<td className="py-8 px-4 text-on-surface font-semibold">
                                Vanguard Minimalist
                                <div className="text-sm font-normal text-on-surface-variant mt-1">Ref. 3301-M</div>
</td>
<td className="py-8 px-4 text-right font-headline-md text-headline-md text-primary">
                                1
                            </td>
</tr>
</tbody>
</table>
</section>

<section className="flex justify-center pt-8">
<button className="border-b border-primary pb-1 font-label-caps text-label-caps tracking-[0.2em] uppercase text-primary hover:text-on-surface-variant hover:border-on-surface-variant transition-colors flex items-center gap-2">
                    LOAD MORE RECORDS
                    <span className="material-symbols-outlined text-[16px]" data-icon="arrow_downward">arrow_downward</span>
</button>
</section>
</div>

<footer className="w-full bottom-0 flex justify-between items-center px-margin-desktop py-8 mt-auto border-t border-primary bg-surface">
<div className="font-label-caps text-label-caps text-on-surface-variant">
                © 2024 VANGO HOROLOGICAL PRECISION
            </div>
<div className="flex space-x-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Privacy Policy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Terms of Service</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Support</a>
</div>
</footer>
</main>

        </div>
    );
}
