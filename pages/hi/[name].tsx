import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { nameAtom } from '../../store/name'

const YourPage = () => {
  const router = useRouter()
  const { name } = router.query

  const [nameFromStore] = useAtom(nameAtom)

  return (
    <section className='flex flex-col items-center w-full pt-10'>
      <div className='i-carbon-pedestrian text-4xl inline-block' />
      <p>Hi, {name}</p>
      <p>Name from store: {nameFromStore}</p>
      <p className='text-sm op50'>
        <em>Dynamic route!</em>
      </p>

      <div>
        <button className='btn m-3 text-sm mt-8' onClick={() => router.back()}>
          Back
        </button>
      </div>
    </section>
  )
}

export default YourPage
