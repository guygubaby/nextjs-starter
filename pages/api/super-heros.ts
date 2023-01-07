import type { NextApiRequest, NextApiResponse } from 'next'

interface IHero {
  name: string
  power: string
}

const Heros: IHero[] = [
  { name: 'Batman', power: 'Money' },
  { name: 'Superman', power: 'Everything' },
  { name: 'Spiderman', power: 'Spidey Sense' },
  { name: 'Bryce', power: 'Handsome' },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(Heros)
}
