"use client"
import { useState } from "react"
import { CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { BRAND_CONTACT, ENQUIRY_TOPICS } from "../data/aboutData"
import { RevealFromBottom, StaggerGroup, StaggerItem } from "./ScrollReveal"

interface ConversionCTASectionProps {
  selectedTopic: string
  onTopicChange: (topic: string) => void
}

interface EnquiryFormState {
  name: string
  email: string
  phone: string
  message: string
}

export function ConversionCTASection({
  selectedTopic,
  onTopicChange,
}: ConversionCTASectionProps) {
  const [form, setForm] = useState<EnquiryFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const clearFeedback = () => {
    if (status === "error" || status === "success") {
      setStatus("idle")
      setErrorMsg("")
    }
  }

  const handleField = (field: keyof EnquiryFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    clearFeedback()
  }

  const handleTopicChange = (topic: string) => {
    onTopicChange(topic)
    clearFeedback()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedName = form.name.trim()
    const trimmedEmail = form.email.trim()
    const trimmedMessage = form.message.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (trimmedName.length < 2) {
      setStatus("error")
      setErrorMsg("Please enter your name so we know how to address you.")
      return
    }
    if (!emailPattern.test(trimmedEmail)) {
      setStatus("error")
      setErrorMsg("Please provide a valid email address so our team can reply.")
      return
    }
    if (trimmedMessage.length < 10) {
      setStatus("error")
      setErrorMsg(
        "Please include a brief message (at least 10 characters) describing your enquiry."
      )
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          topic: selectedTopic || ENQUIRY_TOPICS[0],
        }),
      })
      const result: unknown = await response.json()

      if (!response.ok) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "message" in result &&
          typeof result.message === "string"
            ? result.message
            : "Unable to send your enquiry. Please try again."
        throw new Error(message)
      }

      setStatus("success")
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again."
      )
    }
  }

  return (
    <section
      id="contact-cta"
      aria-labelledby="conversion-cta-heading"
      className="bg-gradient-to-br from-[#1A3150] via-[#213C5C] to-[#162842] py-16 text-[#FFFEFA] sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Conversion Copy & Verified Contact Details */}
          <div className="lg:col-span-5">
            <RevealFromBottom distance={32}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#C6B993] uppercase">
                Start a Conversation
              </p>
              <h2
                id="conversion-cta-heading"
                className="font-display mt-3 text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-extrabold tracking-[-0.035em] text-balance text-[#FFFEFA]"
              >
                Let&apos;s Make Life Better,{" "}
                <span className="text-[#C6B993]">Together.</span>
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#FFFEFA]/85">
                Whether you are exploring practical guidance for yourself,
                reaching out on behalf of a loved one, or interested in
                community volunteering and partnerships, our UK Branch team is
                ready to listen.
              </p>
            </RevealFromBottom>

            <StaggerGroup className="mt-8 space-y-5 border-t border-[#FFFEFA]/15 pt-7">
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#162842] text-[#C6B993]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-[#DBCEAC] uppercase">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${BRAND_CONTACT.email}`}
                      className="mt-0.5 block text-sm font-semibold text-[#FFFEFA] underline decoration-[#C6B993]/50 underline-offset-4 transition-colors hover:text-[#C6B993]"
                    >
                      {BRAND_CONTACT.email}
                    </a>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#162842] text-[#C6B993]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-[#DBCEAC] uppercase">
                      Call Us
                    </p>
                    <a
                      href={`tel:${BRAND_CONTACT.phone.replace(/\s+/g, "")}`}
                      className="mt-0.5 block text-sm font-semibold text-[#FFFEFA] underline decoration-[#C6B993]/50 underline-offset-4 transition-colors hover:text-[#C6B993]"
                    >
                      {BRAND_CONTACT.phone}
                    </a>
                  </div>
                </div>
              </StaggerItem>

              {/* <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#162842] text-[#C6B993]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-[#DBCEAC] uppercase">
                      Branch Coverage
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[#FFFEFA]/90">
                      {BRAND_CONTACT.location}
                    </p>
                  </div>
                </div>
              </StaggerItem> */}
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#162842] text-[#C6B993]">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-[#DBCEAC] uppercase">
                      Send an enquiry
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[#FFFEFA]/90">
                      Use the secure form on this page
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#162842] text-[#C6B993]">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-[#DBCEAC] uppercase">
                      Response Time
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[#FFFEFA]/90">
                      We aim to respond thoughtfully as soon as we can.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>

          {/* Right: Validated Enquiry Form */}
          <RevealFromBottom distance={44} delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-lg border border-[#DBCEAC]/40 bg-[#FEFDFA] p-6 text-[#17263d] shadow-xl sm:p-9"
            >
              <div className="border-b border-[#e5dfd2] pb-5">
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#B66D50] uppercase">
                  Get In Touch
                </p>
                <h3 className="font-display mt-1 text-2xl font-extrabold tracking-[-0.025em] text-[#1A3150]">
                  How can we help?
                </h3>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs font-bold tracking-[0.1em] text-[#1A3150] uppercase"
                  >
                    Your name <span className="text-[#B66D50]">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => handleField("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2 block w-full rounded border border-[#d6cfc0] bg-[#FFFEFA] px-4 py-3 text-sm text-[#17263d] transition-colors placeholder:text-[#627285]/75 focus:border-[#1A3150]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-bold tracking-[0.1em] text-[#1A3150] uppercase"
                    >
                      Email address <span className="text-[#B66D50]">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => handleField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 block w-full rounded border border-[#d6cfc0] bg-[#FFFEFA] px-4 py-3 text-sm text-[#17263d] transition-colors placeholder:text-[#627285]/75 focus:border-[#1A3150]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-bold tracking-[0.1em] text-[#1A3150] uppercase"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      maxLength={30}
                      value={form.phone}
                      onChange={(e) => handleField("phone", e.target.value)}
                      placeholder="Your UK phone number"
                      className="mt-2 block w-full rounded border border-[#d6cfc0] bg-[#FFFEFA] px-4 py-3 text-sm text-[#17263d] transition-colors placeholder:text-[#627285]/75 focus:border-[#1A3150]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-topic"
                    className="block text-xs font-bold tracking-[0.1em] text-[#1A3150] uppercase"
                  >
                    What is your enquiry about?
                  </label>
                  <select
                    id="enquiry-topic"
                    value={selectedTopic || ENQUIRY_TOPICS[0]}
                    onChange={(e) => handleTopicChange(e.target.value)}
                    className="mt-2 block w-full rounded border border-[#d6cfc0] bg-[#FFFEFA] px-4 py-3 text-sm text-[#17263d] transition-colors focus:border-[#1A3150]"
                  >
                    {ENQUIRY_TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-bold tracking-[0.1em] text-[#1A3150] uppercase"
                  >
                    Your message <span className="text-[#B66D50]">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleField("message", e.target.value)}
                    placeholder="Tell us how we may be able to help..."
                    className="mt-2 block w-full rounded border border-[#d6cfc0] bg-[#FFFEFA] px-4 py-3 text-sm text-[#17263d] transition-colors placeholder:text-[#627285]/75 focus:border-[#1A3150]"
                  />
                </div>

                <p className="text-xs leading-relaxed text-[#627285]">
                  Please do not include bank details, passwords, or sensitive
                  medical information in this form. No application or release
                  fees are ever charged.
                </p>

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded bg-[#162842] px-6 py-3 text-sm font-bold text-[#FFFEFA] transition-colors duration-150 hover:bg-[#1A3150] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
                >
                  <span>
                    {status === "submitting"
                      ? "Sending enquiry…"
                      : "Send enquiry"}
                  </span>
                  <Send className="h-4 w-4 text-[#C6B993]" aria-hidden="true" />
                </motion.button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success-banner"
                      role="status"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 rounded border border-[#C6B993] bg-[#f5f2eb] p-4 text-sm text-[#1A3150]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#B66D50]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-bold">Thank you for reaching out.</p>
                        <p className="mt-1 text-xs leading-relaxed text-[#4a5a6f]">
                          Your enquiry has been sent to our team. You may also
                          contact our UK Branch directly at{" "}
                          <a
                            href={`mailto:${BRAND_CONTACT.email}`}
                            className="font-semibold text-[#1A3150] underline"
                          >
                            {BRAND_CONTACT.email}
                          </a>{" "}
                          or{" "}
                          <a
                            href={`tel:${BRAND_CONTACT.phone.replace(/\s+/g, "")}`}
                            className="font-semibold text-[#1A3150] underline"
                          >
                            {BRAND_CONTACT.phone}
                          </a>
                          .
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error-banner"
                      role="alert"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded border border-[#B66D50] bg-[#B66D50]/10 p-4 text-sm font-medium text-[#7c3f28]"
                    >
                      {errorMsg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </RevealFromBottom>
        </div>
      </div>
    </section>
  )
}
