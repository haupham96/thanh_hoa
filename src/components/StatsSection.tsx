import React from 'react';
import { STATS } from '../data/mockData';

interface StatsSectionProps {
  readonly className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`bg-surface-container-low py-16 border-y border-white/5 relative z-20 ${className}`}
      aria-label="Thống kê"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black font-headline text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.5)]">
                {stat.value}
              </div>
              <div className="text-on-surface-variant text-sm font-bold tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
