import { api } from "@/config/api";
import { State } from "@/types/organizations";
import { useQuery } from "@tanstack/react-query";

const fetchStates = async (): Promise<State[]> => {
  const response = await api.get("/states");

  return response.data.states;
};

export const useFetchStates = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["states"],
    queryFn: () => fetchStates(),
    staleTime: 1000 * 60, // 60 seconds
  });

  return { states: data ?? [], isStatesDataLoading: isLoading };
};
