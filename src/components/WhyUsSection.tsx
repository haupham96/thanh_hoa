import React from 'react';
import { WHY_US_ITEMS, FEATURE_CARDS } from '../data/mockData';

const SECTION_HEADLINE_1 = 'Tại sao chọn';
const SECTION_ACCENT = 'Thanh Hoa?';
const SECTION_SUBTEXT =
  'Chúng tôi không chỉ là đơn vị gia công, chúng tôi là đối tác chiến lược giúp nâng tầm giá trị sản phẩm thời trang của bạn.';

interface WhyUsSectionProps {
  readonly className?: string;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-24 px-8 max-w-7xl mx-auto ${className}`}
      aria-labelledby="why-us-title"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <h2
            id="why-us-title"
            className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight"
          >
            {SECTION_HEADLINE_1}{' '}
            <span className="text-signature-gradient">{SECTION_ACCENT}</span>
          </h2>

          <p className="text-xl text-on-surface-variant leading-relaxed">{SECTION_SUBTEXT}</p>

          {/* Advantage List */}
          <div className="space-y-4">
            {WHY_US_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                </div>
                <div>
                  <h5 className="text-on-surface font-bold">{item.title}</h5>
                  <p className="text-on-surface-variant text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {FEATURE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 bg-white rounded-2xl shadow-sm border border-surface-container hover:shadow-lg transition-shadow group ${
                idx === 1 || idx === 3 ? 'mt-8' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span
                  className={`material-symbols-outlined text-2xl text-primary`}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
              </div>
              <h4 className="text-on-surface font-extrabold mb-2">{card.title}</h4>
              <p className="text-xs text-on-surface-variant">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
