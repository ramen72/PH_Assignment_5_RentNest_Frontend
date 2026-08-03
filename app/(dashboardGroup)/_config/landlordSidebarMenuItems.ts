import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Landlord Dashboard",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Properties",
    href: "/landlord-dashboard/properties",
    icon: FileText,
  },
  {
    label: "Incoming Rent Requests",
    href: "/landlord-dashboard/rent-requests",
    icon: FileText,
  },
];
