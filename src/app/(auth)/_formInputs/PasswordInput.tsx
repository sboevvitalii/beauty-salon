"use client";

import { ChangeEvent } from "react";
import { isPasswordValid } from "@/src/utils/validation/passwordValid";
import VisibilityToggle from "@/src/shared/SVG/VisibilityToggle";
import ToolTip from "./ToolTip";

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  togglePasswordVisibilityAction: () => void;
  showRequirements?: boolean;
  compareWith?: string;
  inputClass?: string;
}

const PasswordInput = ({
  id,
  label,
  value,
  onChangeAction,
  togglePasswordVisibilityAction,
  showPassword,
  showRequirements,
  compareWith,
  inputClass = "",
}: PasswordInputProps) => {
  const shouldShowTooltip = () => {
    if (showRequirements) {
      return value.length > 0 && !isPasswordValid(value);
    }

    if (compareWith) {
      return (
        value.length > 0 && compareWith.length > 0 && value !== compareWith
      );
    }
    return false;
  };

  const getTooltipText = () => {
    if (showRequirements) {
      return "Пароль должен содержать: 6+ символов на латинице и цифры";
    }

    return "Пароли пока не совпадают";
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="text-base text-[#8f8f8f] block">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChangeAction}
          className={`w-65 h-10 py-2 px-4 text-main-text text-base border border-[#bfbfbf] rounded focus:border-[#70c05b] focus:shadow-(--shadow-button-default) focus:bg-white focus:outline-none caret-primary ${inputClass}`}
          autoComplete="off"
          readOnly
          onFocus={(e) => e.target.removeAttribute("readonly")}
        />
        <button
          type="button"
          onClick={togglePasswordVisibilityAction}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <VisibilityToggle showPassword={showPassword} />
        </button>
      </div>
      {shouldShowTooltip() && <ToolTip text={getTooltipText()} />}
    </div>
  );
};

export default PasswordInput;
