import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';

const SECTION_TITLE = 'Quy Trình Làm Việc';

interface ProcessSectionProps {
  readonly className?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-24 px-8 bg-surface-container-low ${className}`}
      id="process"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2
            id="process-title"
            className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight"
          >
            {SECTION_TITLE}
          </h2>
          <div className="w-24 h-1 signature-gradient mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connective line (desktop only) */}
          <div className="absolute top-10 left-0 w-full h-1 bg-surface-variant -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Step number circle */}
                <div
                  className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-primary font-black text-2xl font-headline border-4 border-primary/20 hover:border-primary transition-colors"
                  aria-label={`Bước ${step.step}`}
                >
                  {step.step}
                </div>

                {/* Step Text */}
                <div className="space-y-2">
                  <h4 className="font-extrabold text-on-surface text-lg">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm">{step.description}</p>
                </div>

                {/* Connector arrow (between steps) */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-10 transform translate-x-1/2 z-20">
                    <span className="material-symbols-outlined text-surface-variant">chevron_right</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
