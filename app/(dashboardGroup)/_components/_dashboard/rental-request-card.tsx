import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, DollarSign, Home } from "lucide-react";

export default function RentalRequestCard({ request }: any) {
  return (
    <Card className="overflow-hidden">
      {/* <Image
        src={request.property.image}
        alt="Property Image"
        width={500}
        height={300}
        className="h-48 w-full object-cover"
      /> */}

      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{request.property.title}</h3>

          <Badge>{request.status}</Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          {request.property.city}, {request.property.address}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Tenant: {request.tenant.name}
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />$
            {request.monthlyRent.toLocaleString()}/month
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Move In: {new Date(request.moveInDate).toLocaleDateString()}
          </div>

          <div>
            <span className="font-medium">Duration:</span>{" "}
            {request.rentalDuration} months
          </div>
        </div>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {request.message}
        </p>
      </CardContent>
    </Card>
  );
}
