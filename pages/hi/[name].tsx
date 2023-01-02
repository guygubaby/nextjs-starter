import { useRouter } from 'next/router'

const YourPage = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <section className="flex flex-col items-center w-full pt-10">
      <div className="i-carbon-pedestrian text-4xl inline-block" />
      <p>Hi, {name}</p>
      <p className="text-sm op50">
        <em>Dynamic route!</em>
      </p>

      <div>
        <button className="btn m-3 text-sm mt-8" onClick={() => router.back()}>
          Back
        </button>
      </div>
    </section>
  )
}

export default YourPage
