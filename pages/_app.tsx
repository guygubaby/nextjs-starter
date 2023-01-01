import '@unocss/reset/tailwind.css'
import '../styles/globals.css'
import 'uno.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/layout/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
