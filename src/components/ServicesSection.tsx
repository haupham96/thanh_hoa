import React from 'react';
import { SERVICES } from '../data/mockData';

const SECTION_TITLE = 'Dịch Vụ Của Chúng Tôi';

// Icon mapping for each service
const SERVICE_ICONS: Record<string, string> = {
  '01': 'local_laundry_service',
  '02': 'precision_manufacturing',
  '03': 'style',
  '04': 'content_cut',
  '05': 'inventory_2',
};

interface ServicesSectionProps {
  readonly className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-24 px-6 md:px-8 bg-surface ${className}`}
      id="services"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center space-y-4">
          <h2
            id="services-title"
            className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight"
          >
            {SECTION_TITLE}
          </h2>
          <div className="w-24 h-1 signature-gradient mx-auto rounded-full" />
        </div>

        {/* Services Grid - 2 cols on mobile, 3 cols on md, 5 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => {
            const isAccent = idx === 0; // Card 2: Đóng nút — violet accent card
            return (
              <div
                key={service.id}
                className={`
                  group rounded-2xl overflow-hidden flex flex-col
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${
                    isAccent
                      ? 'bg-secondary text-white'
                      : 'bg-white border border-surface-variant shadow-sm'
                  }
                `}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay on accent card */}
                  {isAccent && (
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className={`p-5 flex flex-col flex-1 ${isAccent ? 'bg-secondary' : ''}`}>
                  {/* Icon + Label */}
                  <div
                    className={`
                      w-10 h-10 rounded-xl flex items-center justify-center mb-3
                      transition-transform duration-300 group-hover:scale-110
                      ${isAccent ? 'bg-white/20' : 'bg-primary/10'}
                    `}
                  >
                    <span
                      className={`material-symbols-outlined text-xl ${
                        isAccent ? 'text-white' : 'text-primary'
                      }`}
                      aria-hidden="true"
                    >
                      {SERVICE_ICONS[service.id]}
                    </span>
                  </div>

                  {/* Service number */}
                  <span
                    className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                      isAccent ? 'text-white/60' : 'text-primary'
                    }`}
                  >
                    {service.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-lg font-headline font-extrabold mb-2 leading-tight ${
                      isAccent ? 'text-white' : 'text-on-surface'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed flex-1 ${
                      isAccent ? 'text-white/80' : 'text-on-surface-variant'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
