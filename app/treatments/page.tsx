import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TreatmentsPage() {
  const treatments = [
    {
      id: 1,
      title: "Back & Neck",
      description:
        "Our specialized micro correctional exercises target the root cause of back and neck pain. We focus on understanding the body's signals to provide lasting relief rather than temporary fixes.",
      image: "/placeholder.svg?height=300&width=400&text=Back+and+Neck+Therapy",
      details: ["Sciatica", "Cervical Spondylitis", "+2 Conditions"],
    },
    {
      id: 2,
      title: "Knee & Ankle",
      description:
        "We address knee and ankle issues through precise exercises and movement patterns that target the underlying causes of pain and mobility limitations.",
      image: "/placeholder.svg?height=300&width=400&text=Knee+and+Ankle+Therapy",
      details: ["Knee Ankle Pain", "Osteoarthritis", "Ligament Injury", "+2 Conditions"],
    },
    {
      id: 3,
      title: "Shoulder & Elbow",
      description:
        "Our approach addresses shoulder and elbow conditions with targeted exercises that improve mobility and reduce pain in these complex joints.",
      image: "/placeholder.svg?height=300&width=400&text=Shoulder+and+Elbow+Therapy",
      details: ["Frozen Shoulder", "Tennis Elbow", "Shoulder Pain", "+2 Conditions"],
    },
    {
      id: 4,
      title: "Neurological",
      description:
        "For those with neurological conditions, our specialized approach helps improve function and quality of life through carefully designed exercise programs.",
      image: "/placeholder.svg?height=300&width=400&text=Neurological+Rehabilitation",
      details: ["Stroke / Paralysis", "Parkinson's", "+4 Conditions"],
    },
    {
      id: 5,
      title: "Sports Injury",
      description:
        "Athletes require specialized care that understands the demands of their sport. We provide rehabilitation programs that not only heal injuries but also improve performance and prevent future issues.",
      image: "/placeholder.svg?height=300&width=400&text=Sports+Injury+Rehabilitation",
      details: ["ACL – MCL Tear", "Ankle – Heel Pain", "+2 Conditions"],
    },
    {
      id: 6,
      title: "Geriatric Care",
      description:
        "Our geriatric physiotherapy focuses on improving mobility, strength, and balance in older adults, enhancing their quality of life and independence.",
      image: "/placeholder.svg?height=300&width=400&text=Geriatric+Physiotherapy",
      details: ["Balance Disorders", "Parkinson's", "+2 Conditions"],
    },
    {
      id: 7,
      title: "Hip & Pelvic",
      description:
        "We address hip and pelvic pain with targeted exercises that improve joint function and reduce discomfort in these weight-bearing areas.",
      image: "/placeholder.svg?height=300&width=400&text=Hip+and+Pelvic+Therapy",
      details: ["Hip Pain", "Tendinitis", "Hip Bursitis", "+2 Conditions"],
    },
    {
      id: 8,
      title: "Cardiac & Respiratory",
      description:
        "Our cardiac and respiratory rehabilitation programs help improve cardiovascular function and breathing capacity through carefully monitored exercise protocols.",
      image: "/placeholder.svg?height=300&width=400&text=Cardiac+and+Respiratory+Therapy",
      details: ["COPD", "Bypass / Heart Surgery", "+2 Conditions"],
    },
    {
      id: 9,
      title: "Women's Health",
      description:
        "Our women's health physiotherapy addresses specific conditions affecting women throughout different life stages, with a focus on pelvic health and postpartum recovery.",
      image: "/placeholder.svg?height=300&width=400&text=Women's+Health+Physiotherapy",
      details: ["Diastasis Recti", "Pelvic Floor", "+2 Conditions"],
    },
  ]

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
            <Link href="/treatments" className="text-sm font-medium text-primary">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Treatments</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Therapeutics, we offer specialized treatments based on micro correctional exercises and
                  understanding body signals of pain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment) => (
                <Card key={treatment.id} className="flex flex-col overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={treatment.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <h2 className="text-2xl font-bold mb-2">{treatment.title}</h2>
                    <p className="text-muted-foreground mb-4">{treatment.description}</p>
                    <h3 className="font-semibold mb-2">What we offer:</h3>
                    <ul className="list-disc pl-5 mb-4 text-sm text-muted-foreground">
                      {treatment.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Treatment Philosophy</h2>
                <p className="text-muted-foreground">
                  At Therapeutics, we believe in addressing the root cause of pain rather than just treating symptoms.
                  Our approach is based on the teachings of Dr. Rajiv Sharangpani, focusing on micro correctional
                  exercises that help your body heal naturally.
                </p>
                <p className="text-muted-foreground">
                  We teach you to understand and respect your body's signals of pain, which leads to more effective and
                  lasting results. Each treatment plan is personalized to your specific needs and condition.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Physiotherapist+Demonstrating+Exercise"
                  width={800}
                  height={600}
                  alt="Treatment philosophy"
                  className="aspect-video object-cover w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed mb-8">
              Book an appointment today and take the first step towards understanding and respecting your body's
              signals.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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

