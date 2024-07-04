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
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-6">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-10 w-10"
              width="50"
              height="50"
              src={Logo}
              alt="Zero Dark Logo"
            />
            <div className="flex space-x-6">
              {/*{navigation.social.map((item) => (*/}
              {/*  <a key={item.name} href={item.href} className="text-neutral-500 hover:text-neutral-400">*/}
              {/*    <span className="sr-only">{item.name}</span>*/}
              {/*    {item.icon && <item.icon className="h-5 w-5" aria-hidden="true" />}*/}
              {/*  </a>*/}
              {/*))}*/}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 md:justify-items-end xl:col-span-2 xl:mt-0">
            {/*<div className="mt-16 grid grid-cols-2 md:grid-cols-3 md:justify-items-end gap-8 xl:col-span-3 xl:mt-0">*/}
            <div className="col-span-1">
              <Section title="Services" links={navigation.services} />
            </div>
            <div className="col-span-1">
              <Section title="Company" links={navigation.company} />
            </div>
            <div className="col-span-1">
              <Section title="Legal" links={navigation.legal} />
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
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-neutral-500">
            &copy; 2024 0 Dark, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

interface Link {
  name: string
  href: string
}

interface ISectionProps {
  title: string
  links: Link[]
}

function Section({ title, links }: ISectionProps) {
  return (
    <>
      <Category>{title}</Category>
      <ul role="list" className="mt-6 space-y-4">
        {links.map(item => (
          <Hyperlink key={item.name} {...item} />
        ))}
      </ul>
    </>
  )
}

function Category({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold tracking-wide leading-6">
      {children}
    </h3>
  )
}

interface ILinkProps extends Link {}

function Hyperlink({ name, href }: ILinkProps) {
  return (
    <li key={name}>
      <Link
        href={href}
        className="text-sm leading-6 text-gray-300 hover:text-white"
      >
        {name}
      </Link>
    </li>
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
