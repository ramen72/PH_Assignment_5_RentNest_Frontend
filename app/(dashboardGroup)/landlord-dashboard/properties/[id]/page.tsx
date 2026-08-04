
import { getSinglePropertiesLandlord } from "@/app/(dashboardGroup)/_actions/landlordAction";
import LandlordCardLandlord from "../../_components/properties/LandlordCardLandlord";
import PropertyAmenitiesLandlord from "../../_components/properties/PropertyAmenitiesLandlord";
import PropertyDescriptionLandlord from "../../_components/properties/PropertyDescriptionLandlord";
import PropertyGalleryLandlord from "../../_components/properties/PropertyGalleryLandlord";
import PropertyHeaderLandlord from "../../_components/properties/PropertyHeaderLandlord";
import PropertyInfoLandlord from "../../_components/properties/PropertyInfoLandlord";
import PropertySidebarLandlord from "../../_components/properties/PropertySidebarLandlord";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const property = await getSinglePropertiesLandlord(id);
  
  
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <PropertyGalleryLandlord images={property?.data?.images} title={property?.data?.title} />

      <div className="mt-8">
        <PropertyHeaderLandlord property={property} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfoLandlord property={property} />

          <PropertyDescriptionLandlord description={property?.data?.description} />

          <PropertyAmenitiesLandlord amenities={property?.data?.amenities} />

          <LandlordCardLandlord landlord={property?.data?.landlord} />
        </div>

        <PropertySidebarLandlord property={property?.data} />
      </div>
    </div>
  );
}
