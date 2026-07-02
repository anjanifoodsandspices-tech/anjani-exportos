'use client'

import Link from 'next/link'

const mockLeads = [
  { id: 1, company: 'ABC Spices', contact: 'John', email: 'john@abc.com', country: 'USA', status: 'new' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '1rem'}}>
          <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Anjani ExportOS</h1>
          <p>✅ Your CRM is LIVE!</p>
        </div>
      </div>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem'}}>
        <div style={{background: 'white', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '2rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Welcome!</h2>
          <p>Your export CRM platform is ready to use.</p>
          <p style={{marginTop: '1rem'}}>Total Leads: {mockLeads.length}</p>
        </div>
      </div>
    </div>
  )
}
