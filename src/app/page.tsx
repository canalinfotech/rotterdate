"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Star, Menu } from "lucide-react"

interface Itinerary {
  id: number
  title: string
  description: string
  duration: string
  location: string
  image: string
}

const itineraries: Itinerary[] = [
  {
    id: 1,
    title: "Michelin Star Dining Experience",
    description: "Indulge in an exquisite 7-course tasting menu at Rotterdam's finest Michelin-starred restaurant.",
    duration: "3 hours",
    location: "City Center",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "Private Yacht Sunset Cruise",
    description: "Enjoy a luxurious private yacht cruise along the Maas River with champagne and gourmet hors d'oeuvres.",
    duration: "4 hours",
    location: "Rotterdam Harbor",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 3,
    title: "VIP Art Gallery Tour & Cocktails",
    description: "Experience an after-hours, curator-led tour of Rotterdam's most exclusive art galleries, followed by craft cocktails.",
    duration: "3 hours",
    location: "Arts District",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBooking = (itinerary: Itinerary) => {
    alert(`Booking ${itinerary.title}. In a real app, this would open a booking form.`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className={`fixed w-full px-4 lg:px-6 h-20 flex items-center transition-all duration-300 z-50 ${
        scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}>
        <Link className="flex items-center justify-center" href="#">
          <Star className="h-8 w-8 text-yellow-500" />
          <span className="ml-2 text-2xl font-bold">rotterdate</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6 sm:gap-8">
          <Link className="text-sm font-medium hover:text-yellow-500 transition-colors" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-500 transition-colors" href="#">
            Experiences
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-500 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-500 transition-colors" href="#">
            Contact
          </Link>
        </nav>
        <Button 
          variant="ghost" 
          className="md:hidden ml-auto" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col gap-6 text-center">
            <Link className="text-xl font-medium hover:text-yellow-500 transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link className="text-xl font-medium hover:text-yellow-500 transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
              Experiences
            </Link>
            <Link className="text-xl font-medium hover:text-yellow-500 transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link className="text-xl font-medium hover:text-yellow-500 transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
          <Button 
            variant="ghost" 
            className="absolute top-4 right-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </Button>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full h-screen flex items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6">
              Elevate Your Date Night in Rotterdam
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8">
              Curated, luxurious experiences for discerning couples. Effortlessly plan and book your perfect evening.
            </p>
            <div className="space-x-4">
              <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">Explore Experiences</Button>
              <Button variant="outline" className="border-gray-300 text-gray-300 hover:bg-gray-800">
                Our Process
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100 mb-12 text-center">
              Exclusive Date Experiences
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {itineraries.map((itinerary) => (
                <Card key={itinerary.id} className="flex flex-col overflow-hidden border-0 shadow-lg bg-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={itinerary.image}
                      alt={itinerary.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl font-bold text-gray-100 mb-2">{itinerary.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-4">{itinerary.description}</CardDescription>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{itinerary.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-colors"
                      onClick={() => handleBooking(itinerary)}
                    >
                      Reserve This Experience
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 w-full shrink-0 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 rotterdate.nl. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link className="text-sm hover:text-yellow-500 text-gray-400 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-yellow-500 text-gray-400 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:text-yellow-500 text-gray-400 transition-colors" href="#">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}