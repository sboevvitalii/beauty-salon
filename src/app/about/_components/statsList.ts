import { getMasrersCount } from "@/src/utils/getMastersCount";
import { getServicesCount } from "@/src/utils/getServicesCount";
import { Award, Clock1, Sparkles, Users } from "lucide-react";

const startYear = 2013; // год начала опыта
const currentYear = new Date().getFullYear();
const experienceYears = (currentYear - startYear).toString();

const masterCount = getMasrersCount();
const servuceCount = getServicesCount();

export const statsList = [
  { value: experienceYears + "+", label: "лет опыта", icon: Clock1 },
  { value: "5000+", label: "довольных клиентов", icon: Users },
  { value: masterCount, label: "профессионалов", icon: Award },
  { value: servuceCount, label: "видов услуг", icon: Sparkles },
];
