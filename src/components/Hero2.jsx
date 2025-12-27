import React, { memo, useState, useEffect } from "react";
import foi from "../assets/foi.png";
// Use Vite base so navigation and anchors keep working when deployed under a subpath
const BASE = import.meta.env.BASE_URL || '/';
import w10 from "../assets/w10.jpeg";
import w1 from "../assets/w1.jpeg";
import w3 from "../assets/w3.jpeg";
import w6 from "../assets/w6.jpeg";
import conc7 from "../assets/conc7.jpeg";
import roof2 from "../assets/roof2.jpeg";
import felt2 from "../assets/felt2.jpeg";
import conc2 from "../assets/conc2.jpeg";
import conc1 from "../assets/conc1.jpeg";
import inte3 from "../assets/inte3.jpeg";
import inte4 from "../assets/inte4.jpeg";
import inte6 from "../assets/inte6.jpeg";
import placeholder from "../assets/placeholder.png";
import whatsapp from "../assets/whatsapp.png";


const Hero2 = ({ setActive }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [comingOpen, setComingOpen] = useState(false);
  const [comingTitle, setComingTitle] = useState('');

  const goHomeReload = (e, sectionId = 'top') => {
    if (e && e.preventDefault) e.preventDefault();
    const hash = sectionId ? `#${sectionId}` : '';
    const basePath = BASE === './' ? '/' : BASE;
    const absoluteTarget = `${window.location.origin}${basePath}${hash}`;
    try {
      const currentPath = window.location.pathname || '/';
      const currentHash = window.location.hash || '';
      if (currentPath === basePath && currentHash === hash) {
        window.location.reload();
      } else {
        window.location.href = absoluteTarget;
      }
    } catch (err) {
      console.error('Navigation error when trying to reload/navigate home, falling back to href:', err);
      window.location.href = absoluteTarget;
    }
  };
   

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
        setComingOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openImage = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`@media (prefers-reduced-motion: reduce) { .hero-transition * { animation: none !important; transition: none !important; } }`}</style>

      <section id="services-section" className="-mt-6 pb-15 bg-black md:mt-65 xl:mt-17 flex justify-center items-start scroll-mt-2" style={{ scrollMarginTop: '70px' }}>
        <div className="flex flex-col items-center py-8">
          <h1 className=" text-2xl  mt-9 font-sans  font-extrabold bg-gradient-to-r from-sky-100 to-blue-300 bg-clip-text text-transparent md:text-5xl md:pb-4 md:mb-1">
            OUR SERVICES
          </h1>
          <div className="flex flex-row items-center gap-8 mt-5">
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 max-w-6xl">
              {[
                { title: "Structural Building Construction", image: conc7 },
                { title: "Roofing Systems Installation", image: roof2 },
                { title: "Felting & Waterproofing Solutions", image: felt2 },
                { title: "Concrete & Reinforcement Works", image: conc2 },
                { title: "Masonry & Block Works", image: conc1 },
                { title: "Interior & Exterior Finishing", image: inte3 },
                { title: "Flooring, Tiling & Paving", image: inte4 },
                { title: "Construction Project Supervision", image: inte6 },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-900/50 border border-gray-800/90 rounded-sm p-3 pb-18 text-left shadow hover:shadow-lg transition transform hover:-translate-y-1"
                  role="article"
                  aria-label={service.title}
                >
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      onClick={() => openImage(service.image)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openImage(service.image); }}
                      className="w-full h-35 object-cover rounded-md mb-2 cursor-pointer"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <h3 className="text-sm md:text-base font-semibold text-yellow-100">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">
                    Professional {service.title.toLowerCase()} services.
                  </p>
                  <button
                    type="button"
                    aria-label={`View full image for ${service.title}`}
                    onClick={() => openImage(service.image)}
                    className="absolute bottom-5 left-0 right-0 mx-auto w-max bg-slate-700 text-cyan-100 px-3 py-1 rounded-md text-sm  font-medium cursor-pointer"
                  >
                    View full image
                  </button>
                </div>
              ))}
              {modalOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                  role="dialog"
                  aria-modal="true"
                  onClick={() => setModalOpen(false)}
                >
                  <div className="relative max-w-[70%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
                    <button
                      aria-label="Close image"
                      onClick={() => setModalOpen(false)}
                      className="absolute top-2 right-2 text-white text-3xl leading-none"
                    >
                      ×
                    </button>
                    <img src={modalImage} alt="Full view" className="w-full h-auto max-h-[90vh] object-contain rounded" />
                  </div>
                </div>
              )}
              {comingOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="coming-title">
                  <div className="absolute inset-0 bg-black/60" onClick={() => setComingOpen(false)} />
                  <div className="relative bg-zinc-900 text-white rounded-lg p-6 max-w-md w-full mx-4 shadow-lg">
                    <h2 id="coming-title" className="text-xl font-bold mb-2">{comingTitle}</h2>
                    <p className="mb-4">Coming soon!</p>
                    <div className="flex justify-end">
                      <button onClick={() => setComingOpen(false)} className="px-4 py-2 bg-amber-200 text-black rounded">Close</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


        </div>
      </section>
      <section id="membership-section" className="hero-transition bg-black min-h-200 pb-10 scroll-mt-25">
        <div className="flex  justify-center items-center mx-auto ">
          <div>
            <h1 className=" text-2xl  mt-9 font-sans  font-extrabold bg-gradient-to-r from-sky-100 to-blue-300 bg-clip-text text-transparent md:text-5xl md:pb-4 md:mb-1">
              GALLERY
            </h1>
            <p className="text-white text-sm font-sans items-center justify-center flex mt-1 ">
              Completed projects and architectural Design{" "}
            </p>
          </div>
        </div>
        <div className="text-white justify-center items-center flex gap-6 md:gap-8 mt-10 mb-10 flex-wrap ">
          {[w1, w10, w3, w6].map((img, i) => (
            <div
              key={i}
              className=" rounded-lg  shadow-lg  mr-2 ml-4 overflow-hidden md:h-107 md:w-100 max-[333px]:w-30 max-[333px]:h-45"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                decoding="async"
                onClick={() => openImage(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openImage(img); }}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
            <div className="w-full flex justify-center mt-4">
            <button
              type="button"
              aria-label="View more partners"
              onClick={(e) => { e.preventDefault(); setActive && setActive('Meet'); const el = document.getElementById('stars-section'); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); document.body.style.overflow = 'auto'; try { el.focus(); } catch {} } else { goHomeReload(e, 'stars-section'); } }}
              className="ml-3 md:ml-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white text-sm md:text-base px-4 py-2 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              View more <span aria-hidden="true" className="ml-1">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="xl:min-h-10  ">
        <footer className="w-full bg-black text-white border-t border-orange-200/35 py-8 pb-10 md:grid xl:grid-cols-3 md:gap-8 mt-auto">
          <div className="container mx-auto md:px-8 lg:px-15 xl:mx-auto xl:px-48 px-9 flex  md:flex-row items-center justify-between gap-4">
            <div className="flex  gap-3  mb-50 ">
              <div role="button" tabIndex={0} onClick={(e) => { setActive && setActive('Home'); goHomeReload(e, 'top'); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setActive && setActive('Home'); goHomeReload(e, 'top'); } }}>
                <img src={foi} alt="porshe-logo" className="w-14 h-5 md:w-36 md:h-10" />
                <a href={`${BASE}#top`} onClick={(e) => { setActive && setActive('Home'); goHomeReload(e, 'top'); }} className=" text-amber-200 font-normal text-xs">
                  <div className="flex gap-2">
                    <span>MAROCK</span>
                    <span> BUILDING</span>
                    <span className="text-amber-200 font-normal">CONST.<br className="block" />
                      <span className="text-white font-normal text-xs -ml-20 md:-ml-20">ENTERPRISES</span></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-base items-start ml-8 -mt-47 text-xs md:mt-25 xl:-ml-140">
              <div className="flex items-center text-gray-400 space-x-2">
                <img src={whatsapp} alt="contact icon" className="w-5 h-5" />
                <span>0916219586</span>
              </div>
              <div className="flex items-center text-gray-400 mt-2">
                <img src={placeholder} alt="whatsapp" className="w-5 h-5 mr-2" />
                <span>64 Nepa Road Awada Obosi,<br /> Anambara State.</span>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:gap-49 w-full mb-4 px-4 pt-10 xl:-ml-149 whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="flex flex-col items-start mb-4 pl-6 md:mb-0">
              <div id="footer-quick-heading" className="text-sm text-orange-300 mb-1 font-semibold ">
                QUICK LINKS
              </div>
              <nav aria-labelledby="footer-quick-heading" className="flex flex-col gap-3 items-start text-left mt-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">Home</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActive && setActive('Membership'); const scrollToElement = (id, { behavior = 'smooth', offset = 20, maxAttempts = 20, interval = 50 } = {}, attempts = 0) => { const el = document.getElementById(id); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - offset; window.scrollTo({ top, behavior }); return; } if (attempts < maxAttempts) setTimeout(() => scrollToElement(id, { behavior, offset, maxAttempts, interval }, attempts + 1), interval); }; scrollToElement('services-section'); }} className="text-sm text-gray-300 hover:text-white">Services</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActive && setActive('Meet'); goHomeReload(e, 'stars-section'); }} className="text-sm text-gray-300 hover:text-white">Gallery</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActive && setActive('Book'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm text-gray-300 hover:text-white">Book Us</a>
              </nav>
            </div>
         
            <div className="flex flex-col items-start mb-4 pl-6 md:mb-0">
              <div id="footer-help-heading" className="text-sm text-orange-300 mb-1 font-semibold">
                COMPANY
              </div>
              <nav aria-labelledby="footer-help-heading" className="flex flex-col gap-3 items-start text-left mt-2 ">
                <a href="#" onClick={(e) => { e.preventDefault(); setComingTitle('About Us'); setComingOpen(true); }} className="text-sm text-gray-300 hover:text-white">About Us</a>
            
              </nav>
            </div>
            <div className="flex flex-col items-start mb-4 pl-6 md:mb-0">
              <div id="footer-help-heading" className="text-sm text-orange-300 mb-1 font-semibold">
                HELP
              </div>
              <nav aria-labelledby="footer-help-heading" className="flex flex-col gap-3 items-start text-left mt-2 ">
                <a href="#" onClick={(e) => { e.preventDefault(); setComingTitle('FAQ'); setComingOpen(true); }} className="text-sm text-gray-300 hover:text-white">FAQ</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setComingTitle('Privacy Policy'); setComingOpen(true); }} className="text-sm text-gray-300 hover:text-white">Privacy Policy</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setComingTitle('Support'); setComingOpen(true); }} className="text-sm text-gray-300 hover:text-white">Support</a>
              </nav>
            </div>
            
          </div>

          <div className="text-center text-xs text-gray-400 mt-6 flex flex-col justify-center items-center col-span-full">
            © {new Date().getFullYear()} CelebMingle. All rights reserved.
            <p className="text-orange-200 text-sm">Motto: Professional Building Solution</p>
          </div>

        </footer>
      </section>
    </div>
  );
};

export default memo(Hero2);





