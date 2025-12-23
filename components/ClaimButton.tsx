'use client'

import { useState, useEffect } from 'react'
import { parseEther } from 'viem'
import {
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi'

import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { PAYMINT_ABI, PAYMINT_ADDRESS } from '@/lib/contract'
import { useMounted } from '@/hooks/useMounted'
import SuccessModal from './SuccessModal'

interface ClaimButtonProps {
  price: string
  currency: string
}

const ClaimButton = ({ price, currency }: ClaimButtonProps) => {
  const mounted = useMounted()
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const { writeContract, isPending } = useWriteContract()
  const { isLoading, isSuccess, isError } =
    useWaitForTransactionReceipt({
      hash: txHash ?? undefined,
    })

  useEffect(() => {
    if (isSuccess && txHash) {
      setShowSuccess(true)

      toast.success('NFT claimed successfully!', {
        id: 'claim-tx',
        description: 'Your NFT will appear in your wallet shortly.',
      })
    }

    if (isError) {
      toast.error('Transaction reverted on-chain')
    }
  }, [isSuccess, isError, txHash])

  if (!mounted) return null

  const handleClaim = () => {
    writeContract(
      {
        address: PAYMINT_ADDRESS,
        abi: PAYMINT_ABI,
        functionName: 'payAndClaim',
        value: parseEther(price),
      },
      {
        onSuccess: (hash) => {
          setTxHash(hash)
          toast.loading('Transaction submitted...', {
            id: 'claim-tx',
          })
        },
        onError: (error) => {
          toast.error('Transaction failed', {
            description: error.message,
          })
        },
      }
    )
  }

  const disabled = isPending || isLoading

  return (
    <>
      <Button
        variant="default"
        size="xl"
        onClick={handleClaim}
        disabled={disabled}
        className="font-display text-sm w-full max-w-xs group"
      >
        {disabled ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Claim Fee – {price} {currency}
          </>
        )}
      </Button>

      {showSuccess && txHash && (
        <SuccessModal
          txHash={txHash}
          onClose={() => {
            setShowSuccess(false)
            setTxHash(null)
          }}
        />
      )}
    </>
  )
}

export default ClaimButton
