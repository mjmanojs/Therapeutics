import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl text-primary">
              Therapeutics
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/treatments" className="text-sm font-medium hover:text-primary">
              Treatments
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button>Book Appointment</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us to book an appointment or learn more about our treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below to schedule an appointment or send us an inquiry. We'll get back to you as
                    soon as possible.
                  </p>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="treatment">Treatment of Interest</Label>
                      <select
                        id="treatment"
                        className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a treatment</option>
                        <option value="back-neck">Back & Neck</option>
                        <option value="knee-ankle">Knee & Ankle</option>
                        <option value="shoulder-elbow">Shoulder & Elbow</option>
                        <option value="neurological">Neurological</option>
                        <option value="sports-injury">Sports Injury</option>
                        <option value="geriatric">Geriatric Care</option>
                        <option value="hip-pelvic">Hip & Pelvic</option>
                        <option value="cardiac-respiratory">Cardiac & Respiratory</option>
                        <option value="womens-health">Women's Health</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your condition or inquiry"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Request
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
              <div className="space-y-8">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                        <p className="text-sm text-muted-foreground">Available during business hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@therapeutics.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond as soon as possible</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">123 Health Avenue, Pune, Maharashtra</p>
                        <p className="text-sm text-muted-foreground">Near Central Hospital</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Opening Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="rounded-lg overflow-hidden border h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17004033118!2d73.72287834316407!3d18.524564859944897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649930961427!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Therapeutics Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">What should I expect during my first visit?</h3>
                <p className="text-muted-foreground">
                  Your first visit will include a comprehensive assessment of your condition, discussion about your pain
                  signals, and an introduction to our micro correctional exercise approach. We'll develop a personalized
                  treatment plan tailored to your needs.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">How long does each session last?</h3>
                <p className="text-muted-foreground">
                  Initial consultations typically last 60 minutes, while follow-up sessions are usually 45 minutes. The
                  duration may vary based on your specific condition and treatment needs.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Do I need a doctor's referral?</h3>
                <p className="text-muted-foreground">
                  No, you don't need a doctor's referral to book an appointment with us. However, if you have medical
                  reports or diagnoses, please bring them along as they can be helpful in your assessment.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">What should I wear to my appointment?</h3>
                <p className="text-muted-foreground">
                  Please wear comfortable clothing that allows for easy movement. For certain conditions, we may need to
                  assess the affected area, so clothing that can be easily adjusted is recommended.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="font-bold text-xl text-primary">
              Therapeutics
            </Link>
            <p className="text-sm text-muted-foreground">
              A new approach to physiotherapy, following the teachings of Dr. Rajiv Sharangpani.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="/" className="text-sm hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/treatments" className="text-sm hover:underline underline-offset-4">
              Treatments
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Therapeutics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

