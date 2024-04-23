import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID! as string,
            clientSecret: process.env.GITHUB_SECRET! as string,
        }),
    ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}