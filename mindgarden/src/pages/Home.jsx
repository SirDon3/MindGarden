import ThoughtInput from '../components/ThoughtInput'


function Home() {


  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Welcome to MindGarden</h1>
      <p className="text-gray-600 text-center">Your personal space for thoughts and reflections.</p>
      <ThoughtInput />
      
    </div>  
  )
}

export default Home
