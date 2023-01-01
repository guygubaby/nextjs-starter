import React from 'react'
import Footer from '../Footer'

const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
  return <>
    <section className="w-screen min-h-screen text-#1f1c2e bg-#f3f6fd dark:text-gray-200 dark:bg-#1f1c2e">
      {children}
      <p className="text-center">[default layout]</p>
      <Footer />
    </section>
  </>
}

export default DefaultLayout
