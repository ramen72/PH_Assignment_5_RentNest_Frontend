
import { getAllPropertyForAdmin } from "../../_actions/propertyActions";
import PropertyAdminView from "../_components/PropertyAdminView";

const page = async () => {
  const propertiesData = await getAllPropertyForAdmin();
  console.log(propertiesData)

  return (
    <>
      <PropertyAdminView propertiesData={propertiesData?.data} />
    </>
  );
};

export default page;
