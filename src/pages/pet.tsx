import { ArrowLeftIcon, BoxSelectIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useFetchPet } from "@/services/pets/useFetchPet";
import { PetEnergyIcons } from "@/components/petEnergyIcons";
import { PetSizeIcons } from "@/components/petSizeIcons";
import { useFetchOrganization } from "@/services/organizations/useFetchOrganization";
import { ErrorPage } from "./error";

export const Pet = () => {
  const { id } = useParams() as { id: string };

  const { pet } = useFetchPet(id);

  const { organization } = useFetchOrganization(pet?.organization_id ?? "");

  if (!id || !pet || !organization)
    return <ErrorPage errorMessage="Oops! Pet not found!" />;

  return (
    <div className="flex h-screen flex-col overflow-auto bg-input-100 p-8">
      <div className="m-auto flex w-full max-w-2xl flex-col rounded-3xl bg-white">
        <div className="relative m-auto h-max max-h-[350px] w-full overflow-hidden rounded-t-xl">
          <img
            className="w-full rounded-t-3xl"
            src={pet.image_url}
            alt="Dog Image"
          />

          <Link
            to="/pets"
            className="absolute -left-2 top-16 flex h-16 w-16 items-center justify-center rounded-xl bg-red-100 text-white"
          >
            <ArrowLeftIcon size={40} strokeWidth={3} />
          </Link>
        </div>

        <div className="flex flex-col gap-4 p-6 text-blue-200">
          <h1 className="text-4xl font-extrabold">{pet.name}</h1>
          <p className="-mt-2 text-sm">{pet.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="w-full space-y-1 rounded-xl border border-gray-200 p-4 text-blue-200 xs:w-36">
              <PetEnergyIcons energy={pet.energy} />

              <h1 className="text-sm font-semibold capitalize">
                {pet.energy.toLowerCase()} energy
              </h1>
            </div>
            <div className="w-full space-y-1 rounded-xl border border-gray-200 p-4 text-blue-200 xs:w-36">
              <BoxSelectIcon className="h-3.5 w-3.5" />
              <h1 className="text-sm font-semibold capitalize">
                {pet.space_needed.toLocaleLowerCase()} space
              </h1>
            </div>
            <div className="w-full space-y-1 rounded-xl border border-gray-200 p-4 text-blue-200 xs:w-36">
              <PetSizeIcons size={pet.size} />

              <h1 className="text-sm font-semibold capitalize">
                {pet.size.toLocaleLowerCase()} size
              </h1>
            </div>
          </div>
          <div className="h-24 w-full rounded-xl bg-input-200 text-center">
            map
          </div>

          <div className="m-auto flex w-full max-w-2xl gap-3 rounded-xl bg-blue-200 px-8 py-4">
            <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-orange">
              <img className="w-5" src="/logo-icon.png" alt="Logo Icon" />
            </div>
            <div className="flex flex-col text-white">
              <h1 className="text-2xl font-bold">Your pet location</h1>
              <p className="line-clamp-1 text-ellipsis text-[10px]">
                {organization?.address}
              </p>
            </div>
          </div>

          {pet.requirements && (
            <>
              <h1 className="mt-8 text-3xl font-extrabold">Requirements</h1>
              <p className="text-sm">{pet.requirements}</p>
            </>
          )}

          <a
            href={`https://wa.me/${organization?.phone}`}
            target="_blank"
            className="mb-10 mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-green p-3 font-bold text-white"
          >
            <img src="/whatsapp-icon.png" alt="Whatsapp Icon" />
            <h1>Contact organization</h1>
          </a>
        </div>
      </div>
    </div>
  );
};
