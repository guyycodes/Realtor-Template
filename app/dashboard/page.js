'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Shield, Users, Calendar, Star, Activity,
  ChevronDown, ChevronRight, LogOut, Database,
  BarChart3, MessageSquare, MapPin, Clock, FileText,
  MousePointerClick, Eye, TrendingUp
} from 'lucide-react'
import { DataMinerWidget, BookingWidget, JobPortalWidget } from '@/hooks/useWidgetfied'

const MOCK_STATS = {
  totalClients: 412,
  websiteVisits: 5230,
  websiteVisitsChange: 12,
  avgGoogleRating: 5.0,
  totalGoogleReviews: 89,
  todaysAppointments: 6,
  newReviewsThisMonth: 7,
  widgetClicks: 342,
  widgetClicksChange: 18,
  bookingConversion: 34,
}

const MOCK_UPCOMING = [
  { time: '9:00 AM', client: 'Michael & Lisa Chen', type: 'Buyer Consultation', location: 'Office — In Person', status: 'confirmed' },
  { time: '10:30 AM', client: 'David Ramirez', type: 'Property Showing', location: '845 Pacific Coast Hwy, Malibu', status: 'confirmed' },
  { time: '12:00 PM', client: 'Jennifer Walsh', type: 'Closing Walkthrough', location: '322 Elm Drive, Santa Monica', status: 'confirmed' },
  { time: '2:00 PM', client: 'Robert Kim', type: 'Virtual Consultation', location: 'Zoom — Link Sent', status: 'pending' },
  { time: '3:30 PM', client: 'Amanda Torres', type: 'Open House Prep', location: '901 N Doheny Dr, West Hollywood', status: 'scheduled' },
  { time: '5:00 PM', client: 'The Patterson Family', type: 'Property Showing', location: '1580 Laurel Canyon, Studio City', status: 'confirmed' },
]

const MOCK_REVIEWS = [
  { author: 'Michael & Lisa C.', rating: 5, snippet: 'Sarah made buying our dream home effortless. Her knowledge of the Beverly Hills market is...', date: '4 days ago', source: 'Google' },
  { author: 'Amanda T.', rating: 5, snippet: 'Sold our condo in 9 days above asking. Sarah\'s staging advice and marketing strategy were...', date: '1 week ago', source: 'Zillow' },
  { author: 'Robert K.', rating: 5, snippet: 'As an investor, I need an agent who understands numbers. Sarah\'s market analysis was...', date: '2 weeks ago', source: 'Google' },
]

const MOCK_PIPELINE = [
  { stage: 'New Inquiry', count: 14, color: 'bg-blue-400' },
  { stage: 'Consultation Scheduled', count: 8, color: 'bg-cyan-400' },
  { stage: 'Showing Booked', count: 11, color: 'bg-accent-gold' },
  { stage: 'Follow-up', count: 6, color: 'bg-orange-400' },
  { stage: 'Active Client', count: 5, color: 'bg-green-400' },
  { stage: 'Completed', count: 22, color: 'bg-emerald-500' },
]

