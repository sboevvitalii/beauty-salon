import { services } from "@/src/shared/services";
import { Styles } from "./styles";
import { masters } from "@/src/shared/masters";
import { Calendar } from "lucide-react";
import { timeSlots } from "../utils/timeSlots";
import { EntryFormData } from "@/src/type/EntryFormData";

interface SecondStepProps {
  step: number;
  formData: EntryFormData;
  setFormData: React.Dispatch<React.SetStateAction<EntryFormData>>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
}

export default function SecondStep({
  step,
  formData,
  handleChange,
  setFormData,
}: SecondStepProps) {
  return (
    <>
      {" "}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Услуга <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition appearance-none pr-10"
              style={Styles.ArrowDown}
              required
            >
              <option value="">Выберите услугу</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} ({service.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="masterId"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Мастер
            </label>
            <select
              id="masterId"
              name="masterId"
              value={formData.masterId}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition appearance-none pr-10"
              style={Styles.ArrowDown}
            >
              <option value="">Любой мастер</option>
              {masters.map((master) => (
                <option key={master.id} value={master.id}>
                  {master.name} — {master.position} (⭐ {master.rating})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-text-main mb-2"
            >
              Дата <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-main/40" />
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-main mb-3">
              Время <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData({ ...formData, time })}
                  className={`px-3 py-2 rounded-lg text-sm transition ${
                    formData.time === time
                      ? "bg-primary text-white"
                      : "bg-bg-section text-text-main hover:bg-primary/20"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-bg-section rounded-lg p-4 mt-4">
            <p className="text-sm text-text-main/70">
              <span className="font-medium text-primary">
                Информация о записи:
              </span>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-text-main/60">
              <li>• Продолжительность процедуры: от 1 до 3 часов</li>
              <li>
                • Опоздание более чем на 15 минут может сократить время
                процедуры
              </li>
              <li>• Отмена записи не позднее чем за 2 часа</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
