"use client";
// 👆🏼 TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it.
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
