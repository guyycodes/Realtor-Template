import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card p-8 relative group hover:shadow-2xl transition-all duration-300">
      <FaQuoteLeft className="text-4xl text-primary-100 absolute top-6 right-6" />
      
      <div className="flex items-center mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-neutral-500">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} className="text-accent-gold" />
        ))}
      </div>

      <p className="text-neutral-600 italic leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>
  )
}

export default TestimonialCard
