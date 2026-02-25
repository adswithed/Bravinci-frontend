'use client'

import { TestimonialsSection as TestimonialsSectionComponent } from '@/components/ui/testimonial-v2'

const testimonials = [
  {
    text: 'Bravinci transformed our strategic planning process. The Strategy Command Center gave us real-time insights we never had before, enabling faster and more confident decision-making.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Michael Doves',
    role: 'Vice Chairman, Intelligence Center of Excellence Benelux',
  },
  {
    text: 'Working with Bravinci has been a game-changer. Their AI-powered intelligence solutions helped us identify market opportunities months ahead of competitors.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Sarah Thompson',
    role: 'Chief Strategy Officer, Global Finance Corp',
  },
  {
    text: 'The team at Bravinci demonstrates exceptional expertise and commitment. They truly understand enterprise challenges and deliver tangible, measurable results.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Robert Chen',
    role: 'CEO, Technology Innovation Group',
  },
  {
    text: 'Their Intelligence Academy program elevated our entire analytics team. The practical, hands-on approach to AI and BI training was exactly what we needed.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Emma Rodriguez',
    role: 'Head of Analytics, European Logistics',
  },
  {
    text: 'The seamless integration of internal metrics with external market analysis gave us a 360-degree view of our business landscape. Truly transformative.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'James van der Berg',
    role: 'Managing Director, Netherlands Tech Hub',
  },
  {
    text: "Bravinci's managed services freed our team to focus on strategy while they handled the complex analytics infrastructure. Outstanding partnership.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Lisa Anderson',
    role: 'VP Operations, Nordic Enterprises',
  },
  {
    text: 'The AI Virtual Consultant has become indispensable for our daily operations. It provides insights that would have taken our team weeks to compile.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Ahmed Hassan',
    role: 'Director of Business Intelligence',
  },
  {
    text: 'From initial consultation to full deployment, Bravinci exceeded every expectation. Their one-stop-shop approach saved us months of coordination.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Sophie Laurent',
    role: 'Chief Digital Officer, Paris Retail Group',
  },
  {
    text: "The cultural transformation services helped our organization embrace data-driven decision making at every level. It's changed how we operate.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Maria Santos',
    role: 'Transformation Lead, Iberia Holdings',
  },
]

export function TestimonialsSection() {
  return (
    <TestimonialsSectionComponent
      testimonials={testimonials}
      title="What Our Clients Say"
      subtitle="Trusted by leading enterprises worldwide to transform their strategic decision-making and drive exceptional results."
      badge="Client Testimonials"
    />
  )
}
