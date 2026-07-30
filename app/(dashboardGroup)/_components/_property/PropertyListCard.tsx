import Image from "next/image";
import Link from "next/link";

import { Bath, Bed, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertyListCard({ property }: any) {
  return (
    <Card className="overflow-hidden transition hover:shadow-lg">
      <div className="grid md:grid-cols-[320px_1fr]">
        <div className="relative h-64 md:h-full">
          <Image
            src={property.images?.[0]?.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="flex flex-col justify-between p-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <Badge>{property.category.name}</Badge>

              <Badge variant={property.isAvailable ? "default" : "destructive"}>
                {property.isAvailable ? "Available" : "Rented"}
              </Badge>
            </div>

            <h2 className="mb-3 text-2xl font-bold">{property.title}</h2>

            <div className="mb-3 flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />

              {property.city}
            </div>

            <p className="line-clamp-3 text-muted-foreground">
              {property.description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Bed size={18} />
                {property.bedrooms} Bedrooms
              </div>

              <div className="flex items-center gap-2">
                <Bath size={18} />
                {property.bathrooms} Bathrooms
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-2xl font-bold text-primary">
                ৳{property.rentPrice}
              </span>

              <Link href={`/properties/${property.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
