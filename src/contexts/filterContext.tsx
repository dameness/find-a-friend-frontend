import { useFetchStates } from "@/services/organizations/useFetchStates";
import { State } from "@/types/organizations";
import { PetFilters } from "@/types/pets";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type FilterContextType = {
  petFilters: PetFilters;
  setPetFilters: React.Dispatch<React.SetStateAction<PetFilters>>;

  selectedState?: State;
  setSelectedState: React.Dispatch<React.SetStateAction<State | undefined>>;

  selectedCity?: string;
  setSelectedCity: (city?: string) => void;
};

export const FilterContext = createContext({} as FilterContextType);

export function FilterContextProvider({ children }: PropsWithChildren) {
  const { states } = useFetchStates();

  const [selectedState, setSelectedState] = useState<State>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [petFilters, setPetFilters] = useState<PetFilters>({ city: "" });

  const handleSetSelectedCity = (city?: string) => {
    setSelectedCity(city);
    setPetFilters((filters) => ({ ...filters, city: city ?? "" }));
  };

  useEffect(() => {
    if (states[0] && states[0].cities[0]) {
      setSelectedState(states[0]);
      setSelectedCity(states[0].cities[0]);
    }
  }, [states]);

  return (
    <FilterContext.Provider
      value={{
        petFilters,
        setPetFilters,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity: handleSetSelectedCity,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
