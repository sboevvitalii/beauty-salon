import { ChangeEvent } from "react";

interface PersonInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PersonInput = ({ id, label, value, onChange }: PersonInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-base text-[#8f8f8f] block">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className="w-65 h-10 py-2 px-4 text-main-text text-base border border-[#bfbfbf] rounded focus:border-[#70c05b] focus:shadow-(--shadow-button-default) focus:bg-white focus:outline-none caret-primary"
      />
    </div>
  );
};

export default PersonInput;
