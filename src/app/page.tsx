import Section from "~/components/section"

export default async function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-white">
			<Section>
				<h1 className="text-4xl font-bold">Lsnd Section</h1>
			</Section>
			<Section>
				<h1 className="text-4xl font-bold">About Me Section</h1>
			</Section>
			<Section>
				<h1 className="text-4xl font-bold">Projects</h1>
			</Section>
			<Section>
				<h1 className="text-4xl font-bold">End</h1>
			</Section>
		</main>
	)
}
