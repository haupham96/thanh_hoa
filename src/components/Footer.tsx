import React from 'react';
import { FOOTER_LINKS } from '../data/mockData';

const LOGO_TEXT = 'THANH HOA';
const TAGLINE = 'Giải pháp ủi hơi công nghiệp hàng đầu cho các doanh nghiệp xuất khẩu may mặc tại Việt Nam.';
const COPYRIGHT = '© 2024 THANH HOA. All rights reserved.';

interface FooterProps {
  readonly className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`w-full rounded-t-[2rem] bg-surface-container-low ${className}`}
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="mb-8 md:mb-0 space-y-4">
          <div className="text-xl font-bold text-on-surface font-headline">{LOGO_TEXT}</div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant max-w-xs">
            {TAGLINE}
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-on-surface-variant font-body text-sm hover:text-on-surface transition-all hover:translate-y-[-2px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline-variant/10 py-8 text-center px-12">
        <p className="font-body text-xs text-on-surface-variant">{COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default Footer;
