import { Select } from "@/components/ui/select";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useFetchStates } from "@/services/organizations/useFetchStates";
import { SearchIcon } from "lucide-react";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { isUserAuthenticated } = useAuthContext();

  const { selectedState, setSelectedState, selectedCity, setSelectedCity } =
    useFilterContext();

  const { states } = useFetchStates();

  const navigate = useNavigate();

  const handleSelectState = (e: ChangeEvent<HTMLSelectElement>) => {
    const state = states.find((it) => it.state === e.target.value);

    setSelectedState(state);
    setSelectedCity(state?.cities[0]);
  };

  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = selectedState?.cities.find((it) => it === e.target.value);
    setSelectedCity(city);
  };

  return (
    <div className="flex h-full w-screen flex-col justify-between gap-y-8 overflow-auto bg-red-100 p-6 text-white">
      <div className="flex w-full flex-col items-center justify-between xs:flex-row">
        <img src="/logo.png" alt="Find A Friend Logo" />
        {!isUserAuthenticated && (
          <div className="-mb-10 -mt-1 ml-4 flex items-center gap-4 xs:m-0 xs:gap-2">
            <Link
              to={"/login"}
              className="rounded-xl font-bold text-input-100 xs:bg-blue-100 xs:px-4 xs:py-3"
            >
              Login
            </Link>

            <Link
              to={"/signup"}
              className="rounded-xl font-bold text-input-100 xs:bg-yellow xs:px-4 xs:py-3 xs:text-blue-100"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-around gap-y-6 lg:flex-row">
        <h1 className="text-center text-3xl font-extrabold md:text-4xl">
          Bring happiness home
        </h1>

        <img
          src="/dogs-home.png"
          className="xs:max-w-[420px] sm:max-w-screen-xs"
          alt="Dogs Image"
        />
      </div>

      <div className="flex flex-col items-center justify-around gap-y-6 md:flex-row">
        <div className="text-center text-xl">
          Find the perfect buddy for your lifestyle
        </div>

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
            <button
              className="ml-2 rounded-xl bg-yellow p-3 text-blue-200"
              onClick={() => {
                navigate("/pets");
              }}
            >
              <SearchIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
