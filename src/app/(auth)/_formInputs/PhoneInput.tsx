"use client";

import { formatPhoneNumber } from "@/src/utils/validation/formatPhoneNumber";
import { ChangeEvent, useState } from "react";

interface PhoneInputProps {
  value: string;
  onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput = ({ value, onChangeAction }: PhoneInputProps) => {
  const [internalValue, setInternalValue] = useState(
    value || "+7 (___) ___-__-__",
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setInternalValue(formatted);

    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: formatted },
    } as ChangeEvent<HTMLInputElement>;
    onChangeAction(syntheticEvent);
  };

  return (
    <div>
      <label htmlFor="phoneNumber" className="text-base text-[#8f8f8f] block">
        Телефон
      </label>
      <input
        id="phoneNumber"
        type="text"
        value={internalValue}
        placeholder=""
        onChange={handleChange}
        className="w-65 h-10 py-2 px-4 text-main-text text-base border border-[#bfbfbf] rounded focus:border-[#70c05b] focus:bg-white focus:outline-none caret-primary"
        onFocus={(e) => {
          if (!e.target.value) {
            e.target.value = "+7";
            setInternalValue("+7");
            e.target.setSelectionRange(2, 2);
          }
        }}
      />
    </div>
  );
};

export default PhoneInput;
