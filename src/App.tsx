import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/tanstack-query/queryClient";
import { FilterContextProvider } from "./contexts/filterContext";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <RouterProvider router={router} />
      </FilterContextProvider>
    </QueryClientProvider>
  );
};
