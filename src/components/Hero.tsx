import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import hero from "@/images/hero.png"
import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
   let id = useId()

   return (
      <div {...props}>
         <svg
            viewBox="0 0 1026 1026"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full animate-spin-slow"
         >
            <path
               d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
               stroke="#D4D4D4"
               strokeOpacity="0.7"
            />
            <path
               d="M513 1025C230.23 1025 1 795.77 1 513"
               stroke={`url(#${id}-gradient-1)`}
               strokeLinecap="round"
            />
            <defs>
               <linearGradient
                  id={`${id}-gradient-1`}
                  x1="1"
                  y1="513"
                  x2="1"
                  y2="1025"
                  gradientUnits="userSpaceOnUse"
               >
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
               </linearGradient>
            </defs>
         </svg>
         <svg
            viewBox="0 0 1026 1026"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
         >
            <path
               d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
               stroke="#D4D4D4"
               strokeOpacity="0.7"
            />
            <path
               d="M913 513c0 220.914-179.086 400-400 400"
               stroke={`url(#${id}-gradient-2)`}
               strokeLinecap="round"
            />
            <defs>
               <linearGradient
                  id={`${id}-gradient-2`}
                  x1="913"
                  y1="513"
                  x2="913"
                  y2="913"
                  gradientUnits="userSpaceOnUse"
               >
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
               </linearGradient>
            </defs>
         </svg>
      </div>
   )
}

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
   return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
         <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
         <path
            d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
            fill="#A3A3A3"
            stroke="#A3A3A3"
         />
      </svg>
   )
}

export function Hero() {
   return (
      <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
         <Container>
            <div className="relative  flex flex-col items-center text-center">
               {/* Background Illustration behind Title and Description */}
               <BackgroundIllustration className="absolute left-1/2 -top-20 h-[1000px] w-[1526px] -translate-x-1/2 -z-10 stroke-gray-300/70" />

               {/* Headline */}
               <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl font-sans">
                  Accelerate Your Leads <br />with AI-Driven Insights.
               </h1>

               {/* Description */}
               <p className="mt-6 max-w-2xl text-lg text-gray-600">
                  {/* Discover potential clients and generate leads effortlessly. */}

                  Our AI engine analyzes millions of data points, finding high-quality leads that match your criteria, so you can focus on closing deals.
               </p>

               {/* Buttons */}
               <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                     href="#"
                     variant="solid"
                     className="px-8 py-3 w-full sm:w-auto"
                  >
                     Get Started
                  </Button>
                  <Button
                     href="https://www.youtube.com/"
                     variant="outline"
                     className="px-8 py-3 w-full sm:w-auto flex items-center justify-center"
                  >
                     <PlayIcon className="h-6 w-6 mr-2" />
                     Watch the video
                  </Button>
               </div>

               {/* Image */}
               <div className="relative  w-full max-w-5xl">
                  <Image
                     src={hero}
                     alt="AI Lead Generation App showcase"
                     className="w-full max-w-full mx-auto mt-4"
                  />
               </div>
            </div>

            {/* Logos */}
            <div className="text-center mt-16">
               <p className="text-sm font-semibold text-gray-900">As featured in</p>
               <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8">
                  {[
                     ['Forbes', logoForbes],
                     ['TechCrunch', logoTechcrunch],
                     ['Wired', logoWired],
                     ['CNN', logoCnn, 'hidden xl:block'],
                     ['BBC', logoBbc],
                     ['CBS', logoCbs],
                     ['Fast Company', logoFastCompany],
                     ['HuffPost', logoHuffpost, 'hidden xl:block'],
                  ].map(([name, logo, className]) => (
                     <li key={name} className={clsx('flex', className)}>
                        <Image src={logo} alt={name} className="h-8" unoptimized />
                     </li>
                  ))}
               </ul>
            </div>
         </Container>
      </div>
   );
}
