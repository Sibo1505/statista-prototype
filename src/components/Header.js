import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-[#001326] px-6 py-4 shadow">
            <div className="max-w-4xl mx-auto flex items-center gap-3 px-4">
                <Image
                    src="/statista-logo.jpg"
                    alt="Statista Logo"
                    width={40}
                    height={40}
                />
                <h1 className="text-xl font-semibold text-gray-200"> Statista Prototype </h1>
            </div>
        </header>
    )
}