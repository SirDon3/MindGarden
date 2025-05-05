import { useEffect, useState } from 'react'

function ThoughtInput() {

  const [thoughts, setThoughts] = useState(() => {
    // This runs only once on component mount
    const stored = localStorage.getItem('thoughts')
    return stored ? JSON.parse(stored) : []
  })

  const [input, setInput] = useState('')

  // Save to localStorage whenever thoughts change
  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(thoughts))
  }, [thoughts])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const emojis = ["🪻", "🌹", "🌼", "🌷", "🌺", "🌻", "🌸", "🏵️", "🪷"]
    const [year, month, day] = new Date().toISOString().split('T')[0].split('-');
    const newThought = {
      id: crypto.randomUUID(), // Unique ID
      text: input.trim(),
      date: {
        year: year,
        month: month,
        day: day
      },
      plant: emojis[Math.floor(Math.random() * emojis.length)]
    }

    setThoughts(prev => [...prev, newThought])
    setInput('') // Clear input after submit
  }
 
 console.log(thoughts)

 const [year, month, day] = new Date().toISOString().split('T')[0].split('-');

 const thoughtsForToday = thoughts.filter(
  (thought) =>
    thought.date.day === day &&
    thought.date.month === month &&
    thought.date.year === year
)


const hasThoughtForToday = (thoughts) => {
  const thought = thoughts.some((thought) => thought.date.day === day && thought.date.month === month && thought.date.year === year)
  return thought
}
  const isTodayLogged = hasThoughtForToday(thoughts)
console.log(isTodayLogged)

  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
    <form onSubmit={handleSubmit} className="flex items-center gap-x-4">
      {!isTodayLogged ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded p-2 flex-grow"
            placeholder="What's on your mind?"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Plant 🌱
          </button>
        </>
      ) : (
        <p>You’ve already planted your thought for today <center>🌼</center></p>
      )}
    </form>

  
 
      <div className="mt-4 space-y-2">
      {thoughtsForToday.length === 0 ? (
            <p className="text-gray-500 italic">No thoughts yet...</p>
          ) : (
            thoughtsForToday.map((t) => (
            <div
              key={t.id}
              className="bg-green-100 border border-green-300 rounded px-3 py-2"
            >
              <p className="text-center bold pb-2">{t.text}</p>
              <p className="text-center text-4xl">{t.plant}</p>
              <p className="text-center pt-2 text-gray-500 ">
                {`${t.date.day}/${t.date.month}/${t.date.year}`}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ThoughtInput
