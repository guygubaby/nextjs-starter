import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ChangeEvent } from 'react'
import { useState } from 'react'

export default function Home() {
  const APP_TITLE = 'Opinionated Nextjs starter'

  const [name, setName] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const router = useRouter()

  const goToYourPage = () => {
    if (!name)
      return
    router.push(`/hi/${encodeURIComponent(name)}`)
  }

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-30 w-full flex flex-col items-center">
        <p>Bryce's nextjs</p>

        <p className="my-10 op80">Opinionated Next.js starter</p>

        <section className="flex flex-col max-w-2xl">
          <input
            className='outline-none rounded px-2 py-4px text-center dark:text-$color-black'
            placeholder="Your name"
            autoComplete="false"
            value={name}
            onChange={event => handleInputChange(event)}
            onKeyUp={(event) => {
              if (event.keyCode === 13)
                goToYourPage()
            }}
          />

          <div className="text-center mt-4">
            <button className="btn" disabled={!name} onClick={() => goToYourPage()}>
              Go
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
