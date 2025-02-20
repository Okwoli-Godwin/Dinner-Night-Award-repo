"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import styles from "./Ticket.module.css"
import img1 from "../assets/ticket1.jpg"
import img3 from "../assets/ticket3.jpg"
import img4 from "../assets/ticket4.jpg"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useNavigate } from "react-router-dom"

const ticketOptions = [
  { title: "Singles", price: 6000, ticketType: "singles", image: img1 },
  { title: "Couples", price: 10000, ticketType: "couples", image: img4 },
  { title: "VIP", price: 60000, ticketType: "vip", image: img3 },
  { title: "Table for 8", price: 100000, ticketType: "table", image: img3 },
]

const Ticket = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "",
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const openModal = (ticket: any) => {
    setSelectedTicket(ticket)
    setFormData({ name: "", email: "", ticketType: ticket.ticketType })
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
  
      const response = await axios.get(`https://our-lady-database.onrender.com/api/verify-payment/${reference}`)
  
      console.log("Payment verification response:", response.data)
  
      if (response.data.status === "success") {
        navigate(`/payment-confirmation?reference=${reference}`)
      } else {
        alert("Payment verification failed. Please try again.")
        navigate(`/payment-confirmation?reference=${reference}`)
      }
    } catch (error: any) {
      console.error("Error verifying payment:", error.response?.data || error.message)
      alert("Failed to verify payment. Please try again.")
      navigate(`/payment-confirmation?reference=${reference}`)
    }
  }
  
  

  const handleBuyTicket = async () => {
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields.")
      return
    }

    if (!selectedTicket?.ticketType) {
      alert("Please select a valid ticket.")
      return
    }

    const ticketData = {
      ...formData,
      ticketType: selectedTicket?.ticketType,
    }

    setLoading(true)
    try {
      const response = await axios.post("https://our-lady-database.onrender.com/api/buyTickets", ticketData)

      if (response.data.authorizationUrl) {
        window.location.href = response.data.authorizationUrl
        // Check payment status after redirection to the payment gateway
        verifyPayment(response.data.reference)
      }
    } catch (error) {
      console.error("Error purchasing ticket:", error)
      alert("Failed to initialize payment. Please try again.")
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
              <Input id="ticketType" name="ticketType" value={formData.ticketType} readOnly className="col-span-3" />
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
