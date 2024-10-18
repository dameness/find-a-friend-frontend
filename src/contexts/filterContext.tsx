import { useFetchStates } from "@/services/organizations/useFetchStates";
import { State } from "@/types/organizations";
import { PetFilters } from "@/types/pets";
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  ChangeEvent,
} from "react";

export type FilterContextType = {
  petFilters: PetFilters;
  setPetFilters: React.Dispatch<React.SetStateAction<PetFilters>>;

  selectedState?: State;
  setSelectedState: React.Dispatch<React.SetStateAction<State | undefined>>;
  handleSelectStateInput: (e: ChangeEvent<HTMLSelectElement>) => void;

  selectedCity?: string;
  setSelectedCity: (city?: string) => void;
  handleSelectCityInput: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const FilterContext = createContext({} as FilterContextType);

export function FilterContextProvider({ children }: PropsWithChildren) {
  const { states } = useFetchStates();

  const [selectedState, setSelectedState] = useState<State>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [petFilters, setPetFilters] = useState<PetFilters>({ city: "" });

  const setSelectedCityAndFilters = (city?: string) => {
    setSelectedCity(city);
    setPetFilters((filters) => ({ ...filters, city: city ?? "" }));
  };

  const handleSelectStateInput = (e: ChangeEvent<HTMLSelectElement>) => {
    const state = states.find((it) => it.state === e.target.value);

    setSelectedState(state);
    setSelectedCityAndFilters(state?.cities[0]);
  };

  const handleSelectCityInput = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = selectedState?.cities.find((it) => it === e.target.value);
    setSelectedCityAndFilters(city);
  };

  useEffect(() => {
    if (states && states.length > 0) {
      setSelectedState(states[0]);
    }
  }, [states]);

  return (
    <FilterContext.Provider
      value={{
        petFilters,
        setPetFilters,
        selectedState,
        setSelectedState,
        handleSelectStateInput,
        selectedCity,
        setSelectedCity: setSelectedCityAndFilters,
        handleSelectCityInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
