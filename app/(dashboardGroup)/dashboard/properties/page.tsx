import { getAllPublicPropertiesTenant } from "../../_actions/tenantActions";
import PropertyViewTenant from "../_components/PropertyViewTenant";

const page = async () => {
  const propertiesData = await getAllPublicPropertiesTenant();

  return (
    <>
      <PropertyViewTenant propertiesData={propertiesData?.data} />
    </>
  );
};

export default page;
