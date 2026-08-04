
import { getSinglePublicProperties } from "@/app/(publicGroup)/_actions/propertiesActions";
import PropertyHeaderAmin from "../../_components/PropertyHeaderAmin";
import PropertyGalleryAmin from "../../_components/PropertyGalleryAmin";
import PropertyInfoAmin from "../../_components/PropertyInfoAmin";
import PropertyDescriptionAmin from "../../_components/PropertyDescriptionAmin";
import PropertyAmenitiesAmin from "../../_components/PropertyAmenitiesAmin";
import LandlordCardAmin from "../../_components/LandlordCardAmin";
import PropertySidebarAmin from "../../_components/PropertySidebarAmin";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const property = await getSinglePublicProperties(id);
  
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <PropertyGalleryAmin images={property?.data?.images} title={property?.data?.title} />

      <div className="mt-8">
        <PropertyHeaderAmin property={property} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfoAmin property={property} />

          <PropertyDescriptionAmin description={property?.data?.description} />

          <PropertyAmenitiesAmin amenities={property?.data?.amenities} />

          <LandlordCardAmin landlord={property?.data?.landlord} />
        </div>

        <PropertySidebarAmin property={property?.data} />
      </div>
    </div>
  );
}
