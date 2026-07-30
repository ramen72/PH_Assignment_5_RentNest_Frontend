import Image from "next/image";
import Link from "next/link";

import { Bath, Bed, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertyCard({ property }: any) {
  //   console.log(property.images);
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60">
        <Badge className="absolute left-3 top-3">
          {property.category.name}
        </Badge>
      </div>

      <CardContent className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-semibold">
            {property.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />

            {property.city}
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {property.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Bed size={18} />
              {property.bedrooms}
            </div>

            <div className="flex items-center gap-1">
              <Bath size={18} />
              {property.bathrooms}
            </div>
          </div>

          <div className="font-bold text-primary">৳{property.rentPrice}</div>
        </div>

        <Link href={`/properties/${property.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
