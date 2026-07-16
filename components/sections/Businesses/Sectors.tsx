"use client";
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8 pb-0 md:pb-0">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Sectors Header + Cards (486px combined on md+) */}
        <div className="md:h-[486px] md:flex md:flex-col md:gap-4">
          
        {/* Sectors Header */}
        <div className="text-center pt-4">
          <h1 className="font-['Inter'] text-xl font-medium tracking-widest uppercase">Sectors</h1>
        </div>

        {/* Sectors Grid */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-[12px] mx-4">
          {/* Card 1 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-1.webp" alt="Corporate Offices" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Corporate Offices</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Interior construction aligned with functionality, acoustic performance and service integration.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-2.webp" alt="Retail & F&B" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Retail & F&B</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Fast-track fit-out delivery focused on brand requirements and operational readiness.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-3.webp" alt="Residential Interiors" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Residential Interiors</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Premium villa and apartment interior delivered with attention to detail and material quality.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-4.webp" alt="Healthcare & Clinics" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Healthcare & Clinics</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Fit-outs incorporating hygienic materials and coordinated building services.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Showcase Section - full width */}
      <div className="-mx-4 md:-mx-8 mb-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 -mt-3 pl-3">
          <div className="w-full md:max-w-[308px] flex flex-col justify-between">
            <p className="font-['Inter'] font-light text-[20px] leading-relaxed text-gray-800">
              A showcase of absolute accountability in execution. We measure the success of these works by the frequency of repeat client engagement and a commitment to honoring obligations long after final handover.
            </p>
            <div className="ml-3">
              <ul className="space-y-1.5 mb-3 font-[var(--font-ibm-plex)] font-medium text-[15px] tracking-widest uppercase">
                <li>J003 FONTANA INFINITY</li>
                <li>J003 FONTANA INFINITY</li>
                <li>J003 FONTANA INFINITY</li>
              </ul>
              <button className="border border-gray-400 font-[var(--font-ibm-plex)] font-normal text-[16px] tracking-widest uppercase hover:bg-gray-100 transition-colors h-[34px] w-[170px] flex items-center justify-center py-0">
                CONTACT
              </button>
            </div>
          </div>
          <div style={{ width: '972px', height: '693px', flexShrink: 0 }} className="-ml-1">
            <img src="/images/sectors/sector-1.webp" alt="Showcase building" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Aerial View Section - full width */}
      <div className="-mr-4 md:-mr-8 flex justify-end mb-4">
        <div style={{ width: '972px', height: '693px' }}>
          <img src="/images/sectors/sector-2.webp" alt="Aerial view" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Composite Section - full width */}
      <div className="-mr-4 md:-mr-8 flex justify-end">
        <div className="relative overflow-visible" style={{ width: '1006px', height: '705px' }}>
          <img src="/images/sectors/sector-3.jpg" alt="Composite" className="w-full h-full object-cover" />
          <h2 className="absolute top-[18px] left-[18px] font-[var(--font-ibm-plex)] font-normal text-[20px] tracking-widest uppercase text-white">
            J003 FONTANA INFINITY
          </h2>
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div className="flex gap-3 animate-scroll-right" style={{ flexShrink: 0 }}>
              {[1,2,3,4,5,1,2,3,4,5].map((i, idx) => (
                <img key={idx} src={`/images/sectors/pip-${i}.jpg`} alt="" className="flex-shrink-0" width="227" height="157" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-[18px] left-[18px]">
            <p className="font-[var(--font-ibm-plex)] font-medium text-[18px] text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}