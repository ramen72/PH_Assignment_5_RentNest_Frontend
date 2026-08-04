"use server";
import { getSingleRentalRequest } from "@/app/(dashboardGroup)/_actions/getMyRentalRequests";
import InfoCard from "@/components/shared/InfoCard";
import LandlordInfo from "@/components/shared/InfoCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock3,
  DollarSign,
  Info,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import PaymentForm from "../../_components/PaymentForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentRequestDetailsPage({ params }: PageProps) {
  const { id } = await params;
  
  const response = await getSingleRentalRequest(id);
  
  
  if (!response.success) {
    return <p>Rental Request Not Found</p>;
  }

  const request = response.data;
  const image =
    response?.data?.property?.images?.[0]?.imageUrl ??
    "https://img.magnific.com/free-vector/house-home-building-cartoon-vector-icon-illustration-building-landmark-icon-isolated-flat_138676-15023.jpg";

  return (
    <div className="space-y-6">
      {/* Actions */}
      {request?.status === "PENDING" && (
        <div className="flex justify-end items-center gap-3 mt-3 mr-3">
          
          <Button variant="destructive">CANCEL</Button>
          {
            response?.data?.tenant?.subscription?.status !== "ACTIVE" ?
          <PaymentForm/> :
          <div className="bg-green-700 py-1 px-2 rounded-2xl text-white flex justify-end items-center">
            <ShieldCheck width={20} height={20}/>
            <span className=" uppercase"> Subscripted</span>

          </div> 
          }

          {/* <Button>Approve</Button> */}
        </div>
      )}
      {/* Property */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <img
              src={image}
              alt={request.property.title}
              className="h-72 w-full rounded-lg object-cover"
            />

            <div className="lg:col-span-2 space-y-4">
              <div>
                <h1 className="text-2xl font-bold">
                  {request.property.title}{" "}
                </h1>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  {request.property.address}
                </p>
              </div>
              {/* <Badge>{request.status}</Badge> */}
              <Badge>{request?.status === "APPROVED" &&request?.tenant?.subscription?.status === "ACTIVE"? "Complete" : request.status}</Badge>
              

              <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
                <div>
                  <p className="text-muted-foreground">Rent</p>
                  <p className="font-semibold">${request.property.rentPrice}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Type</p>
                  <p>{request?.property?.category?.name}</p>
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
        <InfoCard userInfo={request?.tenant} />

        {/* Request */}
        <InfoCard userInfo={request?.landlord} />
      </div>

      {/* Message */}

      <Card>
        <CardHeader>
          <CardTitle>Applicant Message</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="leading-7 text-muted-foreground">{request.message}</p>
        </CardContent>
      </Card>
    </div>
  );
}
