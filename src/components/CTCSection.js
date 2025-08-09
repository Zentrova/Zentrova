import React from 'react'
import CtcBtn from './homepage/ctcBtn'
import Link from 'next/link'

export default function CTCSection() {
  return (
        <section className="py-24 text-center bg-background2">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Online Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Partner with us to craft a powerful, modern e-commerce solution.
          </p>
          <div className='flex justify-center items-center'>
            <Link href='/contact'>
              <CtcBtn text='Book a Free Consultation'/>
            </Link>
          </div>
        </div>
      </section>
  )
}
