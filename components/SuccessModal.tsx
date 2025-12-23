'use client'

type Props = {
  txHash: `0x${string}`
  onClose: () => void
}

export default function SuccessModal({ txHash, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[90%] max-w-md rounded-2xl bg-zinc-900/90 border border-white/10 p-6 shadow-xl animate-fade-in">
        <h2 className="text-xl font-semibold text-white mb-2">
          NFT Claimed 🎉
        </h2>

        <p className="text-sm text-zinc-400 mb-4">
          Your NFT has been successfully transferred to your wallet.
        </p>

        <a
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          target="_blank"
          className="text-cyan-400 text-sm underline break-all"
        >
          View on Etherscan
        </a>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-cyan-500 py-2 text-black font-medium hover:bg-cyan-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}
