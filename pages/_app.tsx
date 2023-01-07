import '../styles/globals.css'
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import DefaultLayout from '../components/layout/default'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  )
}
