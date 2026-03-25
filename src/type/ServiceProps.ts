export interface ServiceProps {
  id: string;
  href: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
}
