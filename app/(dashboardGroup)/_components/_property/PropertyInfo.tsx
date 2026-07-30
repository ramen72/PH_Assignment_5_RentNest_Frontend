"use client";

import {
  Bath,
  BedDouble,
  Building2,
  DollarSign,
  MapPin,
  Ruler,
  BadgeCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PropertyInfoProps {
  property: {
    title: string;
    description: string;
    city: string;
    address: string;
    area: string;
    rentPrice: number;
    bedrooms: number;
    bathrooms: number;
    isAvailable: boolean;
    category: {
      name: string;
    };
  };
}

export default function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <Card className="border-0 shadow-lg rounded-3xl">
      <CardContent className="space-y-8 p-8">
        {/* Header */}
        <div className="space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                {property.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant={property.isAvailable ? "default" : "destructive"}
                  className="rounded-full px-4 py-1"
                >
                  <BadgeCheck className="mr-1 h-4 w-4" />

                  {property.isAvailable ? "Available" : "Not Available"}
                </Badge>

                <Badge variant="secondary" className="rounded-full px-4 py-1">
                  <Building2 className="mr-1 h-4 w-4" />
                  {property.category.name}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{property.address}</span>
                </div>

                <span>•</span>

                <span>{property.city}</span>
              </div>
            </div>

            <div className="rounded-2xl border bg-muted/40 px-6 py-4 text-center">
              <p className="text-sm text-muted-foreground">Monthly Rent</p>

              <h2 className="mt-1 text-3xl font-bold text-primary">
                ৳{property.rentPrice.toLocaleString()}
              </h2>

              <p className="text-sm text-muted-foreground">/ month</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Property Highlights */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="rounded-2xl border bg-muted/30 p-5 transition hover:bg-muted/60">
            <BedDouble className="mb-3 h-7 w-7 text-primary" />

            <p className="text-sm text-muted-foreground">Bedrooms</p>

            <h3 className="mt-1 text-xl font-bold">{property.bedrooms}</h3>
          </div>

          <div className="rounded-2xl border bg-muted/30 p-5 transition hover:bg-muted/60">
            <Bath className="mb-3 h-7 w-7 text-primary" />

            <p className="text-sm text-muted-foreground">Bathrooms</p>

            <h3 className="mt-1 text-xl font-bold">{property.bathrooms}</h3>
          </div>

          <div className="rounded-2xl border bg-muted/30 p-5 transition hover:bg-muted/60">
            <Ruler className="mb-3 h-7 w-7 text-primary" />

            <p className="text-sm text-muted-foreground">Area</p>

            <h3 className="mt-1 text-xl font-bold">{property.area}</h3>
          </div>

          <div className="rounded-2xl border bg-muted/30 p-5 transition hover:bg-muted/60">
            <DollarSign className="mb-3 h-7 w-7 text-primary" />

            <p className="text-sm text-muted-foreground">Rent</p>

            <h3 className="mt-1 text-xl font-bold">
              ৳{property.rentPrice.toLocaleString()}
            </h3>
          </div>
        </div>

        <Separator />

        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About this property</h2>

          <p className="text-base leading-8 text-muted-foreground">
            {property.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
