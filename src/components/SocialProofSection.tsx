import React from 'react';

const LOGOS = [
  { name: 'VINATEX', abbr: 'VNT' },
  { name: 'Saigon Fashion', abbr: 'SGF' },
  { name: 'Thanh Hoa Garment', abbr: 'THG' },
  { name: 'Hanoi Textiles', abbr: 'HNT' },
  { name: 'VietApparel', abbr: 'VAP' },
];

interface SocialProofSectionProps {
  readonly className?: string;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-16 bg-surface-container-low w-full overflow-hidden ${className}`}
      aria-label="Đối tác tin tưởng"
    >
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-xs font-bold text-on-surface-variant uppercase tracking-[0.3em] mb-12">
          Được tin tưởng bởi các doanh nghiệp may mặc hàng đầu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="logo-item text-2xl font-black font-headline tracking-tighter text-on-surface"
              title={logo.name}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
