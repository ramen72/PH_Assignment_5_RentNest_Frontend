import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  BedDouble,
  Bath,
  Building2,
  MapPin,
  Ruler,
  CircleCheck,
  CircleX,
  CalendarDays,
  DollarSign,
} from "lucide-react";

interface Property {
  data: {
    title: string;
  city: string;
  address: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  rentPrice: number;
  isAvailable: boolean;
  createdAt: string;
  category: {
    name: string;
  };
  }
}

interface PropertyHeaderProps {
  property: Property;
}

export default function PropertyHeaderAmin({ property }: PropertyHeaderProps) {
  
  return (
    <section className="space-y-6">
      {/* Title & Status */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            {property?.data?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              <Building2 className="mr-1 h-4 w-4" />
              {property?.data?.category?.name}
            </Badge>

            {property?.data?.isAvailable ? (
              <Badge className="bg-green-600 px-3 py-1 text-sm hover:bg-green-700">
                <CircleCheck className="mr-1 h-4 w-4" />
                Available
              </Badge>
            ) : (
              <Badge variant="destructive" className="px-3 py-1 text-sm">
                <CircleX className="mr-1 h-4 w-4" />
                Not Available
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>
              {property?.data?.address}, {property?.data?.city}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Monthly Rent</p>

          <div className="mt-2 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />

            <h2 className="text-3xl font-bold text-primary">
              ৳{property?.data?.rentPrice.toLocaleString()}
            </h2>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">per month</p>
        </div>
      </div>

      <Separator />

      {/* Property Highlights */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <div className="rounded-lg border bg-card p-4">
          <BedDouble className="mb-2 h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">Bedrooms</p>
          <h3 className="text-xl font-bold">{property?.data?.bedrooms}</h3>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <Bath className="mb-2 h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">Bathrooms</p>
          <h3 className="text-xl font-bold">{property?.data?.bathrooms}</h3>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <Ruler className="mb-2 h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">Area</p>
          <h3 className="text-xl font-bold">{property?.data?.area}</h3>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <Building2 className="mb-2 h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">Category</p>
          <h3 className="text-xl font-bold">{property?.data?.category?.name}</h3>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <CalendarDays className="mb-2 h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">Listed On</p>
          <h3 className="text-base font-semibold">
            {new Date(property?.data?.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </h3>
        </div>
      </div>
    </section>
  );
}
