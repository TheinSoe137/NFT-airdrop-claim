'use client'
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import nftPreview from "@/public/nft-preview.png"; 

interface NFTCardProps {
  title: string;
  subtitle: string;
  price: string;
  currency: string;
}

const NFTCard = ({ title, subtitle, price, currency }: NFTCardProps) => {
  return (
    <div className="glass-card neon-border p-1 animate-float">
      <div className="relative overflow-hidden rounded-xl">
        {/* NFT Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={nftPreview}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Price tag */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <Badge variant={"neon"} className="font-display">
                {price} {currency}
              </Badge>
              <Badge variant={"info"} className="font-body">
                Limited Edition
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Card content */}
        <div className="p-5 space-y-2">
          <h3 className="font-display text-xl font-bold text-foreground neon-text">
            {title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;