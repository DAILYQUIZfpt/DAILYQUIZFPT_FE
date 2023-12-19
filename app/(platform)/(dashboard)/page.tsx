import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="h-full">{session ? "loggedin" : "not logged in"}</main>
  );
};

export default DashboardPage;
