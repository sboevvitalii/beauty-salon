"use client";

import { getMasterNameById } from "@/src/lib/masters/client";
import { EntryFormData } from "@/src/type/EntryFormDataProps";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ThreeStepProps {
  step: number;
  formData: EntryFormData;
}

export default function ThreeStep({ step, formData }: ThreeStepProps) {
  const [masterName, setMasterName] = useState("");

  useEffect(() => {
    const fetchMasterName = async () => {
      if (formData.masterId) {
        console.log(
          "masterId:",
          formData.masterId,
          "тип:",
          typeof formData.masterId,
        );

        const name = await getMasterNameById(String(formData.masterId));
        console.log("полученное имя:", name);

        setMasterName(name);
      }
    };

    fetchMasterName();
  }, [formData.masterId]);

  return (
    <>
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Проверьте данные
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-green-muted/20">
              <span className="text-text-main/60">Имя:</span>
              <span className="font-medium">{formData.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-green-muted/20">
              <span className="text-text-main/60">Телефон:</span>
              <span className="font-medium">{formData.phone}</span>
            </div>
            {formData.email && (
              <div className="flex justify-between py-2 border-b border-green-muted/20">
                <span className="text-text-main/60">Email:</span>
                <span className="font-medium">{formData.email}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-green-muted/20">
              <span className="text-text-main/60">Услуга:</span>
              <span className="font-medium">{formData.service}</span>
            </div>
            {formData.masterId && (
              <div className="flex justify-between py-2 border-b border-green-muted/20">
                <span className="text-text-main/60">Мастер:</span>
                <span className="font-medium">{masterName || "Не выбран"}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-green-muted/20">
              <span className="text-text-main/60">Дата:</span>
              <span className="font-medium">{formData.date}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-green-muted/20">
              <span className="text-text-main/60">Время:</span>
              <span className="font-medium">{formData.time}</span>
            </div>
            {formData.comment && (
              <div className="py-2 border-b border-green-muted/20">
                <span className="text-text-main/60">Комментарий:</span>
                <p className="mt-1 text-text-main">{formData.comment}</p>
              </div>
            )}
          </div>

          <div className="bg-bg-section rounded-lg p-4">
            <p className="text-sm text-text-main/70">
              Нажимая кнопку Подтвердить запись, вы соглашаетесь с
              <Link href="/privacy" className="text-primary hover:underline">
                {" "}
                политикой обработки персональных данных
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