export default function Dashboard() {
  const router = useRouter()
  const [openSections, setOpenSections] = useState({
    appointments: true,
    pipeline: false,
    reviews: false,
    widgets: false,
    dataminer: false,
  })

  useEffect(() => {
    if (sessionStorage.getItem('st_realty_auth') !== 'true') {
      router.push('/admin')
    }
  }, [router])

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleSignOut = () => {
    sessionStorage.removeItem('st_realty_auth')
    router.push('/')
  }

  const pipelineMax = Math.max(...MOCK_PIPELINE.map(s => s.count))

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-7 h-7 text-accent-gold" />
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Business Dashboard</h1>
            </div>
            <p className="text-neutral-400 text-sm">Sarah Thompson Real Estate — Admin Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors text-sm"
            >
              View Site
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <Eye className="w-7 h-7 text-cyan-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.websiteVisits.toLocaleString()}</span>
            </div>
            <p className="text-neutral-400 text-sm">Website Visits</p>
            <p className="text-xs text-green-400 mt-1">+{MOCK_STATS.websiteVisitsChange}% vs last month</p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-7 h-7 text-blue-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.totalClients}</span>
            </div>
            <p className="text-neutral-400 text-sm">Total Clients</p>
            <p className="text-xs text-neutral-500 mt-1">Lifetime contacts in CRM</p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <Star className="w-7 h-7 text-yellow-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.avgGoogleRating}</span>
            </div>
            <p className="text-neutral-400 text-sm">Avg Google Rating</p>
            <p className="text-xs text-neutral-500 mt-1">{MOCK_STATS.totalGoogleReviews} total reviews</p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <Calendar className="w-7 h-7 text-accent-gold" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.todaysAppointments}</span>
            </div>
            <p className="text-neutral-400 text-sm">Today&apos;s Appointments</p>
            <p className="text-xs text-neutral-500 mt-1">Next: {MOCK_UPCOMING[0]?.time}</p>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-4 border border-neutral-700/50">
            <div className="flex items-center gap-3">
              <MousePointerClick className="w-5 h-5 text-accent-gold" />
              <div>
                <p className="text-xl font-bold text-white">{MOCK_STATS.widgetClicks}</p>
                <p className="text-xs text-neutral-400">Widget interactions this month</p>
              </div>
            </div>
            <p className="text-xs text-green-400 mt-2">+{MOCK_STATS.widgetClicksChange}% vs last month</p>
          </div>

          <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-4 border border-neutral-700/50">
            <p className="text-xs text-neutral-400 mb-2">Visitor → Booking Rate</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-neutral-700 rounded-full h-2">
                <div className="bg-accent-gold h-2 rounded-full" style={{ width: `${MOCK_STATS.bookingConversion}%` }} />
              </div>
              <span className="text-sm text-white font-medium">{MOCK_STATS.bookingConversion}%</span>
            </div>
          </div>

          <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-4 border border-neutral-700/50">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-xl font-bold text-white">{MOCK_STATS.newReviewsThisMonth}</p>
                <p className="text-xs text-neutral-400">New reviews this month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Today's Appointments */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('appointments')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Today&apos;s Appointments</span>
                <span className="text-sm text-neutral-400">({MOCK_UPCOMING.length} scheduled)</span>
              </div>
              {openSections.appointments ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.appointments && (
              <div className="px-5 py-4 border-t border-neutral-700">
                <div className="space-y-3">
                  {MOCK_UPCOMING.map((appt, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-right w-16">
                          <span className="text-sm font-medium text-white">{appt.time}</span>
                        </div>
                        <div className="w-px h-10 bg-accent-gold/30" />
                        <div>
                          <p className="text-white font-medium text-sm">{appt.client}</p>
                          <p className="text-xs text-neutral-400">{appt.type}</p>
                          <p className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" /> {appt.location}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        appt.status === 'confirmed' ? 'bg-green-900/30 text-green-400 border border-green-800/30' :
                        appt.status === 'pending' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/30' :
                        'bg-blue-900/30 text-blue-400 border border-blue-800/30'
                      }`}>
                        {appt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Appointments Pipeline */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('pipeline')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Appointments Pipeline</span>
                <span className="text-sm text-neutral-400">({MOCK_PIPELINE.reduce((a, b) => a + b.count, 0)} total)</span>
              </div>
              {openSections.pipeline ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.pipeline && (
              <div className="px-5 py-4 border-t border-neutral-700">
                <div className="space-y-3">
                  {MOCK_PIPELINE.map((stage, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm text-neutral-400 w-44 truncate">{stage.stage}</span>
                      <div className="flex-1">
                        <div className="bg-neutral-700 rounded-full h-2">
                          <div
                            className={`${stage.color} h-2 rounded-full transition-all`}
                            style={{ width: `${(stage.count / pipelineMax) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-white w-8 text-right font-medium">{stage.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recent Reviews */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('reviews')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Recent Reviews</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/30 text-green-400 border border-green-800/30">All 5-star</span>
              </div>
              {openSections.reviews ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.reviews && (
              <div className="px-5 py-4 border-t border-neutral-700">
                <div className="space-y-3">
                  {MOCK_REVIEWS.map((review, i) => (
                    <div key={i} className="p-3 bg-neutral-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, j) => (
                              <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-white">{review.author}</span>
                          <span className="text-xs px-1.5 py-0.5 rounded bg-neutral-600/50 text-neutral-400">{review.source}</span>
                        </div>
                        <span className="text-xs text-neutral-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-neutral-300 font-light italic">&ldquo;{review.snippet}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking & Client Portal */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('widgets')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Booking &amp; Client Portal</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30 font-medium">Widgets</span>
              </div>
              {openSections.widgets ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.widgets && (
              <div className="px-5 py-5 border-t border-neutral-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-700/30 rounded-lg text-center">
                    <Calendar className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                    <p className="text-white font-medium text-sm mb-1">Book a Showing</p>
                    <p className="text-neutral-400 text-xs mb-3">Schedule consultations and property viewings</p>
                    <BookingWidget id="dashboard-booking-widget" />
                  </div>
                  <div className="p-4 bg-neutral-700/30 rounded-lg text-center">
                    <FileText className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                    <p className="text-white font-medium text-sm mb-1">Client Portal</p>
                    <p className="text-neutral-400 text-xs mb-3">Client appointment history and account access</p>
                    <JobPortalWidget id="dashboard-portal-widget" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Data Miner Widget */}
          <div className="bg-gradient-to-r from-accent-gold/10 to-yellow-900/10 backdrop-blur-sm rounded-xl border border-accent-gold/20 overflow-hidden">
            <button
              onClick={() => toggleSection('dataminer')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-accent-gold/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Data Miner</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30 font-medium">Widget</span>
              </div>
              {openSections.dataminer ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.dataminer && (
              <div className="px-5 py-6 border-t border-accent-gold/20">
                <p className="text-neutral-300 text-sm font-light mb-4">
                  Mine and enrich local data — find FSBO listings, expired listings, new developments, and investor leads across Southern California.
                </p>
                <DataMinerWidget
                  id="dashboard-lead-miner-widget"
                  displayMode="inline"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-neutral-500 text-sm">
          Logged in as: sarah@thompsonrealty.com (Owner)
        </div>
      </div>
    </div>
  )
}
