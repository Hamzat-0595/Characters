import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./providers/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 10 * 60 * 1000, //  10 минут
      staleTime: 5 * 60 * 1000, // 5 минут
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
