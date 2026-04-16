"use client";

import { ChangeEvent, useState, useRef } from "react";
import ToolTip from "./ToolTip";
import { validateBirthDate } from "@/src/utils/validation/validateBirthDate";
import { Calendar } from "lucide-react";

interface DateInputProps {
  id: string;
  value: string;
  onChangeAction: (value: string) => void;
}

export default function DateInput({
  id,
  value,
  onChangeAction,
}: DateInputProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tempInputRef = useRef<HTMLInputElement | null>(null);

  const formatDate = (input: string): string => {
    const cleaned = input.replace(/\D/g, "");
    let formatted = "";

    if (cleaned.length > 0) {
      formatted = cleaned.slice(0, 2);
    }
    if (cleaned.length > 2) {
      formatted += "." + cleaned.slice(2, 4);
    }
    if (cleaned.length > 4) {
      formatted += "." + cleaned.slice(4, 8);
    }
    return formatted;
  };

  const handleDateChange = (formattedDate: string) => {
    const validation = validateBirthDate(formattedDate);
    setError(validation.error || null);
    setShowTooltip(!!validation.error);
    onChangeAction(formattedDate);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value);
    handleDateChange(formatted);
  };

  const cleanupTempInput = () => {
    if (tempInputRef.current && document.body.contains(tempInputRef.current)) {
      document.body.removeChild(tempInputRef.current);
    }
    tempInputRef.current = null;
  };

  const handleCalendarClick = () => {
    // Очищаем предыдущий временный инпут, если он есть
    cleanupTempInput();

    const tempInput = document.createElement("input");
    tempInput.type = "date";
    tempInput.max = new Date().toISOString().split("T")[0];
    tempInput.style.position = "absolute";
    tempInput.style.opacity = "0";
    tempInput.style.pointerEvents = "none";

    // Добавляем в body перед использованием
    document.body.appendChild(tempInput);
    tempInputRef.current = tempInput;

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (target.value) {
        const [year, month, day] = target.value.split("-");
        const formatted = `${day}.${month}.${year}`;
        handleDateChange(formatted);
      }

      cleanupTempInput();
    };

    const handleCancel = () => {
      cleanupTempInput();
    };

    tempInput.addEventListener("change", handleChange);
    tempInput.addEventListener("cancel", handleCancel);

    if (tempInput.showPicker) {
      tempInput.showPicker();
    } else {
      tempInput.click();
    }
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="text-base text-[#8f8f8f] block">
        Дата рождения
      </label>
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          placeholder="дд.мм.гггг"
          onChange={handleInputChange}
          className="w-65 h-10 py-2 px-4 text-main-text text-base border border-[#bfbfbf] rounded focus:border-[#70c05b] focus:shadow-(--shadow-button-default) focus:bg-white focus:outline-none caret-primary pr-8"
          maxLength={10}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleCalendarClick}
        >
          <Calendar />
        </button>
      </div>
      {showTooltip && error && <ToolTip text={error} />}
    </div>
  );
}
