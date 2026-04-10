"use client";

import { ChangeEvent } from "react";
import { InputMask } from "@react-input/mask";

interface PhoneInputProps {
  value: string;
  onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput = ({ value, onChangeAction }: PhoneInputProps) => {
  return (
    <div>
      <label htmlFor="phoneNumber" className="text-base text-[#8f8f8f] block">
        Телефон
      </label>
      <InputMask
        mask="+7 (___) ___-__-__"
        replacement={{ _: /\d/ }}
        id="phoneNumber"
        type="text"
        value={value}
        placeholder="+7 (___) ___-__-__"
        onChange={onChangeAction}
        className="w-65 h-10 py-2 px-4 text-main-text text-base border border-[#bfbfbf] rounded focus:border-[#70c05b] focus:shadow-(--shadow-button-default) focus:bg-white focus:outline-none caret-primary"
        showMask={true}
        onFocus={(e) => {
          if (e.target.value === "+7") {
            e.target.setSelectionRange(2, 2);
          }
        }}
      />
    </div>
  );
};

export default PhoneInput;
