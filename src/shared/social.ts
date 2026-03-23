import { Instagram, Twitter } from "lucide-react";
import { VKIcon } from "../components/SVG/VK/VK";
import { WhatsApp } from "../components/SVG/WhatsApp";

export interface SocialProps {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  color: string;
}

export const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "VK",
    icon: VKIcon,
    href: "#",
    color: "hover:text-[#3282db]",
  },
  {
    name: "WhatsApp",
    icon: WhatsApp,
    href: "#",
    color: "hover:text-[#25D366]",
  },
];
