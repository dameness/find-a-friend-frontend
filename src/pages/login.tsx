import { DogsLogoCard } from "../components/DogsLogoCard";

export const Login = () => (
  <div className="flex h-full flex-col gap-12 p-6 text-blue lg:flex-row">
    <div className="lg:m-auto lg:basis-1/2">
      <DogsLogoCard />
    </div>

    <div className="lg:m-auto lg:basis-1/2">
      <div className="m-auto flex w-full max-w-2xl flex-col gap-4">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <div className="flex flex-col items-center">
          <label htmlFor="email" className="self-start font-semibold">
            E-mail
          </label>
          <input
            id="email"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
          />
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="password" className="self-start font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
          />
        </div>

        <div className="mb-10 flex flex-col items-center gap-y-3">
          <button className="w-full rounded-xl bg-blue p-3 font-bold text-input-100">
            Login
          </button>

          <button className="w-full rounded-xl bg-input-100 p-3 font-bold text-blue">
            Register my organization
          </button>
        </div>
      </div>
    </div>
  </div>
);
