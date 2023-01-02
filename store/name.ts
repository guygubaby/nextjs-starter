const name = atom<string>('')

export const nameAtom = atom<string, string>(
  get => get(name),
  (_get, set, newName) => {
    set(name, newName)
  },
)
