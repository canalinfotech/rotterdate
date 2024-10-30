"use client"

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Clock, MapPin } from "lucide-react"
import Image from 'next/image'

// Add this interface near the top of the file, before the itineraries array
interface Itinerary {
  id: number
  title: string
  description: string
  duration: string
  location: string
  image: string
}

const itineraries = [
  {
    id: 1,
    title: "Romantic River Cruise",
    description: "Enjoy a scenic cruise along the Maas River with dinner and live music.",
    duration: "3 hours",
    location: "Erasmus Bridge",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "Culinary Adventure",
    description: "Experience a gastronomic journey through Rotterdam's finest restaurants.",
    duration: "4 hours",
    location: "Markthal",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 3,
    title: "Sunset Picnic at Kralingse Plas",
    description: "Relax with a gourmet picnic basket as you watch the sunset over the lake.",
    duration: "2 hours",
    location: "Kralingse Plas",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function Component() {
  const [, setSelectedItinerary] = useState<Itinerary | null>(null)

  const handleBooking = (itinerary: Itinerary) => {
    setSelectedItinerary(itinerary)
    // Here you would typically open a modal or navigate to a booking page
    alert(`Booking ${itinerary.title}. In a real app, this would open a booking form.`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-rose-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Heart className="h-6 w-6 text-rose-600" />
          <span className="ml-2 text-2xl font-bold text-rose-800">rotterdate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-rose-700" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-rose-700" href="#">
            Itineraries
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-rose-700" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-rose-700" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-rose-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-rose-800">
                  Plan Your Perfect Date Night in Rotterdam
                </h1>
                <p className="mx-auto max-w-[700px] text-rose-700 md:text-xl">
                  Discover curated itineraries for unforgettable experiences. Choose, book, and enjoy your romantic evening
                  without the stress of planning.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-rose-600 text-white hover:bg-rose-700">Explore Itineraries</Button>
                <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-100">
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 mb-8 text-center">
              Curated Date Night Itineraries
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {itineraries.map((itinerary) => (
                <Card key={itinerary.id} className="flex flex-col">
                  <CardHeader>
                    <Image 
                      src={itinerary.image} 
                      alt={itinerary.title}
                      width={500}  // specify appropriate width
                      height={300} // specify appropriate height
                    />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="text-xl font-bold text-rose-800">{itinerary.title}</CardTitle>
                    <CardDescription className="text-rose-600 mt-2">{itinerary.description}</CardDescription>
                    <div className="flex items-center mt-4 text-rose-700">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center mt-2 text-rose-700">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{itinerary.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-rose-600 text-white hover:bg-rose-700"
                      onClick={() => handleBooking(itinerary)}
                    >
                      Book This Date
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-rose-500">© 2024 rotterdate.nl. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-rose-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-rose-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}