import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";
import { getAllPublicProperties } from "@/app/(publicGroup)/_actions/propertiesActions";
import PropertyViewLandlord from "../_components/properties/PropertyViewLandlord";

export default async function Page() {
  const propertiesData = await getAllPublicProperties();
  
  return (
    <PropertyViewLandlord propertiesData={propertiesData?.data} />
  );
}
