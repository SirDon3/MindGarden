import { useState } from 'react';
import Plant from '../components/Plant';

function Garden() {
    const [thoughts, setThoughts] = useState(() => {
        // This runs only once on component mount
        const stored = localStorage.getItem('thoughts');
        return stored ? JSON.parse(stored) : [];
    });

    const emojis = ["🪻", "🌹", "🌼", "🌷", "🌺", "🌻", "🌸", "🏵️", "🪷"];

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Welcome to MindGarden</h1>
            <p className="text-gray-600 text-center mb-6">Your personal space for thoughts and reflections.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {thoughts.map((thought, index) => (
                    <Plant key={index} thought={thought} emoji={emojis[index % emojis.length]} />
                ))}
            </div>
        </div>
    );
}

export default Garden;