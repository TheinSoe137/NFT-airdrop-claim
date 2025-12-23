'use client'
import { AlertTriangle, Shield } from "lucide-react";

const WarningBanner = () => {
  return (
    <div className="w-full max-w-md space-y-3">
      {/* Testnet Warning */}
      <div className="glass-card flex items-center gap-3 px-4 py-3 border-l-4 border-amber-500">
        <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
        <p className="text-sm font-medium text-amber-400 font-body">
          Sepolia ETH Testnet Only
        </p>
      </div>
      
      {/* Burner Wallet Recommendation */}
      <div className="glass-card flex items-center gap-3 px-4 py-3 border-l-4 border-primary">
        <Shield className="h-5 w-5 text-primary shrink-0" />
        <p className="text-sm font-medium text-primary font-body">
          Use a Burner Wallet for testing
        </p>
      </div>
    </div>
  );
};

export default WarningBanner;
