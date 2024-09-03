import { api } from "@/config/api";
import { useFilterContext } from "@/hooks/useFilterContext";
import { queryClient } from "@/lib/tanstack-query/queryClient";
import { Pet } from "@/types/pets";
import { useQuery } from "@tanstack/react-query";

const fetchPet = async (id: string): Promise<Pet | null> => {
  const response = await api.get(`/pets/${id}`);

  return response.data.pet;
};

export const useFetchPet = (id: string) => {
  const { petFilters } = useFilterContext();
  const { data, isLoading } = useQuery({
    queryKey: ["pet", id],
    queryFn: () => fetchPet(id),
    initialData: () =>
      queryClient
        .getQueryData<Pet[]>(["pets", JSON.stringify(petFilters)])
        ?.find((pet) => pet.id === id),
    select: (data) => {
      if (data)
        return {
          ...data,
          image_url: data.image_url
            ? import.meta.env.VITE_API_URL
              ? `${import.meta.env.VITE_API_URL}${data.image_url}`
              : `http://localhost:3333${data.image_url}`
            : "/no-image.jpg",
        };

      return null;
    },
    staleTime: 1000 * 60, // 60 seconds
  });

  return { pet: data ?? null, isPetDataLoading: isLoading };
};
