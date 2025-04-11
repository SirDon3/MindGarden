import { useState } from 'react'
import Plant from '../components/Plant';

function Garden() {

  const [thoughts, setThoughts] = useState(() => {
    // This runs only once on component mount
    const stored = localStorage.getItem('thoughts')
    return stored ? JSON.parse(stored) : []
  })

  function getRandomInt() {
    return  Math.floor(Math.random() * 7);
     
  }

  const plantCount = getRandomInt()
const emojis = ["🪻", "🌹", "🌼", "🌷", "🌺", "🌻", "🌸", "🏵️", "🪷"]
return (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Welcome to MindGarden</h1>
      <p className="text-gray-600 text-center">Your personal space for thoughts and reflections.</p>
      <div className="space-y-4">
          {thoughts.map((thought, index) => (
              <Plant key={index} thought={thought} emoji={emojis[index % emojis.length]} />
          ))}
      </div>
  </div>
);


  
  }
  
  export default Garden
  