import { useState } from "react"

function Journal() {
  const [thoughts, setThoughts] = useState(() => {

    const stored = localStorage.getItem('thoughts')
    return stored ? JSON.parse(stored) : []
  })
  const [searchToggle, setSearchToggle] = useState(false)
  const [query, setQuery] = useState('')

  const [searchedThoughts, setSearchedThoughts] = useState(thoughts)

const handleSearchRest = (e) => {
  e.preventDefault()
  setSearchedThoughts(thoughts)
  setSearchToggle(false)

}
  // handle the search input
const handleQuerySearch = (e) => {

  e.preventDefault()
  console.log(query)

  if (query.trim() === '') {
    return;
  }
  // filter the thoughts array based on the query
  // the filter function will return a new array with the thoughts that match the query
  const filteredThoughts = thoughts.filter(thought => {
    return thought.text.toLowerCase().includes(query.toLowerCase())
  })
  setSearchToggle(true)
  setSearchedThoughts(filteredThoughts)
  setQuery('')
  console.log(filteredThoughts)
}

    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
   
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Search thoughts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded p-2 flex-grow"
          /> <button onClick={handleQuerySearch} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Search</button></form>
          
        <h1 className="text-2xl font-bold text-center">Welcome to MindGarden</h1>
        <p className="text-gray-600 text-center">Your personal space for thoughts and reflections.</p>
        <div className="space-y-4">
        {searchedThoughts.length > 0 ? (
     <div className="max-w-md mx-auto bg-white p-4 space-y-4"> 
            {searchedThoughts.map((thought, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <p className="text-center text-xl">{thought.text}</p>
                <p className="text-center text-l">{`${thought.date.day}-${thought.date.month}-${thought.date.year}`}</p>
                
              </div>
              
            ))}
               
          {searchToggle && (
   <button onClick={handleSearchRest} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
   Show all thoughts
 </button>
          )}
     </div>
            
          ) : (
         <div className=" grid text-gray-500 italic content-center">
             <p className="text-gray-500 text-center px-3 py-3">No thoughts found.</p>
            <button onClick={handleSearchRest} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Show all thoughts
          </button>
         </div>
          )}
        </div>
 
      </div>

    )
  }
  
  export default Journal
  