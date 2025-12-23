import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */reactStrictMode: false,
  serverExternalPackages: ["pino", "thread-stream"],
  transpilePackages: [
    "@reown/appkit", 
    "@reown/appkit-adapter-wagmi", 
    "@walletconnect/modal",
    "@walletconnect/ethereum-provider"
  ],
};

export default nextConfig;
