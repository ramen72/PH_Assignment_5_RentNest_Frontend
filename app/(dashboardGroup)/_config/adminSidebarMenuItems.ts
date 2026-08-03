import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Admin Dashboard",
    href: "#/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "All Properties",
    href: "/admin-dashboard/properties",
    icon: FileText,
  },
  {
    label: "All Rental Requests",
    href: "/admin-dashboard/rent-requests",
    icon: FileText,
  },
  {
    label: "All Users",
    href: "/admin-dashboard/users",
    icon: FileText,
  },
];
