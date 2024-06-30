import Airtable from 'airtable'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey:
    'patyTkCbOq1gUtioJ.713c9f05eb2aa44de38d6dd3e5b38b9b2751af80b0234345b11afdc290e202b2',
})

const base = Airtable.base('appdloVj67m4T5LHN')
export const Vendors = base('Vendors')
export const Dark = base('Dark Consulting')

const crm = Airtable.base('appyOs9GWzOZqnGIf')
export const Bounties = crm('Bounties')
export const Intros = crm('Submissions')
export const Contracts = crm('Contracts')
export const People = crm('People')
export const Companies = crm('Companies')
export const Employees = crm('Employees')
