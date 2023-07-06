"use client"

import { useState } from "react"
import { Loader2, MailCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ContactBubble } from "@/components/contact-bubble"

export default function IndexPage() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, firstName, lastName }),
      })
      if (response.ok) {
        console.log("Form data submitted successfully")
        // Reset form fields
        setEmail("")
        setFirstName("")
        setLastName("")
        setSubmitted(true)
      } else {
        const error = await response.json()
        setError(error.message)
        console.log("Form data submission failed", error)
      }
    } catch (error) {
      setError("Error submitting form data:")
      console.error("Error submitting form data:", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center justify-center gap-2">
        <span className="text-6xl">📬</span>
        {!submitted ? (
          <form className="mt-8" onSubmit={handleSubmit}>
            <h1 className="text-mb my-4 text-center font-extrabold leading-tight tracking-tighter md:text-4xl">
              Subscribe to our tech updates.
            </h1>
            <div>
              <div className="flex flex-col md:flex-row">
                <div className="mb-4 md:mr-4">
                  <label htmlFor="firstName" className="mb-1 block">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    className="rounded-md border border-gray-300 px-4 py-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 md:ml-4">
                  <label htmlFor="lastName" className="mb-1 block">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    className="rounded-md border border-gray-300 px-4 py-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <label htmlFor="email" className="mb-1 block">
                  Your Email address <sup className="text-red-600">*</sup>
                </label>
                <Input
                  type="email"
                  id="email"
                  className="rounded-md border border-gray-300  py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              className="w-auto bg-[#5721CC]"
              type="submit"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              SIGN ME UP!
            </Button>
            <p className="my-2  text-xs leading-tight tracking-tighter md:text-sm">
              View newsletter{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                archive.
              </a>
            </p>
          </form>
        ) : (
          <>
            <div className=" flex rounded bg-green-100 px-4 py-2 font-bold text-green-500">
              <span>
                <MailCheck />
              </span>
              <p className="pl-4">
                Thank you for subscribing to our newsletter!
              </p>
            </div>
            <p className="my-8  text-xs leading-tight tracking-tighter md:text-sm">
              View newsletter{" "}
              <a
                href="#"
      
                className="text-blue-500 hover:text-blue-700"
              >
                archive.
              </a>
            </p>
          </>
        )}
      </div>
      {/* <div className="fixed bottom-0 right-0  mb-8 mr-4 sm:mb-16">
        <ContactBubble />
      </div> */}
    </section>
  )
}
