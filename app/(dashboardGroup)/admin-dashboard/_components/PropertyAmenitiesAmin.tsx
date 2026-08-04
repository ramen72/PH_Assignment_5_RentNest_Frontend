import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Shield,
  Dumbbell,
  Car,
  Wifi,
  Zap,
  Droplets,
  Wind,
  Trees,
  Building2,
  Sparkles,
} from "lucide-react";

interface Amenity {
  propertyId: string;
  amenityId: string;
  amenity: {
    name: string;
  };
}

interface PropertyAmenitiesProps {
  amenities: Amenity[];
}

const amenityIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Gym: Dumbbell,
  "Generator Backup": Zap,
  Generator: Zap,
  Parking: Car,
  Wifi: Wifi,
  Security: Shield,
  "24/7 Security": Shield,
  Water: Droplets,
  Elevator: Building2,
  Lift: Building2,
  Garden: Trees,
  AC: Wind,
  "Air Conditioning": Wind,
  Intercom: CheckCircle2,
  Interco: CheckCircle2,
};

export default function PropertyAmenitiesAmin({
  amenities,
}: PropertyAmenitiesProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5 text-primary" />
            Amenities
          </CardTitle>

          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {amenities?.length} Available
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        {amenities?.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities?.map((item) => {
              const Icon = amenityIcons[item.amenity.name] || CheckCircle2;

              return (
                <div
                  key={item.amenityId}
                  className="group flex items-center gap-3 rounded-xl border bg-muted/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 hover:shadow-md"
                >
                  <div className="rounded-full bg-primary/10 p-2 text-primary transition-all group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="font-medium text-sm">
                    {item.amenity.name}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
            <CheckCircle2 className="mb-3 h-10 w-10 text-muted-foreground" />

            <h3 className="font-semibold text-lg">No Amenities Available</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              This property doesn't have any listed amenities yet.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
