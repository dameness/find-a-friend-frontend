import { ListFilterIcon, SearchIcon } from "lucide-react";
import { PetCard } from "../components/petCard";
import { useState, ChangeEvent } from "react";
import { useFetchPets } from "@/services/pets/useFetchPets";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useFetchStates } from "@/services/organizations/useFetchStates";

export const Pets = () => {
  const { states } = useFetchStates();

  const navigate = useNavigate();

  const {
    petFilters,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  } = useFilterContext();

  const handleSelectState = (e: ChangeEvent<HTMLSelectElement>) => {
    const state = states.find((it) => it.state === e.target.value);

    setSelectedState(state);
    setSelectedCity(state?.cities[0]);
  };

  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = selectedState?.cities.find((it) => it === e.target.value);
    setSelectedCity(city);
  };

  const [showFilters, setShowFilters] = useState(false);

  const { pets } = useFetchPets(petFilters);

  return (
    <div className="h-screen w-screen overflow-auto bg-input-100">
      <div className="flex h-20 w-full items-center justify-between bg-red-200 px-6">
        <img
          className="w-32 cursor-pointer"
          src="/logo.png"
          alt="Find A Friend Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex flex-col gap-2 bg-red-100 px-6 py-4 text-white">
        <div className="flex flex-col items-center">
          <h1>Search for pets</h1>

          <div className="flex items-center gap-1.5">
            <select
              className="flex items-center rounded-xl border bg-red-100 p-3"
              onChange={handleSelectState}
              value={selectedState?.state}
            >
              <option>...</option>
              {states.map(({ state }) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <select
              className="flex items-center gap-0.5 rounded-xl bg-red-200 px-12 py-3"
              onChange={handleSelectCity}
              value={selectedCity}
            >
              <option>...</option>
              {selectedState?.cities.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </select>
            <button className="ml-2 rounded-xl bg-yellow p-3 text-blue-200">
              <SearchIcon size={20} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex w-full justify-between">
          <h1 className="font-bold">Filters</h1>
          <button onClick={() => setShowFilters((state) => !state)}>
            <ListFilterIcon />
          </button>
        </div>
        {showFilters && (
          <div className="mt-2 flex flex-col items-center gap-2">
            <div className="flex w-full max-w-96 flex-col items-center gap-1">
              <label htmlFor="age" className="self-start">
                Age
              </label>
              <select id="age" className="w-full rounded-xl bg-red-50 p-3" />
            </div>
            <div className="flex w-full max-w-96 flex-col items-center gap-1">
              <label htmlFor="energy" className="self-start">
                Energy Level
              </label>
              <select id="energy" className="w-full rounded-xl bg-red-50 p-3" />
            </div>
            <div className="flex w-full max-w-96 flex-col items-center gap-1">
              <label htmlFor="size" className="self-start">
                Size
              </label>
              <select id="size" className="w-full rounded-xl bg-red-50 p-3" />
            </div>
            <div className="flex w-full max-w-96 flex-col items-center gap-1">
              <label htmlFor="independency" className="self-start">
                Independency
              </label>
              <select
                id="independency"
                className="w-full rounded-xl bg-red-50 p-3"
              />
            </div>
            <div className="flex w-full max-w-96 flex-col items-center gap-1">
              <label htmlFor="independency" className="self-start">
                Independency
              </label>
              <select
                id="independency"
                className="w-full rounded-xl bg-red-50 p-3"
              />
            </div>

            <div className="flex w-full max-w-96 flex-col items-center gap-1">
              <label htmlFor="space_needed" className="self-start">
                Space Needed
              </label>
              <select
                id="space_needed"
                className="w-full rounded-xl bg-red-50 p-3"
              />
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-2">
        {!pets || pets.length == 0 ? (
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <h1 className="text-center text-lg font-semibold">
              No pets available! Try changing the filters and the city!
            </h1>
            <img className="w-48" src="/no-image-2.png" alt="Dog Image" />
          </div>
        ) : (
          <>
            <h1 className="text-center text-blue-200">
              Find{" "}
              <span className="font-bold">
                {pets.length} {pets.length === 1 ? "friend" : "friends"}
              </span>{" "}
              in your city
            </h1>
            <div className="my-4 flex flex-wrap justify-center gap-x-8 gap-y-6">
              {pets.map((pet) => (
                <a
                  key={pet.id}
                  className="w-min"
                  onClick={() => navigate(`/pets/${pet.id}`)}
                >
                  <PetCard pet={pet} />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
