import { api } from "@/config/api";
import { Pet, PetFilters } from "@/types/pets";
import { useQuery } from "@tanstack/react-query";

const fetchPets = async (params: PetFilters): Promise<Pet[]> => {
  const response = await api.get("/pets", { params });

  return response.data.pets;
};

export const useFetchPets = (params: PetFilters) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pets", JSON.stringify(params)],
    queryFn: () => fetchPets(params),
    staleTime: 1000 * 60, // 60 seconds
  });

  return { pets: data ?? [], isPetsDataLoading: isLoading };
};
