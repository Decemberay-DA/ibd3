export default function Section({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="w-full h-full bg-gray-100 rounded-lg">{children}</div>
		</div>
	)
}
