export const canReconfigure = (from, to) => {
  if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from must be a string')

  if (to === undefined) throw new Error('to is required')
  if (to === undefined) throw new Error('to is required')

  const areSameLength = from.length === to.length
  if (!areSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  // Verificar que no se pueda asignar el mismo char a dos letras distintas
  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]

    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}
