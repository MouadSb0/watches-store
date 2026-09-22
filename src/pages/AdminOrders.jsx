
import React from 'react';

export default function AdminOrders() {
    return (
        <div className="adminorders-page">
            
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
<div className="flex flex-1 w-full max-w-container-max mx-auto">

<aside className="hidden md:flex h-screen w-64 fixed left-0 top-[89px] bg-background border-r border-primary flex-col z-40">
<div className="p-gutter border-b border-surface-container-highest">
<h2 className="font-headline-md text-headline-md text-primary tracking-widest uppercase">CHRONOS OPS</h2>
</div>
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
<a className="flex items-center space-x-4 px-gutter py-3 bg-white text-black font-bold hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
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
</aside>

<main className="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop bg-background min-h-[calc(100vh-89px)]">

<div className="mb-section-padding/2 md:mb-section-padding/2 max-w-5xl">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-4">ORDERS</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Tracking collector acquisitions and ensuring pristine delivery of horological masterpieces.</p>
</div>

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-gutter mb-12 border-b border-primary pb-6">

<div className="w-full lg:w-1/3 relative">
<label className="font-label-caps text-label-caps text-primary block mb-2 tracking-widest uppercase" htmlFor="search-orders">Search Registry</label>
<div className="relative flex items-center border-b border-primary">
<span className="material-symbols-outlined absolute left-0 text-primary text-lg">search</span>
<input className="w-full bg-transparent border-none pl-8 py-3 text-body-md focus:ring-0 focus:outline-none text-primary placeholder:text-outline-variant transition-colors" id="search-orders" placeholder="Order ID or Client Name..." type="text" />
</div>
</div>

<div className="w-full lg:w-auto flex gap-4 mt-6 lg:mt-0">
<button className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-tint transition-colors duration-200">
                        All Orders
                    </button>
<button className="px-6 py-3 bg-transparent text-primary border border-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-container-highest transition-colors duration-200">
                        Processing
                    </button>
<button className="px-6 py-3 bg-transparent text-primary border border-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-container-highest transition-colors duration-200">
                        Completed
                    </button>
</div>
</div>

<div className="w-full overflow-x-auto pb-12">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-primary">
<th className="py-4 pr-4 font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">Order Ref</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">Client</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">Timepiece</th>
<th className="py-4 px-4 font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">Status</th>
<th className="py-4 pl-4 font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold text-right">Value (CHF)</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-primary">

<tr className="border-b border-surface-container-highest table-row-hover transition-colors duration-200 cursor-pointer">
<td className="py-6 pr-4 font-mono font-medium">#ORD-1024</td>
<td className="py-6 px-4">Alexander Sterling</td>
<td className="py-6 px-4">Chronograph Master 1968</td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary block"></span>
<span className="font-label-caps text-label-caps tracking-wider uppercase">Processing</span>
</div>
</td>
<td className="py-6 pl-4 font-price-display text-price-display text-right">84,500.-</td>
</tr>

<tr className="border-b border-surface-container-highest table-row-hover transition-colors duration-200 cursor-pointer">
<td className="py-6 pr-4 font-mono font-medium">#ORD-1023</td>
<td className="py-6 px-4">Eleanor Vance</td>
<td className="py-6 px-4">Tourbillon Éternel</td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full border border-primary block"></span>
<span className="font-label-caps text-label-caps tracking-wider uppercase text-outline">Shipped</span>
</div>
</td>
<td className="py-6 pl-4 font-price-display text-price-display text-right">142,000.-</td>
</tr>

<tr className="border-b border-surface-container-highest table-row-hover transition-colors duration-200 cursor-pointer">
<td className="py-6 pr-4 font-mono font-medium">#ORD-1022</td>
<td className="py-6 px-4">Marcus Renard</td>
<td className="py-6 px-4">Diver Pro 300m Steel</td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-outline">check</span>
<span className="font-label-caps text-label-caps tracking-wider uppercase text-outline">Delivered</span>
</div>
</td>
<td className="py-6 pl-4 font-price-display text-price-display text-right">12,800.-</td>
</tr>

<tr className="border-b border-surface-container-highest table-row-hover transition-colors duration-200 cursor-pointer">
<td className="py-6 pr-4 font-mono font-medium">#ORD-1021</td>
<td className="py-6 px-4">Sophia Chen</td>
<td className="py-6 px-4">Skeleton Automatique Rose Gold</td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary block"></span>
<span className="font-label-caps text-label-caps tracking-wider uppercase">Pending Auth</span>
</div>
</td>
<td className="py-6 pl-4 font-price-display text-price-display text-right">95,200.-</td>
</tr>

<tr className="border-b border-surface-container-highest table-row-hover transition-colors duration-200 cursor-pointer">
<td className="py-6 pr-4 font-mono font-medium">#ORD-1020</td>
<td className="py-6 px-4">James Worthington III</td>
<td className="py-6 px-4">Perpetual Calendar Moonphase</td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-outline">check</span>
<span className="font-label-caps text-label-caps tracking-wider uppercase text-outline">Delivered</span>
</div>
</td>
<td className="py-6 pl-4 font-price-display text-price-display text-right">215,000.-</td>
</tr>
</tbody>
</table>
</div>

<div className="flex justify-between items-center border-t border-primary pt-6 mt-8">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Showing 1-5 of 124</span>
<div className="flex gap-4">
<button className="text-outline hover:text-primary transition-colors flex items-center justify-center p-2 border border-transparent hover:border-primary">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="text-primary flex items-center justify-center p-2 border border-primary">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</main>
</div>

<footer className="w-full mt-auto bg-background border-t border-primary md:ml-64 md:w-[calc(100%-256px)] z-30">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter w-full max-w-container-max mx-auto">
<span className="font-label-caps text-label-caps font-semibold text-primary">© 2024 PRECISION HOROLOGY ADMIN. ALL RIGHTS RESERVED.</span>
<div className="flex gap-gutter">
<a className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors opacity-100 hover:opacity-80" href="#">Support</a>
<a className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors opacity-100 hover:opacity-80" href="#">Security</a>
<a className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors opacity-100 hover:opacity-80" href="#">Privacy Policy</a>
</div>
</div>
</footer>

        </div>
    );
}
