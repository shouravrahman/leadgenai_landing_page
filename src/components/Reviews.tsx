'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
   title: string
   body: string
   author: string
   rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
   {
      title: 'Game-Changer for My Outreach',
      body: 'I signed up for this app and within a week, I had 50+ leads lined up. It’s the most efficient way to generate high-quality leads I’ve ever used.',
      author: 'LeadHunter101',
      rating: 5,
   },
   {
      title: 'The Ultimate Lead Gen Tool',
      body: 'I didn’t know how to scale my lead generation efforts until I found this app. It’s intuitive, powerful, and a complete game-changer for my business.',
      author: 'SalesPro',
      rating: 5,
   },
   {
      title: 'I’ve Got Leads Coming in Non-Stop',
      body: 'The automated features and data-driven insights make this app a must-have. I’m getting more leads than I can even manage!',
      author: 'GrowthSeeker',
      rating: 5,
   },
   {
      title: 'Crushing It with Targeted Leads',
      body: 'I’m closing more deals thanks to the highly-targeted leads I’ve been getting through this app. It’s changed the way I approach sales.',
      author: 'CloserKing',
      rating: 5,
   },
   {
      title: 'A Lead Gen Tool Like No Other',
      body: 'I love how this app has helped me automate my lead generation process. No more wasted time—just real, qualified prospects.',
      author: 'EfficientMarketer',
      rating: 5,
   },
   {
      title: 'Quality Leads at My Fingertips',
      body: 'I was skeptical at first, but after using this app, I’ve been able to connect with more qualified leads in days than I ever did before.',
      author: 'SmartSeller',
      rating: 5,
   },
   {
      title: 'Incredible Lead Generation Power',
      body: 'This app makes it easy to identify and connect with the right people. I can’t imagine doing business without it now!',
      author: 'Techpreneur',
      rating: 5,
   },
   {
      title: 'Maximized My Sales Funnel',
      body: 'The lead generation features helped me fill up my sales funnel with warm leads, giving me the perfect opportunities to close sales effortlessly.',
      author: 'PipelineBuilder',
      rating: 5,
   },
   {
      title: 'New Client Every Day',
      body: 'Since signing up, I’ve been securing new clients daily. This app has saved me time and made my lead generation strategy more effective.',
      author: 'BizOwner',
      rating: 5,
   },
   {
      title: 'Boosted My Lead Conversion Rate',
      body: 'The app not only helped me get more leads but also improved my conversion rates by providing the right insights and tools for outreach.',
      author: 'ConversionExpert',
      rating: 5,
   },
   {
      title: 'Finally, Real Results',
      body: 'I’ve tried countless lead generation tools, but none have come close to the value and results I’m getting from this app. It works!',
      author: 'LeadGenMaster',
      rating: 5,
   },
   {
      title: 'This is What Business Growth Looks Like',
      body: 'I used to struggle with lead generation, but this app has transformed my business. The leads keep coming, and my revenue is growing exponentially.',
      author: 'BusinessGrowthGuru',
      rating: 5,
   },
   {
      title: 'Took My Sales to the Next Level',
      body: 'Since using this app, my sales have skyrocketed. The leads are more targeted, and I’m now able to nurture them effectively.',
      author: 'SalesExpert',
      rating: 5,
   },
   {
      title: 'Supercharge Your Lead Pipeline',
      body: 'If you’re serious about growing your business, this app is a must. I’ve seen a huge increase in the quality and quantity of my leads.',
      author: 'MarketingMaven',
      rating: 5,
   },
]


function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
   return (
      <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
   )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
   return (
      <div className="flex">
         {[...Array(5).keys()].map((index) => (
            <StarIcon
               key={index}
               className={clsx(
                  'h-5 w-5',
                  rating > index ? 'fill-cyan-500' : 'fill-gray-300',
               )}
            />
         ))}
      </div>
   )
}

