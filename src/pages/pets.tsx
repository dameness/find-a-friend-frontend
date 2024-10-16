import { ListFilterIcon, SearchIcon } from "lucide-react";
import { PetCard } from "../components/petCard";
import { useState, ChangeEvent, useEffect } from "react";
import { useFetchPets } from "@/services/pets/useFetchPets";
import { useNavigate, Link } from "react-router-dom";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useFetchStates } from "@/services/organizations/useFetchStates";
import { PetFilterInputs } from "@/components/petFilterInputs";
import { logout } from "@/utils/logout";
import { useFetchOrganization } from "@/services/organizations/useFetchOrganization";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Select } from "@/components/ui/select";

export const Pets = () => {
  const { states } = useFetchStates();

  const navigate = useNavigate();

  const { decodedToken, isUserAuthenticated } = useAuthContext();

  const organizationId = decodedToken?.sub;

  const { organization } = useFetchOrganization(organizationId!);

  const {
    petFilters,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  } = useFilterContext();

  const [showFilters, setShowFilters] = useState(false);

  const { pets, isFetched } = useFetchPets(petFilters);

  const handleSelectState = (e: ChangeEvent<HTMLSelectElement>) => {
    const state = states.find((it) => it.state === e.target.value);

    setSelectedState(state);
    setSelectedCity(state?.cities[0]);
  };

  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = selectedState?.cities.find((it) => it === e.target.value);
    setSelectedCity(city);
  };

  useEffect(() => {
    if (selectedCity) return;

    if (organization) {
      setSelectedState(states.find((it) => it.state === organization.state));
      setSelectedCity(organization.city);
      return;
    }

    setSelectedState(states[0]);
    setSelectedCity(states[0]?.cities[0]);
  }, [organization, states]);

  return (
    <div className="h-screen w-screen overflow-auto bg-input-100">
      <div className="flex h-[90px] w-full flex-col items-center justify-between bg-red-200 px-6 py-2 xs:flex-row">
        <img
          className="w-32 cursor-pointer"
          src="/logo.png"
          alt="Find A Friend Logo"
          onClick={() => navigate("/")}
        />

        {isUserAuthenticated ? (
          <div className="flex items-center gap-3 text-sm xs:text-base">
            <Link
              to={"/pets/register"}
              className="rounded-xl border p-1 font-bold text-input-100 xs:px-2 xs:py-1"
            >
              Register pet
            </Link>
            <button
              onClick={logout}
              className="rounded-xl p-1 font-bold text-input-100 xs:px-2 xs:py-1"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-sm xs:text-base">
            <Link
              to={"/login"}
              state={{ from: "/pets" }}
              className="rounded-xl font-bold text-input-100"
            >
              Login
            </Link>

            <Link
              to={"/signup"}
              state={{ from: "/pets" }}
              className="rounded-xl font-bold text-input-100"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 bg-red-100 px-6 py-4 text-white">
        <div className="flex flex-col items-center">
          <h1>Search for pets</h1>

          <div className="flex items-center gap-1.5">
            <Select
              className="min-w-max border bg-red-100"
              onChange={handleSelectState}
              value={selectedState?.state}
            >
              <option disabled />
              {states.map(({ state }) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>

            <Select
              className="w-min bg-red-200 px-12"
              onChange={handleSelectCity}
              value={selectedCity}
            >
              <option disabled />
              {selectedState?.cities.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
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

        {showFilters && <PetFilterInputs />}
      </div>
      <div className="px-4 py-2">
        {(!pets || pets.length == 0) && isFetched ? (
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
                  <PetCard imageUrl={pet.image_url} name={pet.name} />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
