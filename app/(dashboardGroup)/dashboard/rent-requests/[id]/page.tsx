import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Calendar, Clock3, DollarSign, Info, Mail, MapPin, Phone } from "lucide-react";

export default async function RentRequestDetailsPage() {
  // const request = await getRentRequest(params.id)

  const request = {
            "id": "147854f3-4f66-4201-968a-8b6cc2c16dc2",
            "tenantId": "333cbc08-b181-4931-847a-acdfadcb2a57",
            "landlordId": "75552ead-8b8b-49d0-8c0c-2eddb5f41f38",
            "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
            "moveInDate": "2026-09-01T00:00:00.000Z",
            "rentalDuration": 12,
            "monthlyRent": 45000,
            "message": "Hi, I really love the property and would love to move in by September. I have a stable job and excellent references-2!",
            "status": "PENDING",
            "createdAt": "2026-07-30T04:12:36.653Z",
            "updatedAt": "2026-07-30T04:12:36.653Z",
            "tenant": {
                "name": "TENANT2",
                "email": "TENANT@gmail.com",
                "phone": "01234567802",
                "profilePhoto": "https://images.pexels.com/photos/37331347/pexels-photo-37331347.jpeg?_gl=1*1mb8d6g*_ga*MTcyMDQ0MDMzMi4xNzgyMDk5NzUw*_ga_8JE65Q40S6*czE3ODIwOTk3NDkkbzEkZzEkdDE3ODIwOTk3NzMkajM2JGwwJGgw",
                "status": "ACTIVE"
            },
            "landlord": {
                "name": "LANDLORD",
                "email": "LANDLORD@gmail.com",
                "phone": "01234567802",
                "profilePhoto": "https://images.pexels.com/photos/37331347/pexels-photo-37331347.jpeg?_gl=1*1mb8d6g*_ga*MTcyMDQ0MDMzMi4xNzgyMDk5NzUw*_ga_8JE65Q40S6*czE3ODIwOTk3NDkkbzEkZzEkdDE3ODIwOTk3NzMkajM2JGwwJGgw",
                "status": "ACTIVE"
            },
            "property": {
                "id": "147e4625-c489-4692-959f-0e04b2a7d217",
                "title": "Modern 3-Bedroom Apartment in Bashundhara R/A",
                "description": "A spacious, well-lit apartment featuring modern fittings, 24/7 security, and a beautiful balcony view.",
                "address": "Block D, Road 4, Bashundhara Residential Area",
                "city": "Khulna",
                "area": "1800 sqft",
                "rentPrice": 45000,
                "bedrooms": 3,
                "bathrooms": 3,
                "isAvailable": true,
                "landlordId": "75552ead-8b8b-49d0-8c0c-2eddb5f41f38",
                "categoryId": "67c79800-6f38-4539-845c-2fe2dc36c328",
                "createdAt": "2026-07-08T10:56:56.664Z",
                "updatedAt": "2026-07-08T10:56:56.664Z"
            }
        };

  return (
    <div className="space-y-6">

      {/* Property */}

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 lg:grid-cols-3">

            <img
              src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0"
              alt={request.property.title}
              className="h-72 w-full rounded-lg object-cover"
            />

            <div className="lg:col-span-2 space-y-4">

              <div>
                <h1 className="text-2xl font-bold">
                  {request.property.title}
                </h1>

                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  {request.property.address}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                <div>
                  <p className="text-muted-foreground">Rent</p>
                  <p className="font-semibold">
                    ${request.property.rentPrice}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">Bedrooms</p>
                  <p>{request.property.bedrooms}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Bathrooms</p>
                  <p>{request.property.bathrooms}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Area</p>
                  <p>{request.property.area}</p>
                </div>

              </div>

              <p className="text-muted-foreground">
                {request.property.description}
              </p>

            </div>

          </div>
        </CardContent>
      </Card>

      {/* Information */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Tenant */}

        <Card>

          <CardHeader>
            <CardTitle>Tenant Information</CardTitle>
          </CardHeader>

          <CardContent>

            <div className="flex items-center gap-4">

              <Avatar className="size-20">
                <AvatarImage src={request.tenant.profilePhoto} />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>

              <div>

                <h3 className="text-xl font-semibold">
                  {request.tenant.name}
                </h3>

                <div className="mt-2 space-y-2 text-sm">

                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    {request.tenant.email}
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="size-4" />
                    {request.tenant.phone}
                  </div>

                  <Badge>
                    {request.tenant.status}
                  </Badge>

                </div>

              </div>

            </div>

          </CardContent>

        </Card>

        {/* Request */}

        <Card>

          <CardHeader>
            <CardTitle>Rental Request</CardTitle>
          </CardHeader>

          {/* <CardContent className="space-y-5">

            <Info
              icon={<Badge />}
              label="Status"
              value={
                <Badge>
                  {request.status}
                </Badge>
              }
            />

            <Info
              icon={<Calendar className="size-4" />}
              label="Move In"
              value={new Date(request.moveInDate).toLocaleDateString()}
            />

            <Info
              icon={<Clock3 className="size-4" />}
              label="Duration"
              value={`${request.rentalDuration} Months`}
            />

            <Info
              icon={<DollarSign className="size-4" />}
              label="Monthly Rent"
              value={`$${request.monthlyRent}`}
            />

            <Info
              icon={<Calendar className="size-4" />}
              label="Requested At"
              value={new Date(request.createdAt).toLocaleString()}
            />

          </CardContent> */}

        </Card>

      </div>

      {/* Message */}

      <Card>

        <CardHeader>
          <CardTitle>Applicant Message</CardTitle>
        </CardHeader>

        <CardContent>

          <p className="leading-7 text-muted-foreground">
            {request.message}
          </p>

        </CardContent>

      </Card>

      {/* Actions */}

      {request.status === "PENDING" && (

        <div className="flex justify-end gap-3">

          <Button variant="destructive">
            Reject
          </Button>

          <Button>
            Approve
          </Button>

        </div>

      )}

    </div>
  );
}