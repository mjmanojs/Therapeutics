import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  A New Approach to Physiotherapy
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  At Therapeutics, we teach people new insights about respecting body signals of pain through micro
                  correctional exercises.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/treatments">
                    <Button className="w-full min-[400px]:w-auto">
                      Our Treatments
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Physiotherapist+with+Patient"
                  width={800}
                  height={600}
                  alt="Physiotherapy session"
                  className="aspect-video object-cover w-full rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Approach</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Following the teachings of Dr. Rajiv Sharangpani, we focus on micro correctional exercises that
                  address the root cause of pain.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Micro+Correctional+Exercise+Demonstration"
                width={600}
                height={400}
                alt="Micro correctional exercises"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Understanding Pain Signals</h3>
                      <p className="text-muted-foreground">
                        We teach you how to interpret and respect your body's signals of pain rather than masking them.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Micro Correctional Exercises</h3>
                      <p className="text-muted-foreground">
                        Precise, targeted exercises that address the root cause of pain and discomfort.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Personalized Treatment Plans</h3>
                      <p className="text-muted-foreground">
                        Each treatment plan is tailored to your specific needs and condition.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Treatments</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of specialized treatments to address various conditions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Back+and+Neck+Therapy"
                    width={400}
                    height={300}
                    alt="Back & Neck Treatment"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold">Back & Neck</h3>
                    <p className="mt-2 text-muted-foreground">
                      Specialized treatment for Sciatica, Cervical Spondylitis and other conditions.
                    </p>
                  </div>
                  <Link href="/treatments" className="mt-4 inline-flex items-center text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="flex flex-col overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Shoulder+and+Elbow+Therapy"
                    width={400}
                    height={300}
                    alt="Shoulder & Elbow"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold">Shoulder & Elbow</h3>
                    <p className="mt-2 text-muted-foreground">
                      Treatment for Frozen Shoulder, Tennis Elbow and other conditions.
                    </p>
                  </div>
                  <Link href="/treatments" className="mt-4 inline-flex items-center text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="flex flex-col overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Sports+Injury+Rehabilitation"
                    width={400}
                    height={300}
                    alt="Sports Injuries"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold">Sports Injury</h3>
                    <p className="mt-2 text-muted-foreground">
                      Rehabilitation for ACL-MCL Tear, Ankle-Heel Pain and other sports injuries.
                    </p>
                  </div>
                  <Link href="/treatments" className="mt-4 inline-flex items-center text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/treatments">
                <Button variant="outline" size="lg">
                  View All Treatments
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Patients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read testimonials from our satisfied patients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "I had a very positive experience with divya mam. She was friendly and she understands the
                      patient's problems and her approach to my mother's back pain, shoulder pain was effective and she
                      saw good improvement within a few sessions. She was always in touch with us. Highly recommend
                      therapeutics for anyone needing physiotherapy services."
                    </p>
                    <p className="font-semibold">- Umaraje Bhosale</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "I highly recommend Therapeutics! Divya expertly guided me through a tailored exercise program to
                      address my shoulder pain, achieving remarkable results without any medication. Her holistic
                      approach, expertise, and supportive demeanor empowered me to take control of my recovery. Through
                      targeted exercises and progressive challenges, I regained strength, flexibility, and confidence."
                    </p>
                    <p className="font-semibold">- Jiji Augustine</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "My mother-in-law was having a lot of pain in her knee while walking, we consulted Dr. Divya. She
                      listened carefully to her problem and asked her to do some simple and easy exercises which she
                      felt comfortable doing. We noticed a difference within 1 week of exercising. Now she is walking
                      easily and is getting a lot of relief from pain. Thank you Dr.Divya👍🏻🙏"
                    </p>
                    <p className="font-semibold">- Sonia Nair</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="https://g.co/kgs/2RsW8rp" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Read More Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Start Your Healing Journey?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Book an appointment today and take the first step towards understanding and respecting your body's
                  signals.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/treatments">
                    <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                      Explore Treatments
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">info@therapeutics.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">123 Health Avenue, Pune, Maharashtra</p>
                  </div>
                </div>
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

