"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Camera,
  Loader2,
  Mail,
  Phone,
  Shield,
  User2,
} from "lucide-react";

import { User } from "@/lib/types";
import { updateLandlordProfile } from "../../_actions/profileAction";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Props {
  user: User;
}

const initialState = {
  success: false,
  message: "",
};

export default function EditProfileDialog({ user }: Props) {
  
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [watchProfilePhoto, setWatchProfilePhoto] = useState(
    user.profilePhoto || "/userAvatar.png"
  );

  const [state, formAction, isPending] = useActionState(
    updateLandlordProfile,
    initialState
  );
console.log(state);
  useEffect(() => {
    if (!state) return;
    if (!state.success) {
      toast.error(state.message || "Profile failed...!");
    }

    if (state.success) {
      setOpen(false);
      router.refresh();
    }
    
    if (state.success) {
      toast.success(state.message || "Profile updated successfully!");
    }

  }, [state, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="absolute bottom-2 right-2 cursor-pointer"
          size="sm"
        >
          <Camera className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>

          <DialogDescription>
            Update your personal information.
          </DialogDescription>
        </DialogHeader>

        <form
          action={formAction}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-28 w-28 border-4">
              <AvatarImage src={watchProfilePhoto} />

              <AvatarFallback>
                {user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <Badge>
              {user.role}
            </Badge>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Name */}

            <div>
              <Label htmlFor="name">
                Name
              </Label>

              <div className="relative mt-2">
                <User2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="name"
                  name="name"
                  defaultValue={user.name}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <Label htmlFor="phone">
                Phone
              </Label>

              <div className="relative mt-2">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="phone"
                  name="phone"
                  defaultValue={user.phone}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <Label>
                Email
              </Label>

              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  value={user.email}
                  disabled
                  className="pl-10"
                />
              </div>
            </div>
                        {/* Role */}

            <div>
              <Label htmlFor="role">
                Role
              </Label>

              <div className="relative mt-2">
                <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="role"
                  value={user.role}
                  disabled
                  className="pl-10"
                />
              </div>
            </div>

            {/* Profile Photo */}

            <div className="md:col-span-2">
              <Label htmlFor="profilePhoto">
                Profile Photo URL
              </Label>

              <Input
                id="profilePhoto"
                name="profilePhoto"
                defaultValue={user.profilePhoto}
                disabled={isPending}
                className="mt-2"
                onChange={(e) =>
                  setWatchProfilePhoto(
                    e.target.value.trim() || "/userAvatar.png"
                  )
                }
              />
            </div>

            {/* Hidden Fields */}


            <input
              type="hidden"
              name="activeStatus"
              value={user.status}
            />
          </div>

          {/* Footer Buttons */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isPending}
            >
              {isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}

              {isPending
                ? "Updating..."
                : "Update Profile"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
// ======================================================