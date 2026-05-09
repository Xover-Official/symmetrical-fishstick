'use client';

import React from 'react';
import { Globe } from './Globe';
import { motion } from 'framer-motion';

export const GlobalOperations: React.FC = () => {
  return (
    <section className="relative min-height-[80vh] w-full py-24 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="mono-text text-white/50">SYSTEM_STATUS: OPERATIONAL</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display uppercase leading-none">
            Global <br /> <span className="text-white/20">Logistics</span>
          </h2>
          <div className="mt-8 max-w-md">
            <p className="text-sm text-white/40 leading-relaxed font-light">
              Coordinating technical restoration and premium acquisition across strategic nodes. 
              Our Abrar Market hub serves as the primary uplink for iPhone architectural services.
            </p>
          </div>
        </div>

        {/* Technical Metadata Tags */}
        <div className="absolute top-24 right-6 text-right hidden md:block">
          <div className="mb-8">
            <p className="tech-label static opacity-100">UPLINK_STRENGTH</p>
            <p className="font-mono text-xl text-white/80">99.98%</p>
          </div>
          <div className="mb-8">
            <p className="tech-label static opacity-100">LATENCY</p>
            <p className="font-mono text-xl text-white/80">14ms</p>
          </div>
          <div className="mb-8">
            <p className="tech-label static opacity-100">NODE_LOCATION</p>
            <p className="font-mono text-xl text-white/80">31.5204° N, 74.3587° E</p>
          </div>
        </div>

        {/* Technical Logs */}
        <div className="absolute bottom-32 left-6 hidden lg:block">
          <div className="flex flex-col gap-1 font-mono text-[8px] text-white/20">
            <p>[08:42:11] INITIALIZING_ORBITAL_UPLINK...</p>
            <p>[08:42:12] HANDSHAKE_SUCCESSFUL (ID: GILL_SAT_1)</p>
            <p>[08:42:14] STREAMING_REAL_TIME_MARKET_DATA</p>
            <p>[08:42:15] PK_NODE_LAHORE: ACTIVE</p>
          </div>
        </div>
      </div>

      {/* Globe Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 pointer-events-none">
        <Globe />
      </div>

      {/* Bottom Technical Bar */}
      <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/5 flex justify-between items-center bg-black/20 backdrop-blur-sm">
        <div className="flex gap-12">
          <div>
            <p className="mono-text text-[8px] text-white/20 mb-1">CORE_TEMP</p>
            <p className="font-mono text-xs text-white/40">32.4°C</p>
          </div>
          <div>
            <p className="mono-text text-[8px] text-white/20 mb-1">DATA_FLOW</p>
            <p className="font-mono text-xs text-white/40">1.2 TB/S</p>
          </div>
          <div className="hidden sm:block">
            <p className="mono-text text-[8px] text-white/20 mb-1">ENCRYPTION</p>
            <p className="font-mono text-xs text-white/40">AES-256_GCM</p>
          </div>
        </div>
        <div className="mono-text text-[8px] text-white/20">
          STABLISHED_2014 // GILL_MOBILE_TECHNICAL_LAB
        </div>
      </div>
    </section>
  );
};
