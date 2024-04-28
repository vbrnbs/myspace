'use client';

import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";


interface Props {
    targetUserId: string;
    isFollowing: boolean;
    
}

export default function FollowClient({targetUserId, isFollowing}: Props) {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching || isPending;

    const follow = async () => {
        setIsFetching(true);
        const res = await fetch(`/api/follow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                targetUserId
            })
        });
        
        setIsFetching(false);
        console.log(res);

        startTransition(() => {
            router.reload();
        });
    }

    const unfollow = async () => {
        setIsFetching(true);
        const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
        });
        
        setIsFetching(false);
        startTransition(() => {
            router.reload();
        });
    }
    if (isFollowing) {
        return (
            <Button onClick={unfollow}
            >{'Unfollow'}</Button>
        )
    } else {
        return (
            <Button onClick={follow}
            >{'Follow'}</Button>
        )
    }

  
    return (
    <div>
      
    </div>
  )
}

