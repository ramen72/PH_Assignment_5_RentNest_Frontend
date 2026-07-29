import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";

const HomePage = async () => {
  const user = await getMe();

  return (
    <>
      <h1>Root Page</h1>
      <Button size={"xs"}>click me</Button>
      <div className="flex justify-center items-center">
        <h2 className="text-9xl font-black">Home Page</h2>
      </div>
    </>
  );
};
export default HomePage;
