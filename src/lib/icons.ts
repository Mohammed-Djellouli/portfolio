import { 
  Code, 
  Globe, 
  Users, 
  Heart, 
  Mail, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Download,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

export const iconMap = {
  Code,
  Globe,
  Users,
  Heart,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Download,
  Github,
  Linkedin,
  Twitter
};

export function getIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || Code;
}
