import { useFilterContext } from "@/hooks/useFilterContext";
import { PetAge, PetLevel, PetSize } from "@/types/pets";
import { Select } from "./ui/select";

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
        <Select
          className="bg-red-50"
          value={petFilters.age ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              age:
                e.target.value === "" ? undefined : (e.target.value as PetAge),
            }))
          }
          id="age"
        >
          <option value={""}>Select...</option>
          <option value={"PUPPY"}>Puppy</option>
          <option value={"ADULT"}>Adult</option>
          <option value={"SENIOR"}>Senior</option>
        </Select>
      </div>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="energy" className="self-start">
          Energy Level
        </label>
        <Select
          className="bg-red-50"
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
        >
          <option value={""}>Select...</option>
          <option value={"LOW"}>Low</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"HIGH"}>High</option>
        </Select>
      </div>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="size" className="self-start">
          Size
        </label>
        <Select
          className="bg-red-50"
          value={petFilters.size ?? ""}
          onChange={(e) =>
            setPetFilters((filters) => ({
              ...filters,
              size:
                e.target.value === "" ? undefined : (e.target.value as PetSize),
            }))
          }
          id="size"
        >
          <option value={""}>Select...</option>
          <option value={"SMALL"}>Small</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"BIG"}>Big</option>
        </Select>
      </div>
      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="independency" className="self-start">
          Independency
        </label>
        <Select
          className="bg-red-50"
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
        >
          <option value={""}>Select...</option>
          <option value={"LOW"}>Low</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"HIGH"}>High</option>
        </Select>
      </div>

      <div className="flex w-full max-w-96 flex-col items-center gap-1">
        <label htmlFor="space_needed" className="self-start">
          Space Needed
        </label>
        <Select
          className="bg-red-50"
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
        >
          <option value={""}>Select...</option>
          <option value={"LOW"}>Low</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"HIGH"}>High</option>
        </Select>
      </div>
    </div>
  );
};
