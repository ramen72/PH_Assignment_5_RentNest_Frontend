

import PropertyView from "@/app/(publicGroup)/_components/properties/PropertyView";
import { getAllPropertyForAdmin } from "../../_actions/propertyActions";

const page = async () => {
  const propertiesData = await getAllPropertyForAdmin();
  console.log(propertiesData)

  return (
    <>
    <h1>All Properties</h1>
      <PropertyView propertiesData={propertiesData?.data} />
    </>
  );
};

export default page;
