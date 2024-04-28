import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Props {
    targetUserId: string;
  }
  
export default async function FollowButton({targetUserId}: Props) {
    const sessson = await getServerSession(authOptions);

    const currentUserId = await prisma.user.findUnique({
        where: {
            email: sessson?.user?.email!
        }
    }).then(user => user?.id!);

    const isFollowing = await prisma.follows.findFirst({
        where: {
                followerId: currentUserId,
                followingId: targetUserId
            }
    });

    return (
      <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
    );
  }