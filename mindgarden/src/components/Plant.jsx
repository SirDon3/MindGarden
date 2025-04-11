const Plant = ({ thought, emoji }) => {
    return (
        <div className="bg-green-100 p-4 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 animate-wiggle">
            <p className="text-gray-700 text-center text-lg">{thought.text}</p>
            <p className="text-center text-4xl">{emoji}</p> {/* Large emoji */}
            <p className="text-gray-700 text-center text-lg">{`${thought.date.year}/${thought.date.month}/${thought.date.day}`}</p>
        </div>
    );
};

export default Plant;