import { createFileRoute } from "@tanstack/react-router";

const HomePage = () => {
	return (
		<section className="page__home">
			<article>
				<h1>React challenges</h1>

				<p>
					This project is for creating multiple react challenges in
					the same page
				</p>
			</article>
		</section>
	);
};

export const Route = createFileRoute("/home/")({
	component: HomePage,
});
