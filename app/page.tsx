import { SignInButton } from "@/components/ui/buttons";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session  = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
    // return <>You must <SignInButton /></>
    
  }

  return (
    <main className="h-screen p-24">
      
    </main>
  )
}
