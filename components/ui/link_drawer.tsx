import Link from "next/link"

interface LinkDrawerProps {
	icon: React.ReactNode
	text: string
	path?: string
	onClick?: () => void
}

export default function LinkDrawer({ icon, text, path, onClick }: LinkDrawerProps) {
	const sharedClasses =
		"group flex items-center rounded-full shadow-md overflow-hidden bg-white cursor-pointer"

	const content = (
		<>
			{icon}
			{text !== "" && (
				<h1 className="text-[#746352] max-w-full md:max-w-0 md:opacity-0 translate-x-0 md:translate-x-[-10px] group-hover:max-w-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out scroll-m-20 text-center text-2xl md:text-4xl font-extrabold tracking-tight text-balance pr-4 py-2 md:py-0 md:pr-0 group-hover:pr-4 group-hover:py-2 whitespace-nowrap">
					{text}
				</h1>
			)}
		</>
	)

	// If a path is provided, render a Next.js <Link>
	if (path) {
		return (
			<Link href={path} className={sharedClasses}>
				{content}
			</Link>
		)
	}

	// Otherwise render a button or div with onClick
	return (
		<div onClick={onClick} className={sharedClasses}>
			{content}
		</div>
	)
}
