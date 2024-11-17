


import { Container } from '@/components/Container'

import { Logo, Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import Link from 'next/link'




export function Footer() {
   return (
      <footer className="border-t border-gray-200">
         <Container>
            <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
               <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                  <div className="flex items-center justify-center text-gray-900">
                     <Link href="/" aria-label="Home">
                        <Logo className="h-10 w-auto fill-blue-700" />
                     </Link>

                  </div>
                  <nav className=" flex gap-8 mt-5 md:mt-0 mx-auto">
                     <NavLinks />
                  </nav>
               </div>

            </div>

         </Container>
      </footer>
   )
}
