import { getSinglePublicPropertiesTenant } from "@/app/(dashboardGroup)/_actions/tenantActions";
import PropertyGalleryTenant from "../../_components/PropertyGalleryTenant";
import PropertyHeaderTenant from "../../_components/PropertyHeaderTenant";
import PropertyInfoTenant from "../../_components/PropertyInfoTenant";
import PropertyDescriptionTenant from "../../_components/PropertyDescriptionTenant";
import PropertyAmenitiesTenant from "../../_components/PropertyAmenitiesTenant";
import LandlordCardTenant from "../../_components/LandlordCardTenant";
import PropertySidebarTenant from "../../_components/PropertySidebarTenant";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const property = await getSinglePublicPropertiesTenant(id);
  
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <PropertyGalleryTenant images={property?.data?.images} title={property?.data?.title} />

      <div className="mt-8">
        <PropertyHeaderTenant property={property} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfoTenant property={property} />

          <PropertyDescriptionTenant description={property?.data?.description} />

          <PropertyAmenitiesTenant amenities={property?.data?.amenities} />

          <LandlordCardTenant landlord={property?.data?.landlord} />
        </div>

        <PropertySidebarTenant property={property?.data} />
      </div>
    </div>
  );
}
