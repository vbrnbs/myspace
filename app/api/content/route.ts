const posts = [
    {
        title: 'First Post',
        slug: 'first-post',
        content: 'This is the first post',
    },
    {
        title: 'Second Post',
        slug: 'second-post',
        content: 'This is the second post',
    },
    {
        title: 'Third Post',
        slug: 'third-post',
        content: 'This is the third post',
    },
    {
        title: 'Fourth Post',
        slug: 'fourth-post',
        content: 'This is the fourth post',
    },
    {
        title: 'Fifth Post',
        slug: 'fifth-post',
        content: 'This is the fifth post',
    },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();
    return NextResponse.json(posts);
}