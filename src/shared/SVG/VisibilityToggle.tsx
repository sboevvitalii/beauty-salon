import { Eye, EyeOff } from "lucide-react";

export default function VisibilityToggle({
  showPassword,
}: {
  showPassword: boolean;
}) {
  return <>{showPassword ? <Eye /> : <EyeOff />}</>;
}
