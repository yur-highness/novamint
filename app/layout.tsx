import type { Metadata } from "next";
import { Lexend_Tera } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'


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
      <body
        className={outfitFont.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
