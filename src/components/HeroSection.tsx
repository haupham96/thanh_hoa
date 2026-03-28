import React from 'react';

const BADGE_TEXT = 'Dịch vụ gia công chuyên nghiệp';
const HEADLINE_1 = 'Giải Pháp Ủi Gia Công';
const HEADLINE_2 = 'Chuyên Nghiệp Hàng Đầu';
const SUBTEXT =
  'Cung cấp giải pháp ủi hơi công nghiệp nhanh chóng, chính xác và chất lượng cao cho doanh nghiệp may mặc Việt Nam.';
const CTA_PRIMARY = 'Nhận báo giá ngay';
const CTA_SECONDARY = 'Liên hệ tư vấn';
const TRUST_ITEMS = [
  '10+ năm kinh nghiệm',
  '5000+ sản phẩm/ngày',
  'Tỷ lệ hài lòng 99%',
];

interface HeroSectionProps {
  readonly className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <main
      className={`pt-32 pb-20 px-8 max-w-7xl mx-auto overflow-hidden ${className}`}
      role="region"
      aria-label="Giới thiệu chính"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              factory
            </span>
            {BADGE_TEXT}
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
            <span className="text-signature-gradient">{HEADLINE_1}</span>
            <br />
            {HEADLINE_2}
          </h1>

          {/* Subtext */}
          <p className="text-xl text-on-surface-variant leading-relaxed">{SUBTEXT}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button className="signature-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-3">
              {CTA_PRIMARY}
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-lg border-2 border-outline-variant/30 hover:bg-surface-container-low transition-colors text-on-surface">
              {CTA_SECONDARY}
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-on-surface-variant font-medium">
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Decorative visual */}
        <div className="relative">
          {/* Background decorative blob */}
          <div className="absolute -top-20 -right-20 w-[120%] h-[120%] signature-gradient opacity-10 blur-[100px] -z-10 rounded-full" />

          {/* Main card */}
          <div className="relative bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border border-white/50">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <img
                  className="w-full h-full object-cover"
                  alt="Nhà xưởng Thanh Hoa với hệ thống bàn ủi hơi công nghiệp hiện đại"
                  src="/assets/images/steam_pressing.png"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/40 backdrop-blur text-[10px] text-white font-medium">
                  Ủi hơi công nghiệp
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Kỹ thuật viên Thanh Hoa kiểm tra chất lượng sản phẩm hoàn thiện"
                  src="/assets/images/button_attaching.png"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/40 backdrop-blur text-[10px] text-white font-medium">
                  Đóng nút tự động
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden col-span-2">
                <img
                  className="w-full h-full object-cover"
                  alt="Tổng quan nhà xưởng Thanh Hoa với dây chuyền sản xuất hiện đại"
                  src="/assets/images/eyelet_stitching.png"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <div className="px-2 py-0.5 rounded bg-primary/10 text-[10px] text-primary font-bold uppercase tracking-wider">
                    Đang hoạt động
                  </div>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -left-12 bottom-20 glass-panel p-4 rounded-2xl shadow-xl border border-white/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  Công suất
                </span>
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-xs leading-relaxed text-on-surface">
                Đã hoàn thành{' '}
                <span className="bg-primary-container/30 px-1 rounded text-primary font-bold">5,000+ sản phẩm</span>{' '}
                trong hôm nay
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Avatar thợ may"
                      src="/assets/images/thread_trimming.png"
                    />
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium italic">15 kỹ thuật viên đang làm việc...</span>
              </div>
            </div>

            {/* Feature chip */}
            <div className="absolute -right-8 top-12 glass-panel px-5 py-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-lg">verified</span>
                <span className="text-[11px] font-bold text-secondary uppercase tracking-tight">Chất lượng</span>
              </div>
              <p className="text-xs font-semibold text-on-surface">
                Đạt tiêu chuẩn xuất khẩu EU & Mỹ cho mọi đơn hàng.
              </p>
            </div>

            {/* Soundwave viz */}
            <div className="bg-surface-container-low rounded-xl p-4 flex items-end justify-between gap-1 h-16">
              {[40, 60, 80, 50, 90, 30, 70, 45, 65, 85, 40, 60, 80, 50, 90, 30].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
