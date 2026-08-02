import PropertyGallery from "../../_components/properties/PropertyGallery";
import PropertyHeader from "../../_components/properties/PropertyHeader";
import PropertyInfo from "../../_components/properties/PropertyInfo";
import PropertyAmenities from "../../_components/properties/PropertyAmenities";
import PropertyDescription from "../../_components/properties/PropertyDescription";
import PropertySidebar from "../../_components/properties/PropertySidebar";
import LandlordCard from "../../_components/properties/LandlordCard";
import { getSinglePublicProperties } from "../../_actions/propertiesActions";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const property = await getSinglePublicProperties(id);
  // console.log(property);

  return (
    <div className="container mx-auto max-w-7xl py-10">
      <PropertyGallery images={property?.data?.images} title={property?.data?.title} />

      <div className="mt-8">
        <PropertyHeader property={property} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfo property={property} />

          <PropertyDescription description={property?.data?.description} />

          <PropertyAmenities amenities={property?.data?.amenities} />

          <LandlordCard landlord={property?.data?.landlord} />
        </div>

        <PropertySidebar property={property?.data} />
      </div>
    </div>
  );
}
