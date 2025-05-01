import { useEffect, useState } from 'react'
import Plant from './Plant'
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
    const [year, month, day] = new Date().toISOString().split('T')[0].split('-');
    const newThought = {
      id: crypto.randomUUID(), // Unique ID
      text: input.trim(),
      date: {
        year: year,
        month: month,
        day: day
      }
    }

    setThoughts(prev => [...prev, newThought])
    setInput('') // Clear input after submit
  }
  const [year, month, day] = new Date().toISOString().split('T')[0].split('-');
  const date = `${year}-${month}-${day}`
  
  const wholeDate = {
    year: year,
    month: month,
    day: day
  }
// console.log(wholeDate)
const newDate = new Date().toISOString().split("T")[0].split('-');
console.log(date)
// console.log(wholeDate)

const hasThoughtForToday = (thoughts) => {
    const thought = thoughts.some((thought) => thought.date.day === day && thought.date.month === month && thought.date.year === day)
    return thought
  }
//  console.log(hasThoughtForToday(thoughts))

const ClearThoughts = () => {
    localStorage.clear();
}

const emojis = ["🪻", "🌹", "🌼", "🌷", "🌺", "🌻", "🌸", "🏵️", "🪷"]
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
      {!hasThoughtForToday(thoughts) ? (
            <div>
                        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="What's on your mind?"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Plant 🌱
        </button>
            </div>
        ): (<p>You’ve already planted your thought for today 🌼</p>)}

      </form>

      <form onSubmit={ClearThoughts} className="flex gap-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Clean 🌱
        </button>
      </form>
      <div className="mt-4 space-y-2">
        {thoughts.length === 0 ? (
          <p className="text-gray-500 italic">No thoughts yet...</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {thoughts.map((thought, i) => (   <Plant key={i} thought={thought} emoji={emojis[i % emojis.length]} /> ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ThoughtInput