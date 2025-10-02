# Sarah Thompson - Luxury Real Estate Website

A modern, professional Next.js website for a single real estate agent specializing in luxury properties in Southern California.

## Features

- 🏠 **Modern Design**: Clean, professional layout similar to premium Wix/Squarespace templates
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- 🎨 **Tailwind CSS**: Custom theme with luxury real estate branding
- 📍 **File-based Routing**: Clean URL structure with Next.js App Router
- 🔍 **SEO Optimized**: Meta tags and structured data for better search visibility
- ✨ **Interactive Elements**: Smooth animations and transitions
- 📧 **Contact Forms**: Detailed contact form with dynamic fields

## Project Structure

```
/app
  ├── layout.js          # Main layout with navigation and footer
  ├── page.js           # Home page
  ├── globals.css       # Global styles and Tailwind configuration
  ├── /about
  │   └── page.js       # About Sarah Thompson
  ├── /properties
  │   └── page.js       # Property listings
  ├── /services
  │   └── page.js       # Real estate services
  └── /contact
      └── page.js       # Contact form and information

/components
  ├── Navigation.js     # Header navigation component
  ├── Footer.js        # Footer component
  ├── PropertyCard.js  # Property listing card
  └── TestimonialCard.js # Client testimonial card

/public
  └── [images]         # Static assets (if needed)
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/realtor.git
cd realtor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Key Features by Page

### Home Page
- Hero section with call-to-action
- Property search bar
- Featured properties showcase
- Client testimonials
- Service highlights
- Statistics display

### About Page
- Personal biography
- Professional achievements
- Awards and recognition
- Client testimonials
- Areas of expertise
- Social media links

### Properties Page
- Property grid/list view toggle
- Advanced filtering options
- Search functionality
- Property cards with key details
- Pagination

### Services Page
- Detailed service offerings
- Process overview
- Individual service sections:
  - Home Buying
  - Home Selling
  - Investment Properties
  - Luxury Marketing
  - Relocation Services
  - Free Consultation

### Contact Page
- Comprehensive contact form
- Dynamic form fields based on inquiry type
- Contact information display
- Office hours
- Social media links
- Office location map placeholder

## Customization

### Branding
Update the agent name and branding in:
- `/components/Navigation.js`
- `/components/Footer.js`
- `/app/layout.js` (metadata)
- Individual page metadata

### Colors
Customize the color scheme in `/tailwind.config.js`:
- Primary colors (blue shades)
- Secondary colors (purple shades)
- Accent colors (gold, emerald, coral)

### Content
- Replace placeholder content in all pages
- Update contact information
- Add actual property listings
- Update testimonials with real client reviews

### Images
Currently using Unsplash placeholder images. Replace with:
- Professional headshots
- Actual property photos
- Office/location images
- Brand-specific imagery

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Framer Motion**: Animation library
- **ESLint**: Code linting

## Deployment

This site can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/realtor)

## SEO Considerations

- All pages include proper meta tags
- Structured data for real estate listings
- Optimized images with alt tags
- Clean URL structure
- Mobile-first responsive design
- Fast page load times

## Future Enhancements

- [ ] Add property detail pages
- [ ] Integrate with MLS API
- [ ] Add blog section
- [ ] Implement property search filters
- [ ] Add virtual tour functionality
- [ ] Integrate calendar scheduling
- [ ] Add email newsletter signup
- [ ] Implement testimonial slider
- [ ] Add property comparison tool
- [ ] Create mortgage calculator

## License

This project is private and proprietary.

## Contact

For questions about this website, contact:
- **Developer**: [Your Name]
- **Email**: [Your Email]

---

Built with ❤️ for Sarah Thompson Real Estate
