import Image from 'next/image'
import Link from 'next/link'
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const PropertyCard = ({ property }) => {
  return (
    <div className="card group overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.type}
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors group/heart">
          <FaHeart className="text-neutral-400 group-hover/heart:text-red-500 transition-colors" />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center gap-2 text-neutral-600 mb-4">
          <FaMapMarkerAlt className="text-primary-500" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-neutral-600">
          <div className="flex items-center gap-1">
            <FaBed className="text-primary-500" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-primary-500" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined className="text-primary-500" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-neutral-500">Price</p>
            <p className="text-2xl font-bold text-primary-700">{property.price}</p>
          </div>
          <Link href={`/properties/${property.id}`} className="btn-primary py-2 px-4 text-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
