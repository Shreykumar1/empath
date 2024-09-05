import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function Header() {
  const user = await currentUser();
  return (
    <header
      className="bg-base-200"
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Empath
        </a>
      </div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
        <p className="hidden md:block pt-3 pl-1">
          {user?.emailAddresses[0].emailAddress}
        </p>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Empath",
  description: "16 Personality with 20 questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
