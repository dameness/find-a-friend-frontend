import { BoxSelectIcon } from "lucide-react";

export const Pet = () => (
  <div className="flex h-screen flex-col overflow-auto bg-input-100 p-8">
    <div className="m-auto flex w-full max-w-2xl flex-col rounded-3xl bg-white">
      <div className="m-auto h-max max-h-[350px] w-full overflow-hidden rounded-t-xl">
        <img
          className="w-full rounded-t-3xl"
          src="/dog-test-image.jpeg"
          alt="Dog Image"
        />
      </div>

      <div className="text-blue-200 flex flex-col gap-4 p-6">
        <h1 className="text-4xl font-extrabold">Alfredo</h1>
        <p className="-mt-2 text-sm">
          Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
          dolor Lorem ipsum dolor
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="text-blue-200 w-full space-y-1 rounded-xl border border-gray-200 p-4 xs:w-36">
            <div className="flex items-center gap-1">
              <img
                className="w-3.5"
                src="/lightning-on.png"
                alt="Lightning Icon"
              />
              <img
                className="w-3.5"
                src="/lightning-on.png"
                alt="Lightning Icon"
              />
              <img
                className="w-3.5"
                src="/lightning-off.png"
                alt="Lightning Icon"
              />
            </div>
            <h1 className="text-sm font-semibold">Medium energy</h1>
          </div>
          <div className="text-blue-200 w-full space-y-1 rounded-xl border border-gray-200 p-4 xs:w-36">
            <BoxSelectIcon className="h-3.5 w-3.5" />
            <h1 className="text-sm font-semibold">Big space</h1>
          </div>
          <div className="text-blue-200 w-full space-y-1 rounded-xl border border-gray-200 p-4 xs:w-36">
            <div className="flex items-center gap-1">
              <img
                className="w-3.5"
                src="/lightning-on.png"
                alt="Lightning Icon"
              />
              <img
                className="w-3.5"
                src="/lightning-on.png"
                alt="Lightning Icon"
              />
              <img
                className="w-3.5"
                src="/lightning-off.png"
                alt="Lightning Icon"
              />
            </div>
            <h1 className="text-sm font-semibold">Medium energy</h1>
          </div>
        </div>
        <div className="h-24 w-full rounded-xl bg-input-200 text-center">
          map
        </div>

        <div className="bg-blue-200 m-auto flex w-full max-w-2xl gap-3 rounded-xl px-8 py-4">
          <div className="bg-orange flex h-12 w-12 min-w-12 items-center justify-center rounded-xl">
            <img className="w-5" src="/logo-icon.png" alt="Logo Icon" />
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-2xl font-bold">Your pet</h1>
            <p className="line-clamp-1 text-ellipsis text-[10px]">
              Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
            </p>
          </div>
        </div>

        <h1 className="mt-8 text-3xl font-extrabold">Requirements</h1>
        <p className="text-sm">
          Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
          dolor Lorem ipsum dolor
        </p>

        <button className="bg-green mb-10 mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl p-3 font-bold text-white">
          <img src="/whatsapp-icon.png" alt="Whatsapp Icon" />
          <h1>Contact organization</h1>
        </button>
      </div>
    </div>
  </div>
);
