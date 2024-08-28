import { State } from "@/types/organizations";
import { PetFilters } from "@/types/pets";
import { ReactNode, createContext, useState } from "react";

export type FilterContextType = {
  petFilters: PetFilters;
  setPetFilters: React.Dispatch<React.SetStateAction<PetFilters>>;

  selectedState?: State;
  setSelectedState: React.Dispatch<React.SetStateAction<State | undefined>>;

  selectedCity?: string;
  setSelectedCity: (city?: string) => void;
};

export const FilterContext = createContext({} as FilterContextType);

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const [selectedState, setSelectedState] = useState<State>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [petFilters, setPetFilters] = useState<PetFilters>({ city: "" });

  const handleSetSelectedCity = (city?: string) => {
    setSelectedCity(city);
    setPetFilters((filters) => ({ ...filters, city: city ?? "" }));
  };

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
