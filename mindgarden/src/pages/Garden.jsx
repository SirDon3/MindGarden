import { useState } from 'react'

function Garden() {

  const [thoughts, setThoughts] = useState(() => {
    // This runs only once on component mount
    const stored = localStorage.getItem('thoughts')
    return stored ? JSON.parse(stored) : []
  })
const plants = ["🪻", "🌹", "🌼", "🌷", "🌺", "🌻", "🌸", "🏵️", "🪷"]
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-bold">My Garden</h1>
      <p className="text-gray-600">Welcome to your garden of thoughts!</p>
      <div className="space-y-4">
    
  
      </div>
      {thoughts.length === 0 ? (
        <p>{thoughts.length} plants in your garden</p>
      ) : (
        thoughts.map((t) => (
          <div key={t.id}> 
            <p>{t.text} this {plants[1]}</p>
          </div>
          ))
      
      ) }
    </div>
  )
  
  }
  
  export default Garden
  