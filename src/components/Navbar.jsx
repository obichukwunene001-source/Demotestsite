import React, { useState, useEffect } from "react";
import foi from "../assets/foi.png";
import foi2 from "../assets/foi2.png";

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2 "><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
)
const AboutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
)
const MemberIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
)
const AccountIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2"><path d="M680-119q-8 0-16-2t-15-7l-120-70q-14-8-21.5-21.5T500-249v-141q0-16 7.5-29.5T529-441l120-70q7-5 15-7t16-2q8 0 15.5 2.5T710-511l120 70q14 8 22 21.5t8 29.5v141q0 16-8 29.5T830-198l-120 70q-7 4-14.5 6.5T680-119ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm320-400q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Zm174-166 94 55 94-55-94-54-94 54Zm124 208 90-52v-110l-90 53v109Zm-150-52 90 53v-109l-90-53v109Z"/></svg>
)
const MeetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2"><path d="m223-120-89-481q-37 7-65.5-17T40-680q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680q0 14-4 26t-12 22q22 13 44.5 21.5T276-602q44 0 81.5-22t58.5-60l25-46q-19-11-30-29t-11-41q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 23-11 41t-30 29l25 46q21 38 58.5 60t81.5 22q25 0 47.5-8t44.5-21q-8-10-12-22.5t-4-26.5q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680q0 38-28.5 62T826-601l-89 481H223Zm67-80h380l60-326q-11 2-23 3.5t-23 1.5q-63 0-117-30t-87-84q-33 54-87 84t-117 30q-11 0-23-1.5t-23-3.5l60 326Zm190 0Z"/></svg>
)
const PodcastIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2"><path d="m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
)
const SubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#b3ac78" className="inline mr-2"><path d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm307 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v210q-36-25-78-37.5T716-560q-54 0-104 21t-88 59H160v240h283q3 21 9 41t15 39Zm320-25 28-28-75-75v-112h-40v128l87 87ZM721-80q-84 0-142.5-58T520-280q0-84 58.5-142T721-480q83 0 141 58.5T920-280q0 83-58 141.5T721-80Z"/></svg>
)
// Use Vite base so navigation works correctly on GitHub Pages/Vercel
const BASE = import.meta.env.BASE_URL || '/';
const Navbar = ({ active, setActive }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setShowModal(false);
        };
        if (showModal) document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [showModal]);

    const goHomeReload = (e, sectionId = 'top') => {
        if (e && e.preventDefault) e.preventDefault();
        const hash = sectionId ? `#${sectionId}` : '';
        const basePath = BASE === './' ? '/' : BASE;
        const absoluteTarget = `${window.location.origin}${basePath}${hash}`;
        // If already at desired path and hash, reload; otherwise navigate to absolute target
        if (window.location.pathname === basePath && window.location.hash === hash) {
            window.location.reload();
        } else {
            window.location.assign(absoluteTarget);
        }
    }; 

    const scrollToElementById = (id, { behavior = 'smooth', offset = 70, maxAttempts = 20, interval = 50 } = {}) => {
        let attempts = 0;
        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior });
                return;
            }
            attempts++;
            if (attempts < maxAttempts) setTimeout(tryScroll, interval);
        };
        tryScroll();
    };

    const ensureScrollToTop = ({ maxAttempts = 120, interval = 16 } = {}) => {
        let attempts = 0;
        // Temporarily disable CSS smooth scrolling so we can force an immediate jump to top
        const prevHtmlSB = document.documentElement.style.scrollBehavior;
        const prevBodySB = document.body.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';

        const tryTop = () => {
            window.scrollTo(0, 0);
            const pos = document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (pos === 0) {
                // restore previous behavior
                document.documentElement.style.scrollBehavior = prevHtmlSB;
                document.body.style.scrollBehavior = prevBodySB;
                return;
            }
            attempts++;
            if (attempts < maxAttempts) setTimeout(tryTop, interval);
            else {
                // give up and restore
                document.documentElement.style.scrollBehavior = prevHtmlSB;
                document.body.style.scrollBehavior = prevBodySB;
            }
        };

        tryTop();
    };

    return (
        <header id="top" className="fixed bg-black w-full top-0 z-100 ">
            <div className="max-w-7xl px-4 pt-6 flex py-4 justify-between items-center mx-auto ">
                {/*Logo*/}
                <div
                    className="noto-sans-display items-center gap-2 hover:cursor-pointer ml-4 md:ml-5 lg:ml-4"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => { setActive && setActive('Home'); goHomeReload(e, 'top'); }}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setActive && setActive('Home'); goHomeReload(e, 'top'); } }}
                >
                    <img src={foi} alt="porshe-logo" className="w-18 h-7 md:w-36 md:h-16" width="144" height="64" loading="eager" fetchpriority="high" decoding="async" />
                    <a href={`${BASE}#top`} onClick={(e) => { setActive && setActive('Home'); goHomeReload(e, 'top'); }} className=" text-amber-200 font-semibold text-xs">
                        <span>MAROCK</span>
                        <span className=""> BUILDING</span>
                        <span className="text-amber-200 font-bold"> CONST.</span>
                        <span className="text-white font-normal text-xs -mt-1 block ml-7">ENTERPRISES</span>
                    </a>
                </div>

                {/*Nav links*/}
                <nav className="hidden md:flex md:mr-8 text-cyan-50 flex-row gap-11 items-center  min-[773px]:pr-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    <a href="#" onClick={() => setActive('Home')} className={`hover:text-orange-100 ${active === 'Home' ? 'bg-yellow-500/20 text-orange-200 px-4 py-2 rounded' : ''}`}>
                      Home
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActive('About'); setModalTitle('About Us'); setShowModal(true); }} className={`hover:text-orange-100 ${active === 'About' ? 'bg-yellow-500/20 text-orange-200 px-4 py-2 rounded' : ''}`}>About Us</a>
                    <a href="#services-section" onClick={(e) => { e.preventDefault(); setActive('Membership'); scrollToElementById('services-section', { behavior: 'smooth', offset: 70 }); }} className={`hover:text-orange-100 ${active === 'Membership' ? 'bg-yellow-500/20 text-orange-200 px-4 py-2 rounded' : ''}`}>Services</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActive('Meet'); goHomeReload(e, 'stars-section'); }} className={`hover:text-orange-100 ${active === 'Meet' ? 'bg-yellow-500/20 text-orange-200 px-4 py-2 rounded' : ''}`}>Gallery</a>
                    <a href="#" onClick={() => { setActive('Book'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-orange-100 ${active === 'Book' ? 'bg-yellow-500/20 text-orange-200 px-4 py-2 rounded' : ''}`}>Book Us</a>
                </nav>

                {/*Button Hamburger*/}
                <button className="md:hidden text-lime-100 mr-4 text-3xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "⨉" : "☰"}
                </button>
                {isOpen && (
                    <div onClick={() => setIsOpen(false)}
                        className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />

                )}
            </div>
            {/*Mobile Nav*/}
            <nav className={`md:hidden text-cyan-50 flex gap-8 bg-zinc-950 flex-col pl-5 pt-8 fixed
            right-0 pb-300 w-60 top-0 rounded-tl-4xl border-l-3 border-gray-900/40 transition-transform z-100 duration-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                <div className="flex items-center gap-2 hover:cursor-pointer -mb-13 ml-0">
                    <div
                    className="noto-sans-display items-center gap-2 hover:cursor-pointer ml-4 "
                    role="button"
                    tabIndex={0}
                    onClick={(e) => { setActive && setActive('Home'); goHomeReload(e, 'top'); }}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setActive && setActive('Home'); goHomeReload(e, 'top'); } }}
                >
                    
                    <img src={foi2} alt="logo" className="w-10 h-4 md:w-36 md:h-16" width="144" height="64" loading="eager" fetchpriority="high" decoding="async" />
                    <a href={`${BASE}#top`} onClick={(e) => { setActive && setActive('Home'); goHomeReload(e, 'top'); }} className=" text-amber-200 font-normal text-xs">
                        <span>MAROCK</span>
                        <span className=""> BUILDING</span>
                        <span className="text-amber-200 font-normal"> CONST.</span>
                        <span className="text-white font-light text-xs -mt-1 block ml-7">ENTERPRISES</span>
                    </a>
                </div>
                </div>
            <div>
            </div>
                <a href="#" onClick={(e) => {e.preventDefault(); setActive('Home'); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' })}} className={`flex items-center text-sm gap-2 px-4 py-4 pr-3  rounded-l-full ${active === 'Home' ? 'bg-gray-900/25 text-yellow-200 border-b-1 border-yellow-400/20' : 'bg-brown-400 text-yellow-100 hover:bg-cyan-400/20'}`}>
                    <HomeIcon />Home
                </a>
                <a href="#" onClick={(e) => {e.preventDefault(); setActive('About'); setIsOpen(false); setModalTitle('About Us'); setShowModal(true);}} className={`flex items-center text-sm gap-2 px-4 py-4 pr-3  rounded-l-full ${active === 'About' ? 'bg-gray-900/25 text-yellow-200 border-b-1 border-yellow-400/20' : 'bg-brown-400 text-yellow-100 hover:bg-cyan-400/20'}`}>
                    <AboutIcon />About Us
                </a>
                <a href="#services-section" onClick={(e) => { e.preventDefault(); setActive('Membership'); setIsOpen(false); scrollToElementById('services-section', { behavior: 'smooth', offset: 70 }); }} className={`flex items-center text-sm gap-2 px-4 py-4 pr-3  rounded-l-full ${active === 'Membership' ? 'bg-gray-900/25 text-yellow-200 border-b-1 border-yellow-400/20' : 'bg-brown-400 text-yellow-100 hover:bg-cyan-400/20'}`}>
                    <MeetIcon />Services
                </a>
          
                <a href="#" onClick={(e) => { e.preventDefault(); setActive('Meet'); setIsOpen(false); goHomeReload(e, 'stars-section'); }} className={`flex items-center text-sm gap-2 px-4 py-4 pr-3  rounded-l-full ${active === 'Meet' ? 'bg-gray-900/25 text-yellow-200 border-b-1 border-yellow-400/20' : 'bg-brown-400 text-yellow-100 hover:bg-cyan-400/20'}`}>
                    <SubIcon />Gallery
                </a>

                <a href="#" onClick={(e) => {e.preventDefault(); setActive('Book'); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' })}} className={`flex items-center text-sm gap-2 px-4 py-4 pr-3  rounded-l-full ${active === 'Book' ? 'bg-gray-900/25 text-yellow-200 border-b-1 border-yellow-400/20' : 'bg-brown-400 text-yellow-100 hover:bg-cyan-400/20'}`}>
                    <AccountIcon />Book Us
                </a>
            </nav>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 9999 }} role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />
                    <div className="relative bg-zinc-900 text-white rounded-lg p-6 max-w-md w-full mx-4 shadow-lg">
                        <h2 id="modal-title" className="text-xl font-bold mb-2">{modalTitle || ''}</h2>
                        <div className="flex justify-end">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-amber-200 text-black rounded">Close</button>
                        </div>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Navbar;
