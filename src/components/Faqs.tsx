import { Container } from '@/components/Container'

const faqs = [
   [
      {
         question: 'How do I know the leads are high quality?',
         answer:
            'We leverage advanced algorithms and real-time data to ensure our leads are relevant and actionable. Our customers consistently see an increase in conversions, so you can trust the quality.',
      },
      {
         question: 'Can I generate leads for any industry?',
         answer:
            'Yes! Our platform allows you to filter and generate leads across a wide variety of industries, including tech, healthcare, finance, and more. Simply set your criteria and get started.',
      },
      {
         question: 'How are the leads delivered?',
         answer:
            'Leads are delivered to your dashboard in real-time, ready to be actioned. You can also export them in CSV or integrate them into your CRM directly.',
      },
   ],
   [
      {
         question: 'Is there a limit to how many leads I can generate?',
         answer:
            'Each plan has different lead generation limits. The Starter plan allows up to 100 leads per month, while higher plans offer unlimited access to generate leads as per your needs.',
      },
      {
         question: 'How accurate is the lead data?',
         answer:
            'We ensure that all lead data is accurate and up-to-date by using trusted sources and constant data verification processes. We also provide real-time updates to reflect any changes.',
      },
      {
         question: 'Do I need to be experienced to use the app?',
         answer:
            'Not at all! Our platform is designed for all levels of experience. Whether you’re just starting out or have years of lead generation experience, we provide tools to help you succeed.',
      },
   ],
   [
      {
         question: 'Is there any age limit for using the app?',
         answer:
            'For our free plan, users must meet the legal age requirements for lead generation and data privacy in their country of residence. For enterprise plans, we provide customizable privacy solutions for younger users or unique business needs.',
      },
      {
         question: 'Can I integrate this with my CRM?',
         answer:
            'Yes, our Pro and Enterprise plans allow seamless integration with most CRM tools. You can automate lead import directly into your sales pipeline.',
      },
      {
         question: 'How do I become a lead provider?',
         answer:
            'We’re always looking for quality sources. If you have access to unique data or leads, reach out to us to apply for our lead provider program. Once approved, we’ll guide you through the process.',
      },
   ],
]


export function Faqs() {
   return (
      <section
         id="faqs"
         aria-labelledby="faqs-title"
         className="border-t border-gray-200 py-20 sm:py-32"
      >
         <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
               <h2
                  id="faqs-title"
                  className="text-3xl font-medium tracking-tight text-gray-900"
               >
                  Frequently asked questions
               </h2>
               <p className="mt-2 text-lg text-gray-600">
                  If you have anything else you want to ask,{' '}
                  <a
                     href="mailto:info@example.com"
                     className="text-gray-900 underline"
                  >
                     reach out to us
                  </a>
                  .
               </p>
            </div>
            <ul
               role="list"
               className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
            >
               {faqs.map((column, columnIndex) => (
                  <li key={columnIndex}>
                     <ul role="list" className="space-y-10">
                        {column.map((faq, faqIndex) => (
                           <li key={faqIndex}>
                              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                                 {faq.question}
                              </h3>
                              <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                           </li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>
         </Container>
      </section>
   )
}
