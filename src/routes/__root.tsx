import { Outlet, Link, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md space-y-3 text-center">
        <h1 className="text-2xl font-semibold">404 — Page not found</h1>
        <p className="text-sm text-muted-foreground">The page you requested does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
