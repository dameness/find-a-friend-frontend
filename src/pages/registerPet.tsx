import { LogOutIcon } from "lucide-react";

export const RegisterPet = () => (
  <div className="flex h-full flex-col gap-6 overflow-auto bg-input-100 p-8">
    <div className="m-auto flex w-full max-w-2xl justify-between gap-3 rounded-xl bg-blue-200 px-8 py-4">
      <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-orange">
        <img className="w-5" src="/logo-icon.png" alt="Logo Icon" />
      </div>
      <div className="flex flex-col text-white">
        <h1 className="text-2xl font-bold">Your pet</h1>
        <p className="line-clamp-1 text-ellipsis text-[10px]">
          Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
        </p>
      </div>
      <button className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-blue-100">
        <LogOutIcon className="w-5 text-white" />
      </button>
    </div>

    <div className="m-auto flex w-full max-w-2xl flex-col gap-4 rounded-xl bg-white p-6 text-blue-200">
      <h1 className="text-center text-3xl font-bold">Register your pet</h1>
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
        <label htmlFor="description" className="self-start font-semibold">
          About
        </label>
        <textarea
          id="description"
          className="w-full resize-none rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-1">
        <label htmlFor="age" className="self-start">
          Age
        </label>
        <select
          id="age"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <label htmlFor="energy" className="self-start">
          Energy Level
        </label>
        <select
          id="energy"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <label htmlFor="size" className="self-start">
          Size
        </label>
        <select
          id="size"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <label htmlFor="independency" className="self-start">
          Independency
        </label>
        <select
          id="independency"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <label htmlFor="space_needed" className="self-start">
          Space Needed
        </label>
        <select
          id="space_needed"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="self-start font-semibold">Images</div>
        <div className="h-24 w-full rounded-xl bg-input-200 text-center">
          drag and drop image
        </div>
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="requirements" className="self-start font-semibold">
          Requirements
        </label>
        <input
          id="requirements"
          type="text"
          className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
        />
      </div>

      <button className="my-10 w-full rounded-xl bg-yellow p-3 font-bold text-blue-200">
        Confirm
      </button>
    </div>
  </div>
);
