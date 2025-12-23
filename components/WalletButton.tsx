"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, LogOut } from "lucide-react";
import { useAccount, useDisconnect } from "wagmi";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";

const WalletButton = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const truncateAddress = (addr: string | undefined) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="flex items-center gap-2">
      {isConnected ? (
        <>
          {/* Show address and opens the RainbowKit account modal */}
          <Button variant="glass" onClick={openAccountModal} className="font-display">
            {truncateAddress(address)}
          </Button>
          
          {/* Explicit Disconnect Button */}
          <Button variant="ghost" size="icon" onClick={() => disconnect()}>
            <LogOut className="h-4 w-4 text-destructive" />
          </Button>
        </>
      ) : (
        <Button
          variant="neon"
          size="lg"
          onClick={openConnectModal}
          className="font-display min-w-[200px]"
        >
          <Wallet className="mr-2 h-5 w-5" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default WalletButton;