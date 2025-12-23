
import type { Metadata } from "next";
import NFTCard from "@/components/NFTCard";
import WalletButton from "@/components/WalletButton";
import ClaimButton from "@/components/ClaimButton";
import WarningBanner from "@/components/WarningBanners";


export const metadata: Metadata = {
  title: "Airdrop | Claim Your Exclusive NFT",
  description: "Claim your exclusive NFT airdrop on Sepolia testnet. Connect your wallet and participate in the drop.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-neon-cyan/20 blur-[100px] animate-pulse" />
        <div 
          className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-neon-purple/20 blur-[100px] animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-neon-pink/10 blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-foreground">Claim Your </span>
            <span className="neon-text text-primary">Airdrop</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
            Exclusive limited edition NFT drop. Connect your wallet and claim now.
          </p>
        </header>

        {/* Connect Wallet */}
        <WalletButton />

        {/* NFT Card */}
        <NFTCard
          title="Airdrop Claim Testing"
          subtitle="The first of its kind. A unique digital artifact from the void."
          price="0.001"
          currency="ETH"
        />

        {/* Claim Button */}
        <ClaimButton price="0.001" currency="Seoplia_ETH" />

        {/* Warnings */}
        <WarningBanner />

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="font-body text-xs text-muted-foreground/60">
            Powered by Web3 • Built with ♥
          </p>
        </footer>
      </div>
    </main>
  );
}