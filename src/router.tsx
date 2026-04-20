import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const queryClient = new QueryClient();

  return createRouter({
    routeTree,
    context: { queryClient },
    defaultErrorComponent: ({ error, reset }) => (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-md space-y-3 text-center">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="text-sm text-muted-foreground">{error.message}</p>
          <button
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => reset()}
          >
            Retry
          </button>
        </div>
      </div>
    ),
  });
}

const router = getRouter();

export default function Router() {
  return <RouterProvider router={router} />;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
