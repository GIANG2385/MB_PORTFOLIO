import React, { useState } from 'react';
import { Award, Heart, Globe2, Sparkles, CheckCircle2, Users, Flame, BookOpen, HandHeart } from 'lucide-react';

import greenSummerImg from '../assets/images/green_summer_volunteer_1786197411259.jpg';
import scholarshipImg from '../assets/images/scholarship_award_ceremony_1786197439643.jpg';
import exchangeImg from '../assets/images/international_exchange_program_1786197464944.jpg';
import mentorshipImg from '../assets/images/youth_mentorship_program_1786197492022.jpg';
import forumImg from '../assets/images/youth_opportunities_forum_1786197522326.jpg';
import galaImg from '../assets/images/cultural_ambassador_gala_1786197550885.jpg';
import bloodDonationImg from '../assets/images/blood_donation_campaign_1786197578740.jpg';
import cleanupImg from '../assets/images/community_environmental_cleanup_1786197602880.jpg';

export const BeyondClassroom: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'leading' | 'serving' | 'connecting' | null>(null);

  const topics = [
    {
      id: 'leading',
      title: 'Leading',
      icon: Flame,
      bgClass: 'bg-[#001bb7]/10 text-[#001bb7]',
      colorClass: 'text-[#001bb7]',
      image: forumImg,
      description: 'Coordinating cross-functional student teams at PFC, Youth Opportunities, and hackathon competitions.',
      highlights: [
        'Vice Project Director at Project For Children (PFC): Directed youth literacy and community outreach.',
        'Event Director at Youth Opportunities Vietnam: Managed large-scale national youth networking forums.',
        'Hackathon Team Captain: Organized sprint schedules, deck presentations, and backend task division.',
      ],
    },
    {
      id: 'serving',
      title: 'Serving',
      icon: HandHeart,
      bgClass: 'bg-[#b20982]/10 text-[#b20982]',
      colorClass: 'text-[#b20982]',
      image: greenSummerImg,
      description: 'Hyundai Jump School mentor, Green Summer volunteer, and language teacher for underprivileged children.',
      highlights: [
        'Hyundai Jump School Mentorship: Conducted weekly tutoring and digital skill sessions.',
        'Green Summer Volunteer Campaign: Built community infrastructure and education hubs.',
        'Volunteer Language Teaching: Delivered free English and logic lessons to elementary students.',
      ],
    },
    {
      id: 'connecting',
      title: 'Connecting',
      icon: Globe2,
      bgClass: 'bg-[#f1e800]/30 text-[#656100]',
      colorClass: 'text-[#656100]',
      image: exchangeImg,
      description: 'Celebrating cultural heritage at VN-Korea fairs and representing Reading Culture initiatives.',
      highlights: [
        'Multicultural Ambassador: Facilitated dialogue and youth exchange at Vietnam-Korea cultural fairs.',
        'Reading Culture Advocate: Led book donation drives and literary discussions at VNU HSB.',
        'Cross-University Networking: Connected student tech leaders across Hanoi universities.',
      ],
    },
  ];

  // Gallery Photos for the running marquee
  const marqueePhotosRow1 = [
    {
      title: 'Chiến Dịch Tình Nguyện Mùa Hè Xanh',
      subtitle: 'Hành Trình Tình Nguyện Na Hang 2024',
      img: greenSummerImg,
    },
    {
      title: 'Học Bổng Nhà Khoa Học Trẻ KBSV',
      subtitle: 'ĐHQGHN & KB Securities Award 2024 - 2025',
      img: scholarshipImg,
    },
    {
      title: 'Chương Trình Trao Đổi HSB & Morioka Chuo',
      subtitle: 'Giao Lưu Văn Hoá & Học Thuật Quốc Tế',
      img: exchangeImg,
    },
    {
      title: 'Hyundai Jump School Vietnam',
      subtitle: 'Tình Nguyện Viên Giáo Dục & Mentorship',
      img: mentorshipImg,
    },
    {
      title: 'Dự Án Cho Em (PFC)',
      subtitle: 'Sứ Giả Nhân Ái Mùa 4 - Hỗ Trợ Trẻ Em',
      img: forumImg,
    },
    {
      title: 'Đại Sứ Văn Hoá HSB & Gala Dinner',
      subtitle: 'Lễ Tuyên Dương & Celebration Dinner',
      img: galaImg,
    },
  ];

  const marqueePhotosRow2 = [
    {
      title: 'Chương Trình Hiến Máu Vân Thanh Niên Chí',
      subtitle: 'Hiến Máu Tình Nguyện Cứu Người',
      img: bloodDonationImg,
    },
    {
      title: 'Hoạt Động Tình Nguyện VNU HSB',
      subtitle: 'Bữa Cơm 0 Đồng & Vệ Sinh Môi Trường',
      img: cleanupImg,
    },
    {
      title: 'Youth Opportunities Vietnam',
      subtitle: 'Ban Sự Kiện & Tuyển Gen Sandstone Curve',
      img: forumImg,
    },
    {
      title: 'KBSV - VNU Young Scientist Scholar',
      subtitle: 'Lễ Trao Học Bổng & Vinh Danh Học Thuật',
      img: scholarshipImg,
    },
    {
      title: 'Mùa Hè Xanh Tuyên Quang',
      subtitle: 'Cùng Thanh Niên Xây Dựng Cộng Đồng',
      img: greenSummerImg,
    },
    {
      title: 'ĐHQGHN International Youth Exchange',
      subtitle: 'Kết Nối Sinh Viên Việt - Nhật',
      img: exchangeImg,
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="font-montserrat text-3xl md:text-4xl font-black text-[#001bb7]">
            Beyond the Classroom
          </h2>
          <p className="text-[#454655] font-be-vietnam text-sm md:text-base mt-1.5 max-w-2xl">
            Active leadership, social service, and cultural connection outside academic hours.
          </p>
        </div>

        {/* 3 Categories Grid with Framed Image + Text Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topics.map((t) => {
            const IconComp = t.icon;
            const isSelected = selectedTopic === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTopic(isSelected ? null : (t.id as any))}
                className={`group cursor-pointer bg-white rounded-2xl p-5 sm:p-6 border-2 transition-all duration-300 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                  isSelected ? 'border-[#001bb7] ring-2 ring-[#001bb7]/20 shadow-md' : 'border-slate-200/80 hover:border-[#001bb7]'
                }`}
              >
                <div>
                  {/* Category Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.bgClass} mb-4 shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Text Details Box */}
                  <div className="space-y-2">
                    <h3 className={`font-montserrat text-xl font-black ${t.colorClass} flex items-center justify-between`}>
                      {t.title}
                      <span className="text-[10px] font-bold text-[#001bb7] bg-[#001bb7]/10 px-2.5 py-0.5 rounded-full">
                        {isSelected ? 'Hide' : 'Highlights'}
                      </span>
                    </h3>
                    <p className="text-[#454655] font-be-vietnam text-sm leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-montserrat font-bold text-[#001bb7]">
                  <span>Click to expand achievements</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Highlights Panel */}
        {selectedTopic && (
          <div className="mb-8 p-5 sm:p-6 bg-white border-2 border-[#001bb7] rounded-2xl shadow-lg animate-fadeIn space-y-3">
            <h4 className="font-montserrat font-black text-lg text-[#000f7c] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#b20982]" />
              Key Leadership & Social Impact Highlights ({selectedTopic.toUpperCase()})
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 font-be-vietnam text-xs sm:text-sm text-[#454655]">
              {topics
                .find((t) => t.id === selectedTopic)
                ?.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#f8f9fa] rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#001bb7] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Infinite Running Marquee */}
      <div className="w-full overflow-hidden pt-3 pb-6 space-y-4 bg-slate-900/5 py-6 border-y border-slate-200">
        {/* Marquee Row 1 (Scrolling Left) */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left gap-4 px-2">
            {[...marqueePhotosRow1, ...marqueePhotosRow1].map((photo, i) => (
              <div
                key={i}
                className="w-60 sm:w-64 shrink-0 bg-white rounded-xl overflow-hidden border-2 border-slate-200/80 shadow-sm group hover:border-[#001bb7] hover:scale-102 transition-all duration-300"
              >
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={photo.img}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <h5 className="font-montserrat text-xs font-extrabold truncate">
                      {photo.title}
                    </h5>
                    <p className="font-be-vietnam text-[10px] text-slate-200 truncate">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Scrolling Right) */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right gap-4 px-2">
            {[...marqueePhotosRow2, ...marqueePhotosRow2].map((photo, i) => (
              <div
                key={i}
                className="w-60 sm:w-64 shrink-0 bg-white rounded-xl overflow-hidden border-2 border-slate-200/80 shadow-sm group hover:border-[#b20982] hover:scale-102 transition-all duration-300"
              >
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={photo.img}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <h5 className="font-montserrat text-xs font-extrabold truncate">
                      {photo.title}
                    </h5>
                    <p className="font-be-vietnam text-[10px] text-slate-200 truncate">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
