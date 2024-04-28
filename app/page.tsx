import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  console.log(session)
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    MAIN
  </main>;
}