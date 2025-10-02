'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaFilter, FaTh, FaThList, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

export default function Properties() {
  const [viewMode, setViewMode] = useState('grid')
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    beds: 'all',
    location: 'all'
  })

  const properties = [
    {
      id: 1,
      title: 'Beverly Hills Modern Estate',
      price: '$12,500,000',
      location: 'Beverly Hills, CA',
      beds: 7,
      baths: 9,
      sqft: 12500,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Exclusive Listing',
      featured: true,
      description: 'Newly constructed architectural masterpiece with panoramic city views'
    },
    {
      id: 2,
      title: 'Malibu Oceanfront Villa',
      price: '$18,900,000',
      location: 'Malibu, CA',
      beds: 6,
      baths: 8,
      sqft: 9800,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Exclusive Listing',
      featured: true,
      description: 'Direct beachfront estate with private beach access and infinity pool'
    },
    {
      id: 3,
      title: 'Bel Air Contemporary',
      price: '$8,750,000',
      location: 'Bel Air, CA',
      beds: 5,
      baths: 6,
      sqft: 7500,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'New to Market',
      featured: true,
      description: 'Sophisticated smart home with resort-style amenities'
    },
    {
      id: 4,
      title: 'Hollywood Hills Retreat',
      price: '$6,500,000',
      location: 'Hollywood Hills, CA',
      beds: 4,
      baths: 5,
      sqft: 5200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Price Reduced',
      featured: false,
      description: 'Private gated compound with jetliner views'
    },
    {
      id: 5,
      title: 'Venice Beach Penthouse',
      price: '$4,250,000',
      location: 'Venice, CA',
      beds: 3,
      baths: 3,
      sqft: 3500,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Exclusive Listing',
      featured: false,
      description: 'Luxury penthouse with rooftop deck and ocean views'
    },
    {
      id: 6,
      title: 'Pacific Palisades Estate',
      price: '$22,000,000',
      location: 'Pacific Palisades, CA',
      beds: 8,
      baths: 11,
      sqft: 15000,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Trophy Property',
      featured: true,
      description: 'Grand estate on 2 acres with tennis court and guest house'
    },
    {
      id: 7,
      title: 'Manhattan Beach Modern',
      price: '$5,750,000',
      location: 'Manhattan Beach, CA',
      beds: 4,
      baths: 4,
      sqft: 4200,
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'New Construction',
      featured: false,
      description: 'Steps from the beach with rooftop entertainment deck'
    },
    {
      id: 8,
      title: 'Calabasas Gated Estate',
      price: '$9,250,000',
      location: 'Calabasas, CA',
      beds: 6,
      baths: 7,
      sqft: 8500,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Exclusive Listing',
      featured: false,
      description: 'Mediterranean villa in exclusive guard-gated community'
    },
    {
      id: 9,
      title: 'Downtown LA Penthouse',
      price: '$3,500,000',
      location: 'Downtown LA, CA',
      beds: 2,
      baths: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
      type: 'Luxury High-Rise',
      featured: false,
      description: 'Full-service building with concierge and valet'
    }
  ]

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
  }

  return (
    <>
      {/* Hero Section - Elegant Header */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(0deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 80px)`,
          }}></div>
        </div>
        
        <div className="relative z-10 container-custom">
          <span className="inline-block text-accent-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
            Curated Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-4">
            Exceptional Properties
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-6"></div>
          <p className="text-xl text-neutral-300 font-light max-w-2xl">
            Discover Southern California's most prestigious addresses
          </p>
        </div>
      </section>

      {/* Search and Filter Bar - Luxury Style */}
      <section className="sticky top-20 z-40 bg-white border-b border-neutral-200">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Input - Minimalist Design */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or features..."
                  className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-accent-gold transition-colors font-light"
                />
              </div>
            </div>

            {/* Filter Dropdowns - Refined Style */}
            <div className="flex gap-3">
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-accent-gold transition-colors font-light appearance-none cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="estate">Estate</option>
                <option value="penthouse">Penthouse</option>
                <option value="waterfront">Waterfront</option>
                <option value="gated">Gated Community</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-accent-gold transition-colors font-light appearance-none cursor-pointer"
              >
                <option value="all">Any Price</option>
                <option value="0-5m">Under $5M</option>
                <option value="5m-10m">$5M - $10M</option>
                <option value="10m-20m">$10M - $20M</option>
                <option value="20m+">$20M+</option>
              </select>

              <select
                value={filters.beds}
                onChange={(e) => handleFilterChange('beds', e.target.value)}
                className="px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-accent-gold transition-colors font-light appearance-none cursor-pointer"
              >
                <option value="all">Any Beds</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
                <option value="6">6+ Beds</option>
              </select>

              {/* View Mode Toggle - Luxury Style */}
              <div className="flex gap-px border border-neutral-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'} transition-colors`}
                  aria-label="Grid view"
                >
                  <FaTh className="text-sm" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'} transition-colors`}
                  aria-label="List view"
                >
                  <FaThList className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count and Sort - Clean Design */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-neutral-600 font-light">
              Showing <span className="font-medium">{properties.length}</span> exceptional properties
            </p>
            <select className="px-4 py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-accent-gold transition-colors font-light appearance-none cursor-pointer">
              <option>Sort: Featured First</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Newest Listings</option>
              <option>Largest Properties</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid - Luxury Gallery */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-10`}>
            {properties.map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-neutral-900 aspect-[4/3]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Property Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-black/80 text-white px-4 py-2 text-xs uppercase tracking-wider font-light">
                      {property.type}
                    </span>
                  </div>

                  {/* Quick View on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link href={`/properties/${property.id}`} className="inline-flex items-center gap-2 text-white font-light text-sm hover:text-accent-gold transition-colors">
                      View Details <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-neutral-900">{property.title}</h3>
                    {property.featured && (
                      <span className="text-accent-gold text-xs uppercase tracking-wider font-light">Featured</span>
                    )}
                  </div>
                  
                  <p className="text-2xl font-light text-accent-gold mb-3">{property.price}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <FaMapMarkerAlt className="text-xs" />
                    <span className="font-light">{property.location}</span>
                  </div>
                  
                  <div className="flex gap-6 text-sm text-neutral-600 py-4 border-t border-neutral-200">
                    <span className="flex items-center gap-2">
                      <FaBed className="text-neutral-400" />
                      <span className="font-light">{property.beds} Beds</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBath className="text-neutral-400" />
                      <span className="font-light">{property.baths} Baths</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRulerCombined className="text-neutral-400" />
                      <span className="font-light">{property.sqft.toLocaleString()} sqft</span>
                    </span>
                  </div>
                  
                  <p className="text-sm text-neutral-500 font-light italic">
                    {property.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - Elegant Style */}
          <div className="flex justify-center items-center gap-4 mt-20">
            <button className="px-6 py-2 text-neutral-600 hover:text-black transition-colors font-light">
              Previous
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 ${
                    page === 1 
                      ? 'bg-black text-white' 
                      : 'border border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
                  } transition-all font-light`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-6 py-2 text-neutral-600 hover:text-black transition-colors font-light">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated Appeal */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-2">
            Looking for Something Specific?
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-lg text-neutral-600 font-light mb-10 max-w-2xl mx-auto">
            Access our exclusive off-market properties and pocket listings. 
            Let me know your requirements for a personalized property search.
          </p>
          <Link 
            href="/contact" 
            className="group relative px-10 py-4 bg-black text-white font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 inline-block"
          >
            <span className="relative z-10">Schedule Private Viewing</span>
            <div className="absolute inset-0 bg-accent-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </div>
      </section>
    </>
  )
}