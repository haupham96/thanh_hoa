import React from 'react';
import { CONTACT_CARDS } from '../data/mockData';

const SECTION_TITLE = 'Liên Hệ Ngay';
const SECTION_SUBTEXT = 'Hãy kết nối với chúng tôi để nhận tư vấn và báo giá chi tiết';

interface ContactSectionProps {
  readonly className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-24 px-8 bg-surface-container-low ${className}`}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight"
          >
            {SECTION_TITLE}
          </h2>
          <p className="text-on-surface-variant text-xl">{SECTION_SUBTEXT}</p>
          <div className="w-24 h-1 signature-gradient mx-auto rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONTACT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-surface-container hover:shadow-lg transition-shadow flex flex-col items-center text-center gap-4"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${card.bgColor} flex items-center justify-center`}
              >
                <span className={`material-symbols-outlined text-2xl text-${card.iconColor}`} aria-hidden="true">
                  {card.icon}
                </span>
              </div>
              <h4 className="text-on-surface font-extrabold font-headline">{card.title}</h4>
              <p className="text-on-surface-variant text-sm">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className="w-full rounded-2xl overflow-hidden border border-surface-variant shadow-sm mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.327105999794!2d106.63556307405275!3d10.786239659014662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eae624df543%3A0x2e07bf0ae937cce1!2zNTMvMjAgxJAuIFTDom4gVGjDoG5oLCBIw7JhIFRo4bqhbmgsIFTDom4gUGjDuiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1774686361815!5m2!1svi!2s"
            title="Vị trí nhà xưởng Thanh Hoa - KCN Bình Chiểu, TP.HCM"
            className="w-full aspect-video"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA Section */}
        <div className="signature-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white tracking-tight">
              Sẵn sàng hợp tác cùng Thanh Hoa?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Liên hệ ngay để nhận báo giá chi tiết và tư vấn giải pháp gia công tối ưu cho doanh nghiệp của bạn.
            </p>
            <div className="pt-6">
              <a href="tel:0909990132" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
                Nhận báo giá
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
