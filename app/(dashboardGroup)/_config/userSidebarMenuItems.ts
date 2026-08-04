import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Tenant Dashboard",
    href: "#/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Properties",
    href: "/dashboard/properties",
    icon: FileText,
  },
  {
    label: "My Requests",
    href: "/dashboard/rent-requests",
    icon: FileText,
  },
];
