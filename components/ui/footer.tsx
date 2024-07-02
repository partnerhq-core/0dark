import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/icon.svg'

export function Footer() {
  return (
    <footer
      className="bg-neutral-900 text-neutral-200"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex md:flex-col gap-3">
            <div className="flex gap-3 items-start">
              <Image
                className="h-8 w-8"
                width="50"
                height="50"
                src={Logo}
                alt="Zero Dark Logo"
              />
            </div>
            <span className="mt-auto text-neutral-500 text-sm">
              © 2024 0 Dark, Inc.
            </span>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-2 md:justify-items-end gap-8 xl:col-span-2 xl:mt-0">
            <div className="col-span-1">
              <Category>Services</Category>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Category>Company</Category>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*<div className="md:grid md:grid-cols-2 md:gap-8 md:col-span-2">*/}
            {/*<div>*/}
            {/*  <Category>Company</Category>*/}
            {/*  <ul role="list" className="mt-6 space-y-4">*/}
            {/*    {navigation.company.map((item) => (*/}
            {/*      <li key={item.name}>*/}
            {/*        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">*/}
            {/*          {item.name}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</div>*/}
            {/*<div className="mt-10 md:mt-0">*/}
            {/*  <Category>Legal</Category>*/}
            {/*  <ul role="list" className="mt-6 space-y-4">*/}
            {/*    {navigation.legal.map((item) => (*/}
            {/*      <li key={item.name}>*/}
            {/*        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">*/}
            {/*          {item.name}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}

function Category({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold tracking-wide leading-6">
      {children}
    </h3>
  )
}

const navigation = {
  services: [
    { name: 'Reverse Engineer', href: '#services' },
    { name: 'Trade Secrets', href: '#services' },
    { name: 'Proprietary Codebase', href: '#services' },
    { name: 'Proprietary Dataset', href: '#services' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#about' },
    // { name: 'Blog', href: '#' },
    { name: 'Jobs', href: 'mailto:founders@zerodarkconsulting.com' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms-of-service' },
  ],
}
