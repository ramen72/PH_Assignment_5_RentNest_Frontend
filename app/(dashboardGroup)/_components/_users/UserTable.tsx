"use client";

import Image from "next/image";
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Ban,
  Shield,
  UserRound,
  Phone,
  Mail,
} from "lucide-react";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePhoto: string | null;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BANNED";
  createdAt: string;
}

interface Props {
  users: User[];
}

const roleColor = {
  ADMIN: "bg-red-100 text-red-700",
  LANDLORD: "bg-blue-100 text-blue-700",
  TENANT: "bg-green-100 text-green-700",
};

const statusColor = {
  ACTIVE: "bg-emerald-100 text-emerald-700",
  BANNED: "bg-rose-100 text-rose-700",
};

export default function UserTable({ users }: Props) {
  if (!users.length) {
    return (
      <div className="rounded-lg border py-20 text-center">
        <UserRound className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
        <h3 className="text-lg font-semibold">No Users Found</h3>
        <p className="text-sm text-muted-foreground">
          There are no users to display.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="w-15 text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="transition-colors hover:bg-muted/40"
            >
              {/* User */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11">
                    <AvatarImage src={user.profilePhoto || ""} />

                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
              </TableCell>

              {/* Contact */}
              <TableCell>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    {user.email}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    {user.phone}
                  </div>
                </div>
              </TableCell>

              {/* Role */}
              <TableCell>
                <Badge
                  className={roleColor[user.role]}
                  variant="secondary"
                >
                  <Shield className="mr-1 h-3 w-3" />
                  {user.role}
                </Badge>
              </TableCell>

              {/* Status */}
              <TableCell>
                <Badge
                  className={statusColor[user.status]}
                  variant="secondary"
                >
                  {user.status}
                </Badge>
              </TableCell>

              {/* Joined */}
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Ban className="mr-2 h-4 w-4" />
                      Ban User
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-red-600 focus:text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}