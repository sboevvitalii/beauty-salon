"use client";

import { ChangeEvent } from "react";

interface EmailInputProps {
  value?: string;
  onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ value, onChangeAction }: EmailInputProps) => {
  return (
    <div>
      <label htmlFor="email" className="text-base text-[#8f8f8f] block">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        value={value}
        onChange={onChangeAction}
        className="w-65 h-10 py-2 px-4 text-main-text text-base border border-[#bfbfbf] rounded focus:border-[#70c05b] focus:shadow-(--shadow-button-default) focus:bg-white focus:outline-none caret-primary"
      />
    </div>
  );
};

export default EmailInput;
