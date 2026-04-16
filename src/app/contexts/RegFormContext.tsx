"use client";

import { initialRegFormData } from "@/src/constans/regFormData";
import { regFormDataProps } from "@/src/type/regFormData";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type RegFormContextType = {
  regFormData: regFormDataProps;
  setRegFormData: Dispatch<SetStateAction<regFormDataProps>>;
  resetRegForm: () => void;
};

const RegFormContext = createContext<RegFormContextType>({
  regFormData: initialRegFormData,
  setRegFormData: () => {},
  resetRegForm: () => {},
});

export const RegFormProvider = ({ children }: { children: ReactNode }) => {
  const [regFormData, setRegFormData] =
    useState<regFormDataProps>(initialRegFormData);
  const resetRegForm = () => {
    setRegFormData(initialRegFormData);
  };

  return (
    <RegFormContext.Provider
      value={{ regFormData, setRegFormData, resetRegForm }}
    >
      {children}
    </RegFormContext.Provider>
  );
};

export const useRegFormContext = () => useContext(RegFormContext);
