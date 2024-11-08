import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
   return (
      <section
         id="get-free-shares-today"
         className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
      >
         <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
            <CircleBackground color="#fff" className="animate-spin-slower" />
         </div>
         <Container className="relative">
            <div className="mx-auto max-w-md sm:text-center">
               <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Unlock Exclusive Tips Today
               </h2>
               <p className="mt-4 text-lg text-gray-300">
                  It takes 30 seconds to sign up.create an account, and we’ll send you an exclusive tip to supercharge your first lead-gen campaign.
               </p>
               <div className="mt-8 flex justify-center">
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                     <Button
                        href="#"
                        variant="solid"
                        className="px-8 py-3 w-full sm:w-auto"
                     >
                        Get Started For Free
                     </Button>

                  </div>
               </div>
            </div>
         </Container>
      </section>
   )
}
