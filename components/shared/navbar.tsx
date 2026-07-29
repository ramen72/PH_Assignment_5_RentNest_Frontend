"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Boxes,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Info,
  Contact,
  Home,
  ServerIcon,
  NewspaperIcon,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { NavbarProps } from "@/lib/types";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: ServerIcon },
  { label: "Contact", href: "/contact", icon: Contact },
];

const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
];

export function Navbar({ user }: NavbarProps) {
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const handleUserMenuAction = async (action: string) => {
    if (action === "dashboard") {
      if (user.data?.role === "TENANT") {
        router.push("/dashboard");
      } else if (user?.data?.role === "LANDLORD") {
        router.push("/landlord-dashboard");
      } else if (user?.data?.role === "ADMIN") {
        router.push("/admin-dashboard");
      } else if (user?.data?.role === "SUPER_ADMIN") {
        router.push("/super-admin-dashboard");
      }
      return;
    }
    
    if (action === "profile") {
      if (user.data?.role === "TENANT") {
        router.push("/dashboard/profile");
      } else if (user?.data?.role === "LANDLORD") {
        router.push("/landlord-dashboard/profile");
      } else if (user?.data?.role === "ADMIN") {
        router.push("/admin-dashboard/profile");
      } else if (user?.data?.role === "SUPER_ADMIN") {
        router.push("/super-admin-dashboard/profile");
      }
      return;
    }
    
    if (action === "settings") {
      if (user.data?.role === "TENANT") {
        router.push("/dashboard/settings");
      } else if (user?.data?.role === "LANDLORD") {
        router.push("/landlord-dashboard/settings");
      } else if (user?.data?.role === "ADMIN") {
        router.push("/admin-dashboard/settings");
      } else if (user?.data?.role === "SUPER_ADMIN") {
        router.push("/super-admin-dashboard/settings");
      }
      return;
    }

    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Boxes className="size-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Acme Inc</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon!;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                  activeHref === item.href &&
                    "bg-accent text-accent-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side: user dropdown + mobile toggle */}
        <div className="flex items-center gap-2">
          {user?.success ? (
            <DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative size-9 rounded-full p-0"
                    aria-label="Open user menu"
                  >
                    <Avatar className="size-9">
                      {/* <AvatarImage src="/user-avatar.png" alt="Jane Doe" /> */}
                      <AvatarImage
                        src={
                          user.data?.profilePhoto ||
                          "/userAvatar.png"
                        }
                        alt={user?.data?.name || "User"}
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">
                        {user.data?.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.data?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.action}
                        onClick={() => handleUserMenuAction(item.action)}
                        className="cursor-pointer"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        <span>{item.label}</span>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={async () => {
                      await handleUserMenuAction("logout");
                    }}
                  >
                    <LogOut />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Jane Doe</span>
                      <span className="text-xs text-muted-foreground">
                        jane@acme.com
                      </span>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {userMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.action}
                        onClick={() => handleUserMenuAction(item.action)}
                        className="cursor-pointer"
                      >
                        <Icon className="w-4 h-4 mr-2 cursor-pointer" />
                        <span>{item.label}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={"/login"}>
              <Button className="cursor-pointer">Login</Button>
            </Link>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile nav links */}
      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveHref(item.href);
                setMobileOpen(false);
              }}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                activeHref === item.href && "bg-accent text-accent-foreground",
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
