import { api } from "@/config/api";
import { Pet, PetFilters } from "@/types/pets";
import { useQuery } from "@tanstack/react-query";

const fetchPets = async (params: PetFilters): Promise<Pet[]> => {
  const response = await api.get("/pets", { params });

  return response.data.pets;
};

export const useFetchPets = (params: PetFilters) => {
  const { data, ...rest } = useQuery({
    queryKey: ["pets", JSON.stringify(params)],
    queryFn: () => fetchPets(params),
    enabled: !!params.city,
    select: (data) => {
      return data.map((it) => ({
        ...it,
        image_url: it.image_url
          ? import.meta.env.VITE_API_URL
            ? `${import.meta.env.VITE_API_URL}${it.image_url}`
            : `http://localhost:3333${it.image_url}`
          : "/no-image.jpg",
      }));
    },
    staleTime: 1000 * 60, // 60 seconds
  });

  return { pets: data ?? [], ...rest };
};
