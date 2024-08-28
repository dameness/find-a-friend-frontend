import { Pet } from "@/types/pets";

interface PetCardProps {
  pet: Pet;
}

export const PetCard = ({ pet }: PetCardProps) => (
  <div className="relative m-auto h-52 w-64 rounded-xl bg-white p-1">
    <div className="h-2/3 overflow-hidden rounded-xl">
      <img
        className="mx-auto h-auto w-full rounded-xl"
        src={pet.image_url}
        alt="Dog Image"
      />
    </div>

    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 translate-x-[-50%] items-center justify-center rounded-lg border-2 border-white bg-red-100">
      <img className="w-5" src="/logo-icon.png" alt="Logo Icon" />
    </div>

    <div className="flex h-1/3 items-center justify-center">
      <h1 className="font-bold text-blue-200">{pet.name}</h1>
    </div>
  </div>
);
