import React from 'react'
import Footer from '../Footer'

const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
  return <>
    <section className="w-screen min-h-screen">
      {children}
      <p className="text-center text-gray-500 mb-4">[default layout]</p>
      <Footer />
    </section>
  </>
}

export default DefaultLayout
