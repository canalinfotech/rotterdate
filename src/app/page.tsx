"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Menu, Coffee, LandmarkIcon, Utensils, Footprints, Wine, Activity, Flower, Building, ShoppingBag, Music, Calendar, PhoneCall, Bell } from "lucide-react"
import { LucideIcon } from 'lucide-react'

interface Activity {
  icon: LucideIcon;
  name: string;
  duration: string;
}

interface Itinerary {
  id: number;
  title: string;
  description: string;
  duration: string;
  day: string;
  date: string;
  timeperiod: string;
  activities: Activity[];
  image: string;
}

const itineraries: Itinerary[] = [
  {
    id: 1,
    title: "Romantic City Explorer",
    description: "A perfect blend of culture, cuisine, and relaxation in the heart of Rotterdam.",
    duration: "6 hours",
    day: "Saturday",
    date: "2024-06-15",
    timeperiod: "10:00 AM - 4:00 PM",
    activities: [
      { icon: Coffee, name: "Artisanal Coffee Tasting", duration: "1 hour" },
      { icon: LandmarkIcon, name: "Modern Art Museum Tour", duration: "2 hours" },
      { icon: Utensils, name: "Gourmet Lunch Experience", duration: "1.5 hours" },
      { icon: Footprints, name: "Scenic Harbor Walk", duration: "1 hour" },
      { icon: Wine, name: "Wine & Cheese Pairing", duration: "30 minutes" }
    ],
    image: "/5-star-dining.jpg?height=400&width=600"
  },
  {
    id: 2,
    title: "Private Yacht Sunset Cruise",
    description: "Enjoy a luxurious private yacht cruise along the Maas River with champagne and gourmet hors d'oeuvres.",
    duration: "4 hours",
    day: "Sunday",
    date: "2024-06-16",
    timeperiod: "2:00 PM - 6:00 PM",
    activities: [
      { icon: Wine, name: "Champagne Tasting", duration: "1 hour" },
      { icon: Utensils, name: "Gourmet Hors d'oeuvres", duration: "1.5 hours" },
      { icon: Footprints, name: "Scenic Harbor Walk", duration: "1 hour" },
      { icon: Wine, name: "Wine & Cheese Pairing", duration: "30 minutes" }
    ],
    image: "/private-yacht.jpg?height=400&width=600"
  },
  {
    id: 3,
    title: "VIP Art Gallery Tour & Cocktails",
    description: "Experience an after-hours, curator-led tour of Rotterdam's most exclusive art galleries, followed by craft cocktails.",
    duration: "3 hours",
    day: "Monday",
    date: "2024-06-17",
    timeperiod: "11:00 AM - 2:00 PM",
    activities: [
      { icon: LandmarkIcon, name: "Art Gallery Tour", duration: "1.5 hours" },
      { icon: Wine, name: "Craft Cocktails", duration: "1.5 hours" }
    ],
    image: "/art-gallery.jpg?height=400&width=600"
  }, {
    id: 4,
    title: "Romantic City Explorer",
    description: "A perfect blend of culture, cuisine, and relaxation in the heart of Rotterdam.",
    duration: "6 hours",
    day: "Saturday",
    date: "2024-06-15",
    timeperiod: "10:00 AM - 4:00 PM",
    activities: [
      { icon: Coffee, name: "Artisanal Coffee Tasting", duration: "1 hour" },
      { icon: LandmarkIcon, name: "Modern Art Museum Tour", duration: "2 hours" },
      { icon: Utensils, name: "Gourmet Lunch Experience", duration: "1.5 hours" },
      { icon: Footprints, name: "Scenic Harbor Walk", duration: "1 hour" },
      { icon: Wine, name: "Wine & Cheese Pairing", duration: "30 minutes" }
    ],
    image: "/city-explorer.webp?height=400&width=600"
  },
  {
    id: 5,
    title: "Urban Adventure & Relaxation",
    description: "Discover Rotterdam's vibrant culture and unwind with luxurious experiences.",
    duration: "5 hours",
    day: "Sunday",
    date: "2024-06-16",
    timeperiod: "2:00 PM - 7:00 PM",
    activities: [
      { icon: Activity, name: "Guided City Jogging Tour", duration: "1 hour" },
      { icon: Flower, name: "Botanical Garden Visit", duration: "1.5 hours" },
      { icon: Utensils, name: "Farm-to-Table Brunch", duration: "1 hour" },
      { icon: Building, name: "Rooftop Bar Cocktail Masterclass", duration: "1.5 hours" }
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 6,
    title: "Culinary & Cultural Delights",
    description: "Indulge in Rotterdam's finest flavors and artistic treasures.",
    duration: "7 hours",
    day: "Friday",
    date: "2024-06-14",
    timeperiod: "3:00 PM - 10:00 PM",
    activities: [
      { icon: Coffee, name: "Specialty Coffee Workshop", duration: "1 hour" },
      { icon: ShoppingBag, name: "Local Artisan Market Tour", duration: "2 hours" },
      { icon: Utensils, name: "Michelin Star Lunch", duration: "2 hours" },
      { icon: LandmarkIcon, name: "Private Gallery Exhibition", duration: "1 hour" },
      { icon: Music, name: "Jazz Club Evening", duration: "1 hour" }
    ],
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

  const scrollToProcess = () => {
    document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToExperiences = () => {
    document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className={`fixed w-full px-4 lg:px-6 h-16 flex items-center transition-all duration-300 z-50 ${scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
        }`}>
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/rotterdate-logo-new.png"
            alt="Rotterdate Logo"
            width={100}
            height={30}
            className="h-6 w-auto"
          />
          <span className="ml-2 text-xl font-bold">Rotterdate</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6 sm:gap-8">
          <button onClick={scrollToExperiences} className="text-sm font-medium hover:text-yellow-500 transition-colors rounded-full px-4 py-2">
            Experiences
          </button>
          <button onClick={scrollToProcess} className="text-sm font-medium hover:text-yellow-500 transition-colors rounded-full px-4 py-2">
            Our Process
          </button>
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
            <button 
              onClick={() => {
                scrollToExperiences()
                setIsMenuOpen(false)
              }} 
              className="text-xl font-medium hover:text-yellow-500 transition-colors rounded-full px-6 py-2"
            >
              Experiences
            </button>
            <button 
              onClick={() => {
                scrollToProcess()
                setIsMenuOpen(false)
              }} 
              className="text-xl font-medium hover:text-yellow-500 transition-colors rounded-full px-6 py-2"
            >
              Our Process
            </button>
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
        <section className="relative w-full h-screen flex items-center justify-center">
          {/* Background image with opacity control */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/background.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5  // Adjust this value between 0 and 1
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-60 z-10" />

          {/* Content */}
          <div className="container px-4 md:px-6 text-center relative z-20">
            <div className="animate-fade-up">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-yellow-500">Perfect Date</span>{" "}
                <span className="text-white">night in</span>{" "}
                <span className="text-yellow-500">Rotterdam</span>
              </h1>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8 animate-fade-up animate-delay-150">
              Curated, luxurious experiences for discerning couples. Effortlessly plan and book your perfect evening.
            </p>
            <div className="space-x-4 animate-fade-up animate-delay-300">
              <Button 
                className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-colors rounded-full"
                onClick={scrollToExperiences}
              >
                Explore Experiences
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-300 hover:bg-gray-800 transition-colors rounded-full"
                onClick={scrollToProcess}
              >
                Our Process
              </Button>
            </div>
          </div>
        </section>
        <section id="experiences" className="w-full py-12 md:py-16 bg-gray-800 pt-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100 mb-12 text-center">
              We got you covered!
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {itineraries.map((itinerary, index) => (
                <Card key={itinerary.id} className="flex flex-col overflow-hidden border-0 shadow-lg bg-gray-700 hover:shadow-xl transition-shadow duration-300 animate-fade-up relative" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Image container with overflow hidden to contain zoom effect */}
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={itinerary.image}
                      alt={itinerary.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    
                    {/* Activities badges overlapping the image */}
                    <div className="absolute left-4 top-4 right-4 z-10 flex flex-col gap-2">
                      {itinerary.activities.map((activity, index) => (
                        <div 
                          key={index} 
                          className="flex items-center bg-gray-600 rounded-full px-3 py-1.5 text-xs backdrop-blur-sm bg-opacity-90 w-fit"
                        >
                          <activity.icon className="w-3 h-3 mr-2 text-yellow-500" />
                          <span className="text-white">{activity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="text-xl font-bold text-gray-100 mb-2">{itinerary.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{itinerary.day}, {new Date(itinerary.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{itinerary.timeperiod}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Duration: {itinerary.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Link href={`/itinerary/${itinerary.id}`} className="w-full">
                      <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-colors rounded-full font-medium">
                        Book now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="our-process" className="w-full py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100 mb-12 text-center">
              Our Process
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-100">Prepare Your Agenda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We&apos;ll prepare a detailed agenda for your date, send it via email, and update your calendar to ensure you&apos;re all set for a perfect evening.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <PhoneCall className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-100">Make Reservations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We&apos;ll handle all necessary reservations on your behalf, ensuring a smooth and hassle-free experience at each venue.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Bell className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-100">Timely Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We&apos;ll send you notifications before and during your date to keep you on track, ensuring you have the best possible time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <footer className="py-8 w-full shrink-0 bg-gray-900 border-t border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 Rotterdate.nl. All rights reserved.</p>
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
      </main>
    </div>
  )
}