function Review({
   title,
   body,
   author,
   rating,
   className,
   ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
   let animationDelay = useMemo(() => {
      let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
      return possibleAnimationDelays[
         Math.floor(Math.random() * possibleAnimationDelays.length)
      ]
   }, [])

   return (
      <figure
         className={clsx(
            'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
            className,
         )}
         style={{ animationDelay }}
         {...props}
      >
         <blockquote className="text-gray-900">
            <StarRating rating={rating} />
            <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
               {title}
            </p>
            <p className="mt-3 text-base leading-7">{body}</p>
         </blockquote>
         <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
            {author}
         </figcaption>
      </figure>
   )
}

function splitArray<T>(array: Array<T>, numParts: number) {
   let result: Array<Array<T>> = []
   for (let i = 0; i < array.length; i++) {
      let index = i % numParts
      if (!result[index]) {
         result[index] = []
      }
      result[index].push(array[i])
   }
   return result
}

function ReviewColumn({
   reviews,
   className,
   reviewClassName,
   msPerPixel = 0,
}: {
   reviews: Array<Review>
   className?: string
   reviewClassName?: (reviewIndex: number) => string
   msPerPixel?: number
}) {
   let columnRef = useRef<React.ElementRef<'div'>>(null)
   let [columnHeight, setColumnHeight] = useState(0)
   let duration = `${columnHeight * msPerPixel}ms`

   useEffect(() => {
      if (!columnRef.current) {
         return
      }

      let resizeObserver = new window.ResizeObserver(() => {
         setColumnHeight(columnRef.current?.offsetHeight ?? 0)
      })

      resizeObserver.observe(columnRef.current)

      return () => {
         resizeObserver.disconnect()
      }
   }, [])

   return (
      <div
         ref={columnRef}
         className={clsx('animate-marquee space-y-8 py-4', className)}
         style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
         {reviews.concat(reviews).map((review, reviewIndex) => (
            <Review
               key={reviewIndex}
               aria-hidden={reviewIndex >= reviews.length}
               className={reviewClassName?.(reviewIndex % reviews.length)}
               {...review}
            />
         ))}
      </div>
   )
}

function ReviewGrid() {
   let containerRef = useRef<React.ElementRef<'div'>>(null)
   let isInView = useInView(containerRef, { once: true, amount: 0.4 })
   let columns = splitArray(reviews, 3)
   let column1 = columns[0]
   let column2 = columns[1]
   let column3 = splitArray(columns[2], 2)

   return (
      <div
         ref={containerRef}
         className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
      >
         {isInView && (
            <>
               <ReviewColumn
                  reviews={[...column1, ...column3.flat(), ...column2]}
                  reviewClassName={(reviewIndex) =>
                     clsx(
                        reviewIndex >= column1.length + column3[0].length &&
                        'md:hidden',
                        reviewIndex >= column1.length && 'lg:hidden',
                     )
                  }
                  msPerPixel={10}
               />
               <ReviewColumn
                  reviews={[...column2, ...column3[1]]}
                  className="hidden md:block"
                  reviewClassName={(reviewIndex) =>
                     reviewIndex >= column2.length ? 'lg:hidden' : ''
                  }
                  msPerPixel={15}
               />
               <ReviewColumn
                  reviews={column3.flat()}
                  className="hidden lg:block"
                  msPerPixel={10}
               />
            </>
         )}
         <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
      </div>
   )
}

export function Reviews() {
   return (
      <section
         id="reviews"
         aria-labelledby="reviews-title"
         className="pb-16 pt-20 sm:pb-24 sm:pt-32"
      >
         <Container>
            <h2
               id="reviews-title"
               className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
            >
               Everyone is generating tons of leads with us.
            </h2>
            <p className="mt-2 text-lg text-gray-600 sm:text-center">
               Thousands of people have doubled their net-worth in the last 30 days.Here’s what they’re saying:
            </p>
            <ReviewGrid />
         </Container>
      </section>
   )
}
