import { EntryFormData } from "@/src/type/EntryFormData";
import { FormErrors } from "@/src/type/FormErrors";
import { Mail, MessageSquare, Phone, User } from "lucide-react";

interface FirstStepProps {
  step: number;
  formData: EntryFormData;
  errors: FormErrors;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
}

export default function FirstStep({
  step,
  errors,
  formData,
  handleChange,
}: FirstStepProps) {
  return (
    <>
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Ваше имя <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-main" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition"
                placeholder="Введите ваше имя"
                required
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Телефон <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-main/40" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-main/40" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Комментарий
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-text-main/40" />
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={3}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition resize-none"
                placeholder="Ваши пожелания, дополнительные услуги..."
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
