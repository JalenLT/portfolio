export default function Loading(){
	return (
		<div className="relative h-[85vh] w-100">
			<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#746352] text-2xl animate-pulse rounded-full flex items-center justify-center"><span className="text-white">Loading</span></div>
		</div>
	);
}