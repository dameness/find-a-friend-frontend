import { ListFilterIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import { PetCard } from "../components/petCard";
import { useState } from "react";

export const Pets = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="h-screen w-screen overflow-auto bg-input-100">
      <div className="flex h-20 w-full items-center justify-between bg-red-200 px-6">
        <img className="w-32" src="/logo.png" alt="Find A Friend Logo" />
      </div>
      <div className="flex flex-col gap-2 bg-red-100 px-6 py-4 text-white">
        <div className="flex flex-col items-center">
          <h1>Search for pets</h1>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center rounded-xl border p-3">
              RS <ChevronDownIcon size={14} />
            </div>

            <div className="flex items-center gap-0.5 rounded-xl bg-red-200 px-12 py-3">
              <h1 className="line-clamp-1 text-ellipsis">Passo Fundo</h1>
              <ChevronDownIcon size={14} />
            </div>
            <button className="text-blue-200 ml-2 rounded-xl bg-yellow p-3">
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
        <h1 className="text-blue-200 text-center">
          Find <span className="font-bold">146 friends</span> in your city
        </h1>
        <div className="my-4 flex flex-wrap justify-center gap-x-8 gap-y-6">
          <div className="w-min">
            <PetCard />
          </div>
          <div className="w-min">
            <PetCard />
          </div>
          <div className="w-min">
            <PetCard />
          </div>
        </div>
      </div>
    </div>
  );
};
