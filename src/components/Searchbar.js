// Searchbar component (input only, no filtering logic yet)
export default function Searchbar() {
    return (
        // Centered container with max width and vertical margin
        <div className="w-full max-w-xl mx-auto my-6">
            {/* Input field with placeholder and basic styling */}
            <input
                type="text"
                placeholder="Search statistics (e.g. investing countries)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}