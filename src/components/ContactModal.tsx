import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Collaboration / MB Pioneer Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
        {/* Header */}
        <div className="p-6 bg-[#001bb7] text-white flex justify-between items-start">
          <div>
            <h3 className="font-montserrat text-2xl font-bold">Start a Conversation</h3>
            <p className="text-white/80 font-be-vietnam text-xs mt-1">
              Connect with Nguyễn Ngọc Hoàng Giang for collaborations, AI product initiatives & MB Pioneer opportunities.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-fadeIn">
              <div className="w-14 h-14 bg-[#001bb7]/10 text-[#001bb7] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-montserrat font-bold text-xl text-[#001bb7]">
                Message Sent Successfully!
              </h4>
              <p className="font-be-vietnam text-sm text-[#454655] max-w-xs mx-auto">
                Thank you for reaching out, {formData.name}. I will respond to your email at {formData.email} promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-be-vietnam text-sm">
              <div>
                <label className="block font-montserrat font-bold text-xs text-[#001bb7] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Tran"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#001bb7] focus:ring-2 focus:ring-[#001bb7]/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block font-montserrat font-bold text-xs text-[#001bb7] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. hgiang2308@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#001bb7] focus:ring-2 focus:ring-[#001bb7]/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block font-montserrat font-bold text-xs text-[#001bb7] mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#001bb7] focus:ring-2 focus:ring-[#001bb7]/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block font-montserrat font-bold text-xs text-[#001bb7] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your idea or project..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#001bb7] focus:ring-2 focus:ring-[#001bb7]/20 outline-none transition-all text-sm"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-[#454655]">
                  <a href="mailto:hgiang2308@gmail.com" className="hover:text-[#001bb7] flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                  <a href="tel:0933198692" className="hover:text-[#001bb7] flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> Phone
                  </a>
                </div>

                <button
                  type="submit"
                  className="bg-[#b20982] text-white px-6 py-2.5 rounded-lg font-montserrat font-semibold text-xs hover:bg-[#890063] transition-all flex items-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
