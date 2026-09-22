
import React from 'react';

export default function AdminOverview() {
    return (
        <div className="adminoverview-page">
            

<aside className="bg-surface text-primary font-label-caps text-label-caps h-screen w-64 fixed left-0 top-0 border-r border-primary flex flex-col z-20 hidden md:flex">
<div className="p-6 border-b border-primary">
<h1 className="font-headline-md text-headline-md text-primary tracking-widest">HOROLOGIST ADMIN</h1>
</div>
<div className="p-6 border-b border-primary flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high border border-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined fill text-2xl">person</span>
</div>
<div>
<div className="font-bold">System Administrator</div>
<div className="text-on-surface-variant mt-1">Luxury Watch Group</div>
<div className="text-on-surface-variant opacity-70 mt-1">Master Access</div>
</div>
</div>
<nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed border-r border-gray-800 bg-black py-8 space-y-4 z-40">

<div className="px-gutter mb-12">
<img src="imgs/logo_axios.png" alt="Axios Logo" className="h-30" />
</div>

<div className="flex-1 space-y-2">

<a className="flex items-center space-x-4 px-gutter py-3 bg-white text-black font-bold hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out font-label-caps text-label-caps cursor-pointer" href="#">
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

<main className="flex-1 md:ml-64 flex flex-col min-h-screen">

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

<div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">

<div className="mb-12 flex justify-between items-end border-b border-primary pb-4">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">Dashboard Overview</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Executive Summary & Performance Metrics</p>
</div>
<div className="hidden md:flex gap-4">
<button className="px-6 py-3 border border-primary text-primary font-label-caps text-label-caps hover:bg-surface-container-high transition-colors uppercase">
                        Export Report
                    </button>
<button className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps hover:bg-secondary transition-colors uppercase">
                        New Product
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-padding">

<div className="border border-primary p-6 bg-surface-container-lowest relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[100px]">account_balance</span>
</div>
<div className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Total Revenue (YTD)</div>
<div className="font-price-display text-price-display text-4xl mb-2">$4,250,000</div>
<div className="font-body-md text-body-md text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
                        +12.5% vs Last Year
                    </div>
</div>

<div className="border border-primary p-6 bg-surface-container-lowest relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[100px]">watch</span>
</div>
<div className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Monthly Sales</div>
<div className="font-price-display text-price-display text-4xl mb-2">128 Units</div>
<div className="font-body-md text-body-md text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
                        +5.2% vs Last Month
                    </div>
</div>

<div className="border border-primary p-6 bg-surface-container-lowest relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[100px]">receipt_long</span>
</div>
<div className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Average Order Value</div>
<div className="font-price-display text-price-display text-4xl mb-2">$33,203</div>
<div className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_flat</span>
                        Consistent
                    </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-section-padding">

<div className="lg:col-span-2">
<div className="border-b border-primary pb-4 mb-8 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md uppercase">Sales Trends (30 Days)</h3>
<div className="flex gap-4 font-label-caps text-label-caps">
<button className="text-primary border-b border-primary pb-1">Revenue</button>
<button className="text-on-surface-variant hover:text-primary transition-colors pb-1">Units</button>
</div>
</div>
<div className="border border-primary bg-surface-container-lowest p-6">
<div className="chart-container">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-on-surface-variant pb-6 pr-4 border-r border-outline-variant z-10 bg-surface-container-lowest">
<span>$150k</span>
<span>$100k</span>
<span>$50k</span>
<span>$0</span>
</div>

<div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-on-surface-variant pt-2 border-t border-outline-variant">
<span>Oct 1</span>
<span>Oct 8</span>
<span>Oct 15</span>
<span>Oct 22</span>
<span>Oct 29</span>
</div>

<div className="absolute inset-0 ml-12 mb-6">
<svg className="stroke-primary fill-none stroke-2" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 250" width="100%">
<path d="M0,200 L100,180 L200,220 L300,150 L400,160 L500,80 L600,110 L700,50 L800,90 L900,40 L1000,20"></path>

<circle className="fill-primary" cx="0" cy="200" r="4"></circle>
<circle className="fill-primary" cx="100" cy="180" r="4"></circle>
<circle className="fill-primary" cx="200" cy="220" r="4"></circle>
<circle className="fill-primary" cx="300" cy="150" r="4"></circle>
<circle className="fill-primary" cx="400" cy="160" r="4"></circle>
<circle className="fill-primary" cx="500" cy="80" r="4"></circle>
<circle className="fill-primary" cx="600" cy="110" r="4"></circle>
<circle className="fill-primary" cx="700" cy="50" r="4"></circle>
<circle className="fill-primary" cx="800" cy="90" r="4"></circle>
<circle className="fill-primary" cx="900" cy="40" r="4"></circle>
<circle className="fill-primary" cx="1000" cy="20" r="4"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="border-b border-primary pb-4 mb-8 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md uppercase">Recent Transactions</h3>
<a className="font-label-caps text-label-caps text-primary hover:underline uppercase" href="#">View All</a>
</div>
<div className="flex flex-col gap-4">

<div className="border border-outline-variant p-4 hover:border-primary transition-colors bg-surface-container-lowest">
<div className="flex justify-between items-start mb-2">
<div className="font-label-caps text-label-caps uppercase">#ORD-9932</div>
<span className="px-2 py-1 bg-surface-container-highest text-primary font-label-caps text-[10px] uppercase border border-primary">Completed</span>
</div>
<div className="font-body-md text-body-md font-semibold mb-1">Chronograph Perpetual</div>
<div className="flex justify-between items-end">
<div className="font-body-md text-sm text-on-surface-variant">A. Sterling</div>
<div className="font-price-display text-price-display text-lg">$85,000</div>
</div>
</div>

<div className="border border-outline-variant p-4 hover:border-primary transition-colors bg-surface-container-lowest">
<div className="flex justify-between items-start mb-2">
<div className="font-label-caps text-label-caps uppercase">#ORD-9931</div>
<span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[10px] uppercase border border-secondary">Pending</span>
</div>
<div className="font-body-md text-body-md font-semibold mb-1">Tourbillon Skeleton</div>
<div className="flex justify-between items-end">
<div className="font-body-md text-sm text-on-surface-variant">M. Rossi</div>
<div className="font-price-display text-price-display text-lg">$142,500</div>
</div>
</div>

<div className="border border-outline-variant p-4 hover:border-primary transition-colors bg-surface-container-lowest">
<div className="flex justify-between items-start mb-2">
<div className="font-label-caps text-label-caps uppercase">#ORD-9930</div>
<span className="px-2 py-1 bg-surface-container-highest text-primary font-label-caps text-[10px] uppercase border border-primary">Completed</span>
</div>
<div className="font-body-md text-body-md font-semibold mb-1">Diver Pro 300m</div>
<div className="flex justify-between items-end">
<div className="font-body-md text-sm text-on-surface-variant">E. Chen</div>
<div className="font-price-display text-price-display text-lg">$12,400</div>
</div>
</div>

<div className="border border-outline-variant p-4 hover:border-primary transition-colors bg-surface-container-lowest opacity-70">
<div className="flex justify-between items-start mb-2">
<div className="font-label-caps text-label-caps uppercase">#ORD-9929</div>
<span className="px-2 py-1 bg-error-container text-on-error-container font-label-caps text-[10px] uppercase border border-error">Cancelled</span>
</div>
<div className="font-body-md text-body-md font-semibold mb-1">Classic Dress Gold</div>
<div className="flex justify-between items-end">
<div className="font-body-md text-sm text-on-surface-variant">J. Doe</div>
<div className="font-price-display text-price-display text-lg line-through">$28,000</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps w-full bottom-0 border-t border-outline-variant flex justify-between items-center px-margin-desktop py-6 mt-auto flex-col md:flex-row gap-4">
<div className="text-primary font-bold">© 2024 HOROLOGIST PRECISION SYSTEMS</div>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:text-primary underline transition-all cursor-pointer" href="#">System Status</a>
<a className="text-on-surface-variant hover:text-primary underline transition-all cursor-pointer" href="#">API Documentation</a>
<a className="text-on-surface-variant hover:text-primary underline transition-all cursor-pointer" href="#">Support</a>
</div>
</footer>
</main>

        </div>
    );
}
