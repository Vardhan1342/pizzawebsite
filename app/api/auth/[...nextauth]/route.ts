import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

type provider={
    clientId : string,
    clientSecret : string
}

const handler=NextAuth({
    providers: [
        GoogleProvider({
          clientId : process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET} as provider
        ),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "email", type: "email", placeholder: "test@example.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
            
              const res = await fetch("/your/endpoint", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              if (res.ok && user) {
                return user
              }
              return null
            }
          })
      ]
})

export {handler as GET , handler as POST}