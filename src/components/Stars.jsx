import React, { useEffect, useState, useRef } from "react";
import house1 from "../assets/house1.mp4";
import podcast2 from "../assets/podcast2.mp4";
import w1 from "../assets/w1.jpeg";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.jpeg";
import w4 from "../assets/w4.jpeg";
import w5 from "../assets/w5.jpeg";
import w6 from "../assets/w6.jpeg";
import w7 from "../assets/w7.jpeg";
import w8 from "../assets/w8.jpeg";
import w9 from "../assets/w9.jpeg";
import w10 from "../assets/w10.jpeg";
import w11 from "../assets/w11.jpeg";
import w12 from "../assets/w12.jpeg";
import w13 from "../assets/w13.jpeg";


const Stars = () => {
  useEffect(() => {
    const ensureScrollToTop = ({ maxAttempts = 60, interval = 16 } = {}) => {
      let attempts = 0;
      const tryTop = () => {
        // force immediate top and repeat until confirmed
        window.scrollTo({ top: 0, behavior: 'auto' });
        const pos = document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (pos === 0) return;
        attempts++;
        if (attempts < maxAttempts) setTimeout(tryTop, interval);
      };
      // start after next paint to avoid racing with other smooth scrolls
      requestAnimationFrame(tryTop);
    };
    ensureScrollToTop();
  }, []);

  const [tab, setTab] = useState('images');
  const [viewImg, setViewImg] = useState(null);
  const [viewVideo, setViewVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const applyHashTab = () => {
      try {
        const hash = (window.location.hash || '').replace(/^#/, '');
        const m = hash.match(/tab=([^&]+)/);
        if (m && m[1]) {
          setTab(decodeURIComponent(m[1]));
        }
      } catch {
        // ignore
      }
    };
    applyHashTab();
    window.addEventListener('hashchange', applyHashTab);
    return () => window.removeEventListener('hashchange', applyHashTab);
  }, []);

  useEffect(() => {
    if (!viewVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [viewVideo]);

  useEffect(() => {
    if (viewVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [viewVideo]);

  return (
    <section
      id="stars-section"
      className="bg-black text-white justify-center items-center px-4 pt-40 pb-5 w-full"
    >
   
      <div className="flex gap-2 justify-center mb-4">
        <button onClick={() => setTab('images')} className={`px-3 py-1 rounded ${tab === 'images' ? 'bg-orange-300 text-black' : 'text-white/70'}`}>Images</button>
        <button onClick={() => setTab('videos')} className={`px-3 py-1 rounded ${tab === 'videos' ? 'bg-orange-300 text-black' : 'text-white/70'}`}>Videos</button>
      </div>

      {tab === 'images' ? (
        <>
          <div className="flex flex-wrap gap-6 p-4 w-full justify-center items-center">
            {[w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13].map((img, i) => (
              <div key={i} className="rounded-lg md:w-40 max-[333px]:w-30 max-[401px]:w-33 max-[552px]:w-40">
                <div className="h-40 md:h-60 overflow-hidden rounded-md">
                  <img src={img} alt={`Star ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center mt-2">
                  <button onClick={() => setViewImg(img)} className="px-3 py-1 bg-slate-700 text-cyan-100 px-3 py-1 rounded-md text-sm  font-medium cursor-pointer">View full image</button>
                </div>
              </div>
            ))}
          </div>
          {viewImg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setViewImg(null)} />
              <div className="relative max-w-[95vw] max-h-[95vh] -mt-48 flex items-center justify-center">
                <button onClick={() => setViewImg(null)} className="absolute top-2 right-2 z-30 px-2 py-1 bg-amber-200 text-black rounded">Close</button>
                <img src={viewImg} alt="Full view" className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md" />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 p-4 w-full justify-center items-center">
            {[{src: house1}, {src: podcast2}].map((vid, i) => (
              <div key={i} className="rounded-md md:w-1/3 lg:w-1/4">
                <div className="h-40 md:h-[360px] 2xl:h-[480px] overflow-hidden rounded-md relative">
                  <video
                    src={vid.src}
                    muted
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    aria-label={`Play video ${i + 1}`}
                    onClick={() => setViewVideo(vid.src)}
                  />
                  <button
                    onClick={() => setViewVideo(vid.src)}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/10"
                    aria-label={`Open video ${i + 1}`}
                  >
                    <span className="bg-black/70 text-white rounded-full p-2">▶</span>
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  <button onClick={() => setViewVideo(vid.src)} className="px-3 py-1 bg-slate-700 text-cyan-100 px-3 py-1 rounded-md text-sm  font-medium cursor-pointer">Play video</button>
                </div>
              </div>
            ))}
          </div>
          {viewVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setViewVideo(null)} />
              <div className="relative max-w-[95vw] max-h-[95vh] mt-10 flex items-center justify-center">
                <button onClick={() => setViewVideo(null)} className="absolute top-2 right-2 z-30 px-2 py-1 bg-amber-200 text-black rounded">Close</button>
                <video ref={videoRef} src={viewVideo} controls autoPlay preload="auto" playsInline className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md" />
              </div>
            </div>
          )}
        </>
      )}

    
    </section>
  );
};

export default Stars;
