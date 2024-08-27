import { api } from "@/config/api";
import { Pet, PetFilters } from "@/types/pets";
import { useQuery } from "@tanstack/react-query";

const fetchPets = async (params: PetFilters): Promise<Pet[]> => {
  const response = await api.get("/pets", { params });

  return response.data.pets;
};

export const useFetchPets = (params: PetFilters) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pets", String(params)],
    queryFn: () => fetchPets(params),
  });

  return { pets: data ?? [], isPetsDataLoading: isLoading };
};
