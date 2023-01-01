import Head from 'next/head'

export default function Home() {
  const APP_TITLE = 'Opinionated Nextjs starter'

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-center'>
        <p>It works</p>
        <button className='btn'>btn</button>
      </main>
    </>
  )
}
