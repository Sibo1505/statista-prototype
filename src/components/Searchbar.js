export default function Searchbar() {
    return (
        <div className="w-full max-w-xl mx-auto my-6">
            <input
                type="text"
                placeholder="Search statistics (e.g. investing countries)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}