
import house1 from "../assets/house1.mp4";
import podcast2 from "../assets/podcast2.mp4";
import { useRef, useEffect, memo } from "react";
// Use Vite base for correct anchors in production (GitHub Pages / Vercel)
const BASE = import.meta.env.BASE_URL || '/';
import w1 from "../assets/w1.jpeg";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.jpeg";
import w4 from "../assets/w4.jpeg";
import w5 from "../assets/w5.jpeg";

const HERO_VIDEOS = [house1, podcast2];

const Heros = memo(({ setActive }) => {
  const videoRef = useRef(null);
  const idx = useRef(0);
  const userPaused = useRef(false);
  const isHoverPaused = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Cycle through videos sequentially without PiP or pop-out; loop across the list.
    v.src = HERO_VIDEOS[idx.current];
    v.muted = true;
    v.loop = false; // we manually handle looping across sources
    v.play?.().catch((err) => { console.warn('Video play failed (possibly autoplay blocked):', err); });

    const onEnded = () => {
      idx.current = (idx.current + 1) % HERO_VIDEOS.length;
      v.src = HERO_VIDEOS[idx.current];
      v.currentTime = 0;
      v.play?.().catch((err) => { console.warn('Video play failed (possibly autoplay blocked):', err); });
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        v.pause();
      } else {
        if (!userPaused.current && !isHoverPaused.current) {
          v.play?.().catch((err) => { console.warn('Video play failed (possibly autoplay blocked):', err); });
        }
      }
    };

    v.addEventListener('ended', onEnded);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      v.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  const imgs = [w1, w2, w3, w4, w5];

  const scrollToStars = (e, tab = '') => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('stars-section');
    const tabParam = tab ? `?tab=${encodeURIComponent(tab)}` : '';
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({ top, behavior: 'smooth' });
      try {
        if (typeof el.focus === 'function') {
          el.focus();
        } else if (el && el.setAttribute) {
          el.setAttribute('tabindex', '-1');
          el.focus && el.focus();
        }
      } catch (e) {
        console.error('Failed to focus stars section', e);
      }
      // update hash to include tab param for deep linking
      try { history.replaceState(null, '', `${BASE}#stars-section${tabParam}`); } catch { window.location.hash = `#stars-section${tabParam}`; }
    } else {
      const basePath = BASE === './' ? '/' : BASE;
      if (window.location.pathname !== basePath) {
        window.location.href = `${window.location.origin}${basePath}#stars-section${tabParam}`;
      } else {
        window.location.hash = `#stars-section${tabParam}`;
      }
    }
    if (typeof setActive === 'function') setActive('Meet');
  };



  return (
    <div className="md:flex md:items-start ">
      <section className="relative mt-10 pt-93 pb-38 md:pt-80 lg:pt-90 xl:pt-190 2xl:pt-50 px-1 md:w-3/3 md:rounded-br-xl text-center md:text-left md:mr-5 bg-black w-full bg-black">
        <div className="absolute z-30 inset-x-0 top-50  md:top-80 ">
          <h1 className="text-2xl md:text-6xl text-white mb-2
          1 font-bold md:ml-14">
            <span className="text-3xl text-orange-300 md:text-5xl" style={{ textShadow: '0 10px 18px rgba(0,0,0,0.95)' }}><h1>
              <span className="text-3xl text-orange-300 md:text-4xl xl:text-6xl" style={{ textShadow: '0 10px 18px rgba(0,0,0,0.95)' }}>
                CONSTRUCTION & ROOFING SERVICES
              </span><br />

              <span className="text-xl text-orange-200 md:text-5xl md:ml-20">
                INTERIOR & EXTERIOR DESIGN
              </span><br />

              <span className="text-base text-orange-100 md:text-3xl ">
                PAINTS, CHEMICALS & FINISHING
              </span>
            </h1>
            </span><br />
          </h1>
          <button onClick={() => setActive && setActive('Book')} className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-200 text-cyan-100 text-xs px-5 py-4 md:px-3 xl:px-6 xl:text-lg rounded-lg font-semibold 
          mx-auto md:mx-0 hover:cursor-pointer active:bg-zinc-600 active:scale-95 transition-all md:ml-76  xl:ml-140 md:text-sm xl:text-lg">BOOK A CONSULTATION</button>
        </div>
        <div className="absolute inset-0 h-full md:h-[600px] 2xl:h-[800px] overflow-hidden z-0 pointer-events-none bg-black">
          <div className="flex flex-nowrap items-stretch gap-1 h-full slider transform-gpu bg-black" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}>
            {[...imgs, ...imgs].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full object-cover brightness-45 block"
              />
            ))}
          </div>
        </div>
        <style>{`@keyframes slide{to{transform:translate3d(-50%,0,0)}} .slider{width:200%; display:flex; animation:slide 30s linear infinite; will-change:transform;} .slider img{display:block; backface-visibility:hidden; -webkit-backface-visibility:hidden; transform:translateZ(0); flex:0 0 25%; width:25%; box-sizing:border-box;} @media (min-width:1280px){ .slider img{flex:0 0 20%; width:10%;} }`}</style>
      </section>

      <section className="h-150 pt-80 md:pt-107 md:h-150 xl:pt-190 xl:pb-30 mt-2 md:mt-0 md:mr-12 md:rounded-bl-xl px-4 w-full md:w-1/3 text-center md:text-left overflow-hidden relative">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noremoteplayback"
          onMouseEnter={() => {
            isHoverPaused.current = true;
            videoRef.current?.pause();
          }}
          onMouseLeave={() => {
            isHoverPaused.current = false;
            if (!userPaused.current) {
              videoRef.current?.play?.().catch((err) => { console.warn('Video play failed (possibly autoplay blocked):', err); });
            }
          }} 
          onPause={() => {
            if (!isHoverPaused.current) userPaused.current = true;
          }}
          onPlay={() => {
            userPaused.current = false;
          }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 -mt-20 sm:-mt-24 md:-mt-37 xl:-mt-90">
          <h1 className="text-2xl md:text-xl xl:text-5xl text-yellow-100 mb-4 font-bold" style={{ textShadow: '0 10px 18px rgba(0,0,0,0.95)' }}>EXPLORE VIDEO SAMPLES FROM</h1>
          <p className="text-base md:text-xs xl:text-lg text-gray-50 mb-6">MAROCK BUILDING CONST. ENTERPRISE video features—expert voices, live project insights, and stories from the field.</p>
          <button onClick={(e) => { e.preventDefault(); scrollToStars(e, 'videos'); }} className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-200 text-cyan-100 text-xs px-5 py-3 md:px-5 xl:px-6 xl:text-lg rounded-lg font-semibold mx-auto md:mx-0 hover:cursor-pointer active:bg-zinc-600 active:scale-95 transition-all">WATCH SAMPLE VIDEOS</button>
        </div>
      </section>

    </div>
  );
});

export default Heros;
