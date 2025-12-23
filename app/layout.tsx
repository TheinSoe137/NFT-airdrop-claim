'useclient'
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css"; 
import {Providers} from "./provider";



const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});


export const metadata: Metadata = {
  title: "Claim NFT Airdrop",
  description: "Claim NFT Airdrop on Sepolia Eth with a small fee, Fullstack Dapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        <Providers>
          {children}
          
        </Providers>
      </body>
    </html>
  );
}