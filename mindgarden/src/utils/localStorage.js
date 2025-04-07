const STORAGE_KEY = 'thoughts'

export const getThoughts = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export const saveThoughts = (thoughts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(thoughts))
}
