import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<div className="app">
			<div className="nav">
				<Link to="/home">Home</Link>{" "}
				<Link to="/calendar">Calendar</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	),
});
