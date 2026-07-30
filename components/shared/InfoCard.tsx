import Image from "next/image";
import { Mail, Phone, ShieldCheck, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Landlord = {
  name: string;
  email: string;
  phone: string;
  role: string;
  profilePhoto: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
};

interface LandlordInfoProps {
  userInfo: Landlord;
}

export default function InfoCard({ userInfo }: LandlordInfoProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>
          <span className="tracking-wider">{userInfo?.role} INFO</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Profile */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Avatar className="h-28 w-28 border">
            <AvatarImage src={userInfo.profilePhoto} alt={userInfo.name} />
            <AvatarFallback>
              {userInfo.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">{userInfo.name}</h2>

            <Badge
              variant={userInfo.status === "ACTIVE" ? "default" : "secondary"}
              className="w-fit"
            >
              {userInfo.status}
            </Badge>
          </div>
        </div>

        {/* Details */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-lg border p-4">
            <Mail className="h-5 w-5 text-muted-foreground" />

            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium break-all">{userInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border p-4">
            <Phone className="h-5 w-5 text-muted-foreground" />

            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{userInfo.phone}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
