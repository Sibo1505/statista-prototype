// Import Next.js optimized image component
import Image from "next/image";

// Header component shown on every page
export default function Header() {
    return (
        // Header container with background color and shadow
        <header className="bg-[#001326] px-6 py-4 shadow">
            {/* Inner content: logo and title, centered and spaced */}
            <div className="max-w-4xl mx-auto flex items-center gap-3 px-4">
                {/* Statista logo */}
                <Image
                    src="/statista-logo.jpg"
                    alt="Statista Logo"
                    width={40}
                    height={40}
                />
                {/* Application title */}
                <h1 className="text-xl font-semibold text-gray-200"> Statista Prototype </h1>
            </div>
        </header>
    )
}