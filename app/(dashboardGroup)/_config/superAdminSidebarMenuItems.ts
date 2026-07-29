import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const SUPER_ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Super Admin Dashboard",
    href: "/superAdmin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/super-admin-dashboard/my-posts",
    icon: FileText,
  },
];
