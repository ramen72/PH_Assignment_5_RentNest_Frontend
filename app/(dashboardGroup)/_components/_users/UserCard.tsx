"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Eye,
  Mail,
  MoreVertical,
  Phone,
  Shield,
  User,
} from "lucide-react";

import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePhoto: string | null;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BANNED";
  createdAt: string;
}

interface UserCardProps {
  user: UserData;
}

export default function UserCard({ user }: UserCardProps) {
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const roleColor = {
    ADMIN: "bg-red-100 text-red-700 border-red-200",
    LANDLORD: "bg-blue-100 text-blue-700 border-blue-200",
    TENANT: "bg-green-100 text-green-700 border-green-200",
  };

  const statusColor = {
    ACTIVE: "bg-emerald-100 text-emerald-700 border-emerald-200",
    BANNED: "bg-rose-100 text-rose-700 border-rose-200",
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Cover */}
      <div className="relative -top-4 h-24 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-3 top-3 h-8 w-8 rounded-full"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`#/admin-dashboard/users/${user.id}`}>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>Edit User</DropdownMenuItem>
            <DropdownMenuItem>Change Status</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
            <AvatarImage src={user.profilePhoto || ""} />

            <AvatarFallback className="text-lg font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <CardContent className="pt-14">
        {/* Name */}
        <div className="space-y-1 text-center">
          <h3 className="line-clamp-1 text-lg font-bold">
            {user.name}
          </h3>

          <div className="flex items-center justify-center gap-2">
            <Badge className={roleColor[user.role]}>
              <Shield className="mr-1 h-3 w-3" />
              {user.role}
            </Badge>

            <Badge className={statusColor[user.status]}>
              {user.status}
            </Badge>
          </div>
        </div>

        {/* Information */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0 text-primary" />

            <p className="truncate">{user.email}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 shrink-0 text-primary" />

            <p>{user.phone}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 shrink-0 text-primary" />

            <p>
              Joined{" "}
              {format(new Date(user.createdAt), "dd MMM yyyy")}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3">
        <Button asChild variant="outline" className="w-full">
          <Link href={`#/admin-dashboard/users/${user.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </Link>
        </Button>

        <Button className="w-full">
          <User className="mr-2 h-4 w-4" />
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}