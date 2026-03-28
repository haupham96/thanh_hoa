import React, { useState } from 'react';

const LOGO_TEXT = 'THANH HOA';
const CTA_PRIMARY = 'Nhận báo giá';
const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#', active: true },
  { label: 'Dịch vụ', href: '#services', active: false },
  { label: 'Quy trình', href: '#process', active: false },
  { label: 'Liên hệ', href: '#contact', active: false },
];

interface NavbarProps {
  readonly className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-variant/50 shadow-sm ${className}`}
      role="banner"
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-extrabold text-on-surface tracking-tighter font-headline hover:opacity-80 transition-opacity"
        >
          {LOGO_TEXT}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                item.active
                  ? 'text-white font-extrabold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
              }`}
              style={item.active ? { background: 'linear-gradient(135deg, #a13925 0%, #6a37d4 100%)' } : undefined}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
              {item.active && (
                <span className="sr-only">(trang hiện tại)</span>
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:0909990132"
          className="hidden md:flex signature-gradient text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide active:opacity-80 active:scale-95 transition-all shadow-sm hover:shadow-md"
        >
          {CTA_PRIMARY}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <span className="material-symbols-outlined text-2xl">close</span>
          ) : (
            <span className="material-symbols-outlined text-2xl">menu</span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-surface-variant/50 px-6 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                item.active
                  ? 'text-white font-extrabold'
                  : 'text-on-surface-variant'
              }`}
              style={item.active ? { background: 'linear-gradient(135deg, #a13925 0%, #6a37d4 100%)' } : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="tel:0909990132" className="block w-full mt-2 text-center signature-gradient text-white px-5 py-3 rounded-full font-bold text-sm tracking-wide shadow-sm">
            {CTA_PRIMARY}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
