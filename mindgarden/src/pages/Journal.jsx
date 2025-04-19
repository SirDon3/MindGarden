import { useState } from "react"

function Journal() {
  const [thoughts, setThoughts] = useState(() => {
    // This runs only once on component mount
    const stored = localStorage.getItem('thoughts')
    return stored ? JSON.parse(stored) : []
  })
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center">Welcome to MindGarden</h1>
        <p className="text-gray-600 text-center">Your personal space for thoughts and reflections.</p>
        <div className="space-y-4">
          {thoughts.map((thought, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p>{thought.text}</p>
              <p className="text-sm text-gray-500">{`${thought.date.year}-${thought.date.month}-${thought.date.day}`}</p>
            </div>
          ))}
      </div>
      </div>
    )
  }
  
  export default Journal
  