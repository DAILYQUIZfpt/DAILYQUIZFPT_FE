import { authOptions } from "@/app/api/auth/[...nextauth]/_options";
import { getServerSession } from "next-auth";
const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="h-full">{session ? "loggedin" : "not logged in"}</main>
  );
};

export default DashboardPage;
