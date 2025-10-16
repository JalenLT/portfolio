import Image from "next/image"
import Link from "next/link"

export default function Logo(){
	return <>
		<Link className="group flex items-center rounded-full shadow-md overflow-hidden bg-white" href="/">
			<Image 
				src="/Stefan Seunarine Logo Light.png" 
				alt="Stefan Seunarine's Logo"
				width={60}
				height={60}
				className="shrink-0"
			/>
			<h1 className="text-[#746352] max-w-0 opacity-0 translate-x-[-10px] group-hover:max-w-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance pr-0 group-hover:pr-4 whitespace-nowrap">
				Stefan Seunarine
			</h1>
		</Link>
	</>;
}