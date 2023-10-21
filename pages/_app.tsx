import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { AuthContextProvider } from "@/context/context"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  children,
}: AppProps) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}