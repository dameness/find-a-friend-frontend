import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/tanstack-query/queryClient";
import { FilterContextProvider } from "./contexts/filterContext";
import { AuthContextProvider } from "./contexts/authContext";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <FilterContextProvider>
          <Toaster
            position="top-center"
            style={{ height: "20rem" }}
            duration={1500}
            toastOptions={{
              closeButton: true,
              style: { height: "50px", fontSize: "1rem" },
            }}
          />
          <RouterProvider router={router} />
        </FilterContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};
