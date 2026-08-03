"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dumbbell,
  ShieldCheck,
  Car,
  Wifi,
  Waves,
  Wind,
  Zap,
  Phone,
  Droplets,
  Trees,
  DoorOpen,
  CookingPot,
  ParkingCircle,
  CheckCircle2,
} from "lucide-react";

interface Amenity {
  propertyId: string;
  amenityId: string;
  amenity: {
    id: string;
    name: string;
    createdAt: string;
  };
}

interface AmenitiesProps {
  amenities: Amenity[];
}

const amenityIcons: Record<string, React.ElementType> = {
  Gym: Dumbbell,
  "Generator Backup": Zap,
  Generator: Zap,
  Intercom: Phone,
  Interco: Phone,
  Parking: ParkingCircle,
  Wifi: Wifi,
  Security: ShieldCheck,
  Elevator: DoorOpen,
  Lift: DoorOpen,
  Swimming: Waves,
  Pool: Waves,
  AC: Wind,
  Garden: Trees,
  Water: Droplets,
  Kitchen: CookingPot,
  Garage: Car,
};

export default function Amenities({ amenities }: AmenitiesProps) {
  
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Amenities</CardTitle>
      </CardHeader>

      <CardContent>
        {amenities.length === 0 ? (
          <div className="flex h-28 items-center justify-center rounded-xl border border-dashed">
            <p className="text-sm text-muted-foreground">
              No amenities available.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((item) => {
              const Icon = amenityIcons[item.amenity.name] || CheckCircle2;

              return (
                <div
                  key={item.amenityId}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    bg-background
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/10
                      text-primary
                      transition-colors
                      group-hover:bg-primary
                      group-hover:text-primary-foreground
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-semibold">{item.amenity.name}</p>

                    <p className="text-sm text-muted-foreground">
                      Included with this property
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
