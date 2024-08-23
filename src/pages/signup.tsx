import { DogsLogoCard } from "../components/DogsLogoCard";

export const SignUp = () => (
  <div className="flex h-full flex-col gap-12 p-6 text-blue">
    <DogsLogoCard />

    <div className="m-auto flex w-full max-w-2xl flex-col gap-4">
      <h1 className="text-4xl font-bold">Register your organization</h1>
      <div className="flex flex-col items-center">
        <label htmlFor="name" className="self-start font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>
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
        <label htmlFor="zip-code" className="self-start font-semibold">
          Zip Code
        </label>
        <input
          id="zip-code"
          type="text"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="address" className="self-start font-semibold">
          Address
        </label>
        <input
          id="address"
          type="text"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>

      <div className="h-24 w-full rounded-xl bg-input-200 text-center">map</div>

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

      <div className="flex flex-col items-center">
        <label htmlFor="confirm-password" className="self-start font-semibold">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>

      <div className="mb-10 flex flex-col items-center gap-y-3">
        <button className="w-full rounded-xl bg-blue p-3 font-bold text-input-100">
          Register
        </button>

        <button className="w-full rounded-xl bg-input-100 p-3 font-bold text-blue">
          Already have an account?
        </button>
      </div>
    </div>
  </div>
);
