import {
  AdIcon,
  Bath,
  BedDouble,
  Building2,
  DollarSign,
  Home,
  MapPin,
  Ruler,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PropertyInfoProps {
  property: {
    data:{
      city: string;
    area: string;
    rentPrice: number;
    bedrooms: number;
    bathrooms: number;
    isAvailable: boolean;
    category: {
      name: string;
    };
    }
  };
}


const infoItems = (property: PropertyInfoProps["property"]) => [
  {
    title: "Bedrooms",
    value: property?.data?.bedrooms,
    icon: BedDouble,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Bathrooms",
    value: property?.data?.bathrooms,
    icon: Bath,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Area",
    value: property?.data?.area,
    icon: Ruler,
    color: "bg-purple-100 text-purple-600",
  },
    {
      title: "Rent",
      value: `৳${property?.data?.rentPrice.toLocaleString()}/month`,
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
  {
    title: "Category",
    value: property?.data?.category?.name,
    icon: Building2,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "City",
    value: property?.data?.city,
    icon: MapPin,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function PropertyInfoLandlord({ property }: PropertyInfoProps) {
  
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Home className="h-5 w-5 text-primary" />
          Property Information
        </CardTitle>

        <Badge
          variant={property?.data?.isAvailable ? "default" : "destructive"}
          className="rounded-full px-3 py-1"
        >
          {property?.data?.isAvailable ? "Available" : "Unavailable"}
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {infoItems(property).map((item) => {
            const Icon = item?.icon;

            return (
              <div
                key={item?.title}
                className="group rounded-xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-xl p-3 ${item?.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <AdIcon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">
                      {item?.title}
                    </p>

                    <h3 className="truncate text-lg font-bold">{item.value}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
