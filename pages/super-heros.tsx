import { useQuery } from 'react-query'

const fetchSuperHeros = async () => {
  const raw = await fetch('/api/super-heros')
  return await raw.json()
}

const SuperHeros = () => {
  const { isLoading, data, error } = useQuery('super-heros', fetchSuperHeros)

  if (isLoading)
    return <h2 className='text-2xl'>Loading...</h2>

  if (error)
    return <h2 className='text-2xl text-red-500'>Error</h2>

  return (
    <section className='text-center pt-20'>
      <h2 className='text-2xl'>Super Heros</h2>
      <ul className='text-center mt-6'>
        {data.map((hero: any) => (
          <li key={hero.name} className='flex items-center justify-center gap-4'>
            <h3 className='text-xl'>{hero.name}</h3>
            <p className='text-sm'>{hero.power}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SuperHeros
