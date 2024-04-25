import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function  Users()  {
  
  const users =  await prisma.user.findMany();
  return (
    <div className="w-64">
      {users.map((user) => {
        return (
          <UserCard key={user.id} {...user}/>
        )
      })
      }
    </div>
  )
}


