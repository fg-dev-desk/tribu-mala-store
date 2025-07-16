"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2 } from "lucide-react"
import { useCart } from "@/context/cart-context"

interface OrderDetails {
  orderId: string
  customerEmail: string
  paymentStatus: string
  shippingDetails: any
}

export default function SuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const { clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(true)
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  // Verify the session was completed and get order details
  useEffect(() => {
    if (!sessionId) {
      router.push("/")
      return
    }

    async function verifySession() {
      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`)
        const data = await response.json()

        if (data.success) {
          setOrderDetails({
            orderId: data.orderId,
            customerEmail: data.customerEmail,
            paymentStatus: data.paymentStatus,
            shippingDetails: data.shippingDetails,
          })

          // Clear the cart after successful payment
          clearCart()
        } else {
          // Handle payment not completed
          console.error("Payment not completed:", data.message)
        }
      } catch (error) {
        console.error("Error verifying session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    verifySession()
  }, [sessionId, router, clearCart])

  // Redirect to home after 15 seconds
  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        router.push("/")
      }, 15000)

      return () => clearTimeout(timeout)
    }
  }, [isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-dark-800 p-8 rounded-lg text-center">
          <Loader2 className="w-16 h-16 text-white mx-auto mb-4 animate-spin" />
          <h1 className="text-2xl font-bold mb-2">Verifying your order...</h1>
          <p className="text-gray-400 mb-6">Please wait while we confirm your payment and process your order.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-dark-800 p-8 rounded-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Successful!</h1>

        {orderDetails && (
          <div className="text-left mb-6 bg-dark-700 p-4 rounded-md">
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Order ID:</span> {orderDetails.orderId.substring(0, 16)}...
            </p>
            {orderDetails.customerEmail && (
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Email:</span> {orderDetails.customerEmail}
              </p>
            )}
            <p className="text-gray-300">
              <span className="font-semibold">Status:</span> <span className="text-green-500 font-medium">Paid</span>
            </p>
          </div>
        )}

        <p className="text-gray-400 mb-6">
          Thank you for your purchase. We've received your order and will process it shortly.
        </p>
        <p className="text-gray-400 mb-6">A confirmation email has been sent to your email address.</p>
        <Button onClick={() => router.push("/")} className="w-full">
          Return to Shop
        </Button>
      </div>
    </div>
  )
}
