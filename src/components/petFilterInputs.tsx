import { useFilterContext } from "@/hooks/useFilterContext";
import { PetAge, PetLevel, PetSize } from "@/types/pets";

export const PetFilterInputs = () => {
  const { petFilters, setPetFilters } = useFilterContext();

  return (
    <div className="mt-2 flex flex-col items-center gap-2">
      <button
        onClick={() => setPetFilters((filters) => ({ city: filters.city }))}
        className="-mb-2 self-end px-3 py-1 font-bold underline"
      >
        Clear Filters
      </button>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="age" className="self-start">
          Age
        </label>
        <select
          value={petFilters.age ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              age:
                e.target.value === "" ? undefined : (e.target.value as PetAge),
            }))
          }
          id="age"
          className="w-full rounded-xl bg-red-50 p-3"
        >
          <option value={""}>Select...</option>
          <option value={"PUPPY"}>Puppy</option>
          <option value={"ADULT"}>Adult</option>
          <option value={"SENIOR"}>Senior</option>
        </select>
      </div>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="energy" className="self-start">
          Energy Level
        </label>
        <select
          value={petFilters.energy ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              energy:
                e.target.value === ""
                  ? undefined
                  : (e.target.value as PetLevel),
            }))
          }
          id="energy"
          className="w-full rounded-xl bg-red-50 p-3"
        >
          <option value={""}>Select...</option>
          <option value={"LOW"}>Low</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"HIGH"}>High</option>
        </select>
      </div>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="size" className="self-start">
          Size
        </label>
        <select
          value={petFilters.size ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              size:
                e.target.value === "" ? undefined : (e.target.value as PetSize),
            }))
          }
          id="size"
          className="w-full rounded-xl bg-red-50 p-3"
        >
          <option value={""}>Select...</option>
          <option value={"SMALL"}>Small</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"BIG"}>Big</option>
        </select>
      </div>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="independency" className="self-start">
          Independency
        </label>
        <select
          value={petFilters.independency ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              independency:
                e.target.value === ""
                  ? undefined
                  : (e.target.value as PetLevel),
            }))
          }
          id="independency"
          className="w-full rounded-xl bg-red-50 p-3"
        >
          <option value={""}>Select...</option>
          <option value={"LOW"}>Low</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"HIGH"}>High</option>
        </select>
      </div>

      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="space_needed" className="self-start">
          Space Needed
        </label>
        <select
          value={petFilters.space_needed ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              space_needed:
                e.target.value === ""
                  ? undefined
                  : (e.target.value as PetLevel),
            }))
          }
          id="space_needed"
          className="w-full rounded-xl bg-red-50 p-3"
        >
          <option value={""}>Select...</option>
          <option value={"LOW"}>Low</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"HIGH"}>High</option>
        </select>
      </div>
    </div>
  );
};
