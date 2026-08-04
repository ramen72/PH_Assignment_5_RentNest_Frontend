
import { getAllPropertyForAdmin } from "../../_actions/propertyActions";
import PropertyAdminView from "../_components/PropertyAdminView";

const page = async () => {
  const propertiesData = await getAllPropertyForAdmin();

  return (
    <>
      <PropertyAdminView propertiesData={propertiesData?.data} />
    </>
  );
};

export default page;
