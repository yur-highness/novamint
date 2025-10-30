import type { Metadata } from "next";
import { Lexend_Tera } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'
import Provider from "./provider";


const outfitFont = Lexend_Tera({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Novamint",
  description: "website minting made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={outfitFont.className}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
