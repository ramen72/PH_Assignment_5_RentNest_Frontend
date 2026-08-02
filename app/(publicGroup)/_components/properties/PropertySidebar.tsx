"use client";

import Link from "next/link";
import {
  BadgeCheck,
  Bath,
  BedDouble,
  Building2,
  DollarSign,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  Square,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createRentalRequest } from "@/app/(dashboardGroup)/_actions/createRentalRequest";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface PropertySidebarProps {
  property: {
    id: string;
    rentPrice: number;
    bedrooms: number;
    bathrooms: number;
    area: string;
    city: string;
    isAvailable: boolean;
    landlord: {
      name: string;
      email: string;
      phone: string;
    };
  };
}
const initialState = {
  success: false,
  message: "",
};

export default function PropertySidebar({ property }: PropertySidebarProps) {
  // const handleClick = async () => {
  //   const payload = {
  //     propertyId: property?.id,
  //     moveInDate: "2026-09-01T00:00:00.000Z",
  //     rentalDuration: 12,
  //     message:
  //       "Hi, I really love the property and would love to move in by September. I have a stable job and excellent references!",
  //   };

  //   const res = await createRentalRequest(payload);

  //   console.log(res);
  // };
  console.log(property);
  const [state, formAction, isPending] = useActionState(
    createRentalRequest,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <aside className="sticky top-24">
      <Card className="overflow-hidden border-0 shadow-xl">
        {/* Header */}

        <CardHeader className="space-y-4 bg-linear-to-r from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Rent</p>

              <h2 className="mt-1 text-4xl font-bold text-primary">
                ৳{property?.rentPrice.toLocaleString()}
              </h2>

              <p className="text-muted-foreground">/ month</p>
            </div>

            <Badge
              variant={property?.isAvailable ? "default" : "destructive"}
              className="px-4 py-1"
            >
              {property?.isAvailable ? (
                <>
                  <BadgeCheck className="mr-1 h-4 w-4" />
                  Available
                </>
              ) : (
                "Unavailable"
              )}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 p-6">
          {/* Property Summary */}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BedDouble className="h-5 w-5" />
                Bedrooms
              </div>

              <span className="font-semibold">{property?.bedrooms}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Bath className="h-5 w-5" />
                Bathrooms
              </div>

              <span className="font-semibold">{property?.bathrooms}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Square className="h-5 w-5" />
                Area
              </div>

              <span className="font-semibold">{property?.area}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                City
              </div>
              <span className="font-semibold">{property?.city}</span>
            </div>
          </div>

          {/* CTA */}

          <form action={formAction}>
            <input type="hidden" name="propertyId" value={property.id} />

            <input
              type="hidden"
              name="moveInDate"
              value="2026-09-01T00:00:00.000Z"
            />

            <input type="hidden" name="rentalDuration" value="12" />

            <input
              type="hidden"
              name="message"
              value="Hi, I really love the property and would love to move in by September. I have a stable job and excellent references!"
            />

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full cursor-pointer"
            >
              {isPending ? "Sending..." : "Request Rental"}
            </Button>
          </form>

          <Button size="lg" variant="outline" className="w-full">
            Schedule Visit
          </Button>

          {/* Contact */}

          <div className="rounded-xl border bg-muted/30 p-4">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Building2 className="h-5 w-5" />
              Contact Landlord
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <Link
                  href={`tel:${property?.landlord?.phone}`}
                  className="hover:text-primary"
                >
                  {property?.landlord?.phone}
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <Link
                  href={`mailto:${property?.landlord?.email}`}
                  className="break-all hover:text-primary"
                >
                  {property?.landlord?.email}
                </Link>
              </div>
            </div>
          </div>

          {/* Actions */}

          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary">
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>

            <Button variant="secondary">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Notice */}

          <div className="rounded-lg bg-primary/5 p-4 text-sm text-muted-foreground">
            <div className="mb-2 flex items-center gap-2 font-medium text-primary">
              <DollarSign className="h-4 w-4" />
              Rental Information
            </div>

            {/* <p>
              Monthly rent is{" "}
              <span className="font-semibold text-foreground">
                ৳{property?.rentPrice.toLocaleString()}
              </span>
              . Utilities and service charges may not be included.
            </p> */}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
