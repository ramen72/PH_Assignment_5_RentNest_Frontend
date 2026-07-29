import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/service/getMe";

const AuthGroupLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getMe();

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
};
export default AuthGroupLayout;
