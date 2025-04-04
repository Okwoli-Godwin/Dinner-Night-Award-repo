"use client"

import type React from "react"
import { useState } from "react"
import axios, { type AxiosError } from "axios" // Import AxiosError type
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import styles from "./Ticket.module.css"
import img1 from "../assets/ticket1.jpg"
import img3 from "../assets/ticket3.jpg"
import img4 from "../assets/ticket4.jpg"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useNavigate } from "react-router-dom"

// Define a proper type for ticket options
interface TicketOption {
  title: string
  price: number
  ticketType: string
  image: string
}

// Define interface for API responses
interface PaymentResponse {
  authorizationUrl: string
  reference: string
  status?: string
  message?: string
}

interface VerificationResponse {
  status: string
  message?: string
  data?: Record<string, unknown>
}

// Define interface for form data
interface TicketFormData {
  name: string
  email: string
  ticketType: string
  amount: number
}

const ticketOptions: TicketOption[] = [
  { title: "Singles", price: 6000, ticketType: "singles", image: img1 },
  { title: "Couples", price: 10000, ticketType: "couples", image: img4 },
  { title: "VIP", price: 60000, ticketType: "vip", image: img3 },
  { title: "Table for 8", price: 100000, ticketType: "tableFor8", image: img3 },
]

const Ticket = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<TicketOption | null>(null)
  const [formData, setFormData] = useState<TicketFormData>({
    name: "",
    email: "",
    ticketType: "",
    amount: 0,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const openModal = (ticket: TicketOption) => {
    setSelectedTicket(ticket)
    setFormData({
      name: "",
      email: "",
      ticketType: ticket.ticketType,
      amount: ticket.price,
    })
    setError(null)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const verifyPayment = async (reference: string) => {
    try {
      console.log("Verifying payment for reference:", reference)

      const response = await axios.get<VerificationResponse>(
        `https://our-lady-database.onrender.com/api/verify-payment/${reference}`,
      )

      console.log("Payment verification response:", response.data)

      if (response.data.status === "success") {
        navigate(`/payment-confirmation?reference=${reference}`)
      } else {
        alert("Payment verification failed. Please try again.")
        navigate(`/payment-confirmation?reference=${reference}`)
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      console.error("Error verifying payment:", axiosError.response?.data?.message || axiosError.message)
      alert("Failed to verify payment. Please try again.")
      navigate(`/payment-confirmation?reference=${reference}`)
    }
  }

  const handleBuyTicket = async () => {
    if (!formData.name || !formData.email) {
      setError("Please fill in all fields.")
      return
    }

    if (!selectedTicket?.ticketType) {
      setError("Please select a valid ticket.")
      return
    }

    const ticketData: TicketFormData = {
      name: formData.name,
      email: formData.email,
      ticketType: formData.ticketType,
      amount: formData.amount,
    }

    setLoading(true)
    setError(null)

    try {
      console.log("Sending ticket data:", ticketData)

      const response = await axios.post<PaymentResponse>(
        "https://our-lady-database.onrender.com/api/buyTickets",
        ticketData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      console.log("Purchase response:", response.data)

      if (response.data.authorizationUrl) {
        window.location.href = response.data.authorizationUrl
        // Check payment status after redirection to the payment gateway
        verifyPayment(response.data.reference)
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      console.error("Error purchasing ticket:", axiosError)
      setError(axiosError.response?.data?.message || "Failed to initialize payment. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={styles.top_container}>
        <img src={img1 || "/placeholder.svg"} alt="Entertainment" className={styles.image} loading="lazy" />
        <div className={styles.wrapper}>
          <div className={styles.holder}>
            <h4 className={styles.h4}>Ticket</h4>
            <MdKeyboardDoubleArrowRight size={18} className={styles.icon} />
            <h2 className={styles.h2}>Get Your Ticket</h2>
          </div>
        </div>
      </div>

      <div className={styles.bottom_container}>
        <h2 className={styles.text}>Choose Your Tickets</h2>

        <div className={styles.content_holder}>
          {ticketOptions.map((ticket, index) => (
            <div key={index} className={styles.ticket}>
              <img
                src={ticket.image || "/placeholder.svg"}
                alt={ticket.title}
                className={styles.image2}
                loading="lazy"
              />
              <div className={styles.wrapper2}>
                <div className={styles.title_holder}>
                  <h3 className={styles.title}>{ticket.title}</h3>
                </div>

                <div className={styles.amount_holder}>
                  <h3 className={styles.amount}>₦{ticket.price.toLocaleString()}</h3>
                </div>
                <div className={styles.small_text_holder}>
                  <p className={styles.small_text}>Get everything a Conference pass</p>
                  <p className={styles.small_text}>Enjoy 2 days of inspiring talks</p>
                  <p className={styles.small_text}>Breakout sessions exploring topics</p>
                  <p className={styles.small_text}>Challenging topics, great food.</p>
                  <p className={styles.small_text}>Workshops with experts</p>
                </div>
                <Button className={styles.button} onClick={() => openModal(ticket)}>
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Your Details</DialogTitle>
            <DialogDescription>Please provide your information to purchase the ticket.</DialogDescription>
          </DialogHeader>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ticketType" className="text-right">
                Ticket Type
              </Label>
              <Input id="ticketType" value={selectedTicket?.title || ""} readOnly className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input id="amount" value={`₦${formData.amount.toLocaleString()}`} readOnly className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={closeModal} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleBuyTicket} disabled={loading}>
              {loading ? "Processing..." : "Proceed to Payment"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Ticket

