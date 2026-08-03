"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
  CircleCheckBig,
} from "lucide-react";
import { User } from "@/lib/types";
import EditProfileDialog from "./EditProfileDialog";

interface Props {
  user: User;
}

export default function ProfileDetails({ user }: Props) {
  
  return (
    <Card className="overflow-hidden border-0 shadow-xl">
      {/* Header */}
      <div className="relative -top-4 h-40 bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500">
        <div className="absolute -bottom-12 left-3">
          <div className="relative">
            <Avatar className="h-40 w-40 rounded-full border-4 border-background shadow-lg">
              <AvatarImage src={user?.profilePhoto} alt={user?.name} />
              <AvatarFallback>{user?.name.slice(0, 2)}</AvatarFallback>
            </Avatar>

            <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-green-500" />
          </div>
        </div>
          <div className="rounded-full absolute bottom-0 right-0 translate-y-1/2 cursor-pointer">
            <EditProfileDialog user={user} />
          </div>
      </div>

      <CardHeader className="pt-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className={`ml-4`}>
            <h2 className="text-2xl font-bold">{user?.name}</h2>

            <div className="mt-1 flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              <span>{user?.role}</span>
            </div>
          </div>

          <Badge
            className="w-fit bg-green-100 px-3 py-1 text-green-700 hover:bg-green-100"
            variant="secondary"
          >
            <CircleCheckBig className="mr-1 h-4 w-4" />
            {user?.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Email */}
        <div className="flex items-center gap-4 rounded-xl border p-4 transition-all hover:bg-muted">
          <div className="rounded-full bg-blue-100 p-3">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Email Address</p>

            <p className="truncate font-medium">{user?.email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 rounded-xl border p-4 transition-all hover:bg-muted">
          <div className="rounded-full bg-emerald-100 p-3">
            <Phone className="h-5 w-5 text-emerald-600" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Phone Number</p>

            <p className="font-medium">{user?.phone}</p>
          </div>
        </div>

        {/* Member */}
        <div className="flex items-center gap-4 rounded-xl border p-4">
          <div className="rounded-full bg-orange-100 p-3">
            <UserRound className="h-5 w-5 text-orange-600" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Account Type</p>

            <p className="font-medium">Verified user</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button asChild size="lg">
            <Link href={`tel:${user?.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <Link href={`mailto:${user?.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
