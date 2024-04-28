import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
        adapter: PrismaAdapter(prisma),
        providers: [
            Google({ 
            clientId: process.env.GOOGLE_CLIENT_ID! as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string
        }),
        Github({
            clientId: process.env.GITHUB_ID! as string,
            clientSecret: process.env.GITHUB_SECRET! as string,
        }),
    ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}