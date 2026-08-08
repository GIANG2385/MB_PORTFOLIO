import React, { useState } from 'react';
import { Award, Heart, Globe2, Sparkles, CheckCircle2, Users, Flame, BookOpen, HandHeart } from 'lucide-react';

import chuNhatXanhImg from '../assets/beyond-classroom/chu-nhat-xanh.jpg';
import hocBongKbsvImg from '../assets/beyond-classroom/hoc-bong-kbsv.jpg';
import hyundaiJumpSchoolImg from '../assets/beyond-classroom/hyundai-jump-school.jpg';
import suGiaNhanAiImg from '../assets/beyond-classroom/su-gia-nhan-ai-du-an-cho-em.jpg';
import youthOppEventTeamImg from '../assets/beyond-classroom/youth-opportunities-vietnam-event-team.jpg';
import donThuTuongImg from '../assets/beyond-classroom/don-thu-tuong-new-zealand.jpg';
import hienMauImg from '../assets/beyond-classroom/hien-mau-tinh-nguyen.jpg';
import muaHeXanhImg from '../assets/beyond-classroom/mua-he-xanh.jpg';
import ngayHoiVieclamImg from '../assets/beyond-classroom/ngay-hoi-viec-lam.jpg';
import pathToIvyLeagueImg from '../assets/beyond-classroom/path-to-ivy-league.jpg';
import hamKimChiImg from '../assets/beyond-classroom/ham-kim-chi-event-team.jpg';
import troGiangTiengHanImg from '../assets/beyond-classroom/tro-giang-lop-tieng-han.jpg';
import banhMiTuTamImg from '../assets/beyond-classroom/banh-mi-tu-tam.jpg';
import hoiThaoHsbImg from '../assets/beyond-classroom/hoi-thao-hsb.jpg';
import sinhVienTieuBieuImg from '../assets/beyond-classroom/sinh-vien-tieu-bieu-hsb.jpg';
import youthOppVietnamImg from '../assets/beyond-classroom/youth-opportunities-vietnam.jpg';
import daiBieuDaiHoiDoanImg from '../assets/beyond-classroom/dai-bieu-dai-hoi-doan-tncs-hcm.jpg';
import tinhNguyenVienHjs6Img from '../assets/beyond-classroom/tinh-nguyen-vien-hjs6.jpg';
import duAnChoEmImg from '../assets/beyond-classroom/du-an-cho-em.jpg';

export const BeyondClassroom: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'leading' | 'serving' | 'connecting' | null>(null);

  const topics = [
    {
      id: 'leading',
      title: 'Leading',
      icon: Flame,
      bgClass: 'bg-[#001bb7]/10 text-[#001bb7]',
      colorClass: 'text-[#001bb7]',
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
      title: 'Chủ Nhật Xanh',
      subtitle: '17/03/2024',
      img: chuNhatXanhImg,
    },
    {
      title: 'Học Bổng KBSV',
      subtitle: '16/05/2025',
      img: hocBongKbsvImg,
    },
    {
      title: 'Hyundai Jump School',
      subtitle: 'Volunteer Mentorship Program',
      img: hyundaiJumpSchoolImg,
    },
    {
      title: 'Sứ Giả Nhân Ái',
      subtitle: 'Dự Án Cho Em',
      img: suGiaNhanAiImg,
    },
    {
      title: 'Youth Opportunities Vietnam',
      subtitle: 'Thành Viên Ban Sự Kiện',
      img: youthOppEventTeamImg,
    },
    {
      title: 'Đón Thủ Tướng New Zealand',
      subtitle: 'State Visit Reception',
      img: donThuTuongImg,
    },
    {
      title: 'Hiến Máu Tình Nguyện',
      subtitle: '26/03/2025',
      img: hienMauImg,
    },
    {
      title: 'Mùa Hè Xanh',
      subtitle: 'Green Summer Volunteer Campaign',
      img: muaHeXanhImg,
    },
    {
      title: 'Ngày Hội Việc Làm',
      subtitle: '07 - 08/07/2025',
      img: ngayHoiVieclamImg,
    },
    {
      title: 'Dự Án Cho Em',
      subtitle: 'Việc Tử Tế - VTV',
      img: duAnChoEmImg,
    },
  ];

  const marqueePhotosRow2 = [
    {
      title: 'Path to Ivy League',
      subtitle: 'Academic Guidance Program',
      img: pathToIvyLeagueImg,
    },
    {
      title: 'Hầm Kim Chi',
      subtitle: 'Thành Viên Ban Sự Kiện',
      img: hamKimChiImg,
    },
    {
      title: 'Trợ Giảng Lớp Tiếng Hàn',
      subtitle: 'Korean Language Teaching Assistant',
      img: troGiangTiengHanImg,
    },
    {
      title: 'Bánh Mì Từ Tâm',
      subtitle: 'Community Kindness Campaign',
      img: banhMiTuTamImg,
    },
    {
      title: 'Hội Thao HSB',
      subtitle: '13/04/2025',
      img: hoiThaoHsbImg,
    },
    {
      title: 'Sinh Viên Tiêu Biểu HSB',
      subtitle: 'Outstanding Student Recognition',
      img: sinhVienTieuBieuImg,
    },
    {
      title: 'Youth Opportunities Vietnam',
      subtitle: 'National Youth Networking Forum',
      img: youthOppVietnamImg,
    },
    {
      title: 'Đại Biểu Đại Hội Đoàn TNCS HCM',
      subtitle: '18/12/2024',
      img: daiBieuDaiHoiDoanImg,
    },
    {
      title: 'Tình Nguyện Viên HJS6',
      subtitle: 'Hyundai Jump School Volunteer',
      img: tinhNguyenVienHjs6Img,
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
