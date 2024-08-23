import { ChevronDownIcon, SearchIcon } from "lucide-react";
export const Home = () => (
  <div className="flex h-screen w-screen flex-col justify-between gap-y-8 overflow-auto bg-red-100 p-6 text-white">
    <img
      src="/logo.png"
      alt="Find A Friend Logo"
      className="self-center md:self-start"
    />

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
          <div className="flex items-center rounded-xl border p-3">
            RS <ChevronDownIcon size={14} />
          </div>

          <div className="flex items-center gap-0.5 rounded-xl bg-red-200 px-12 py-3">
            <h1 className="line-clamp-1 text-ellipsis">Passo Fundo</h1>
            <ChevronDownIcon size={14} />
          </div>
          <button className="ml-2 rounded-xl bg-yellow p-3 text-blue">
            <SearchIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);
