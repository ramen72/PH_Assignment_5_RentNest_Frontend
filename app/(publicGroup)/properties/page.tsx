import PropertyView from "../_components/properties/PropertyView";
import { getAllPublicProperties } from "./../_actions/propertiesActions";

const page = async () => {
  const propertiesData = await getAllPublicProperties();

  return (
    <>
      <PropertyView propertiesData={propertiesData?.data} />
    </>
  );
};

export default page;
