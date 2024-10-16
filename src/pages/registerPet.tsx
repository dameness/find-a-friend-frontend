import { ArrowLeftIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useFetchOrganization } from "@/services/organizations/useFetchOrganization";
import { RegisterPetFormValues } from "@/types/pets";
import { useRegisterPet } from "@/services/pets/useRegisterPet";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { toast } from "sonner";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";

export const RegisterPet = () => {
  const { formState, register, handleSubmit } = useForm<RegisterPetFormValues>({
    defaultValues: {
      name: "",
      age: "ADULT",
      size: "MEDIUM",
      energy: "MEDIUM",
      independency: "MEDIUM",
      space_needed: "MEDIUM",
    },
  });

  const { mutate } = useRegisterPet();

  const { decodedToken } = useAuthContext();

  const organizationId = decodedToken?.sub;

  const { organization } = useFetchOrganization(organizationId!);

  const onSubmit: SubmitHandler<RegisterPetFormValues> = async (data) => {
    mutate(
      { ...data, organization_id: organizationId! },
      {
        onError: (error) => {
          console.error(error);
          toast.error(error.message);
        },
      },
    );
  };

  if (!organization)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-lg font-semibold">
          You are not logged as an organization!
        </h1>
        <Link
          className="mb-6 text-center text-lg font-semibold text-blue-100"
          to="/"
        >
          Go Home
        </Link>
        <img className="w-48" src="/no-image-2.png" alt="Dog Image" />
      </div>
    );

  return (
    <div className="flex h-full flex-col gap-6 overflow-auto bg-input-100 p-8">
      <div className="m-auto flex w-full max-w-2xl justify-between gap-3 rounded-xl bg-blue-200 px-8 py-4">
        <Link
          to={"/pets"}
          className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-blue-100"
        >
          <ArrowLeftIcon className="w-5 text-white" />
        </Link>
        <div className="flex flex-col text-white">
          <h1 className="text-2xl font-bold">Your pet</h1>
          <p className="line-clamp-1 text-ellipsis text-[10px]">
            {organization?.address}
          </p>
        </div>
        <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-orange">
          <img className="w-5" src="/logo-icon.png" alt="Logo Icon" />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto flex w-full max-w-2xl flex-col gap-4 rounded-xl bg-white p-6 text-blue-200"
      >
        <h1 className="text-center text-3xl font-bold">Register your pet</h1>
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.name?.message}
            </div>
          </div>
          <Input
            id="name"
            error={formState.errors.name}
            {...register("name", { required: "Name required" })}
          />
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="description" className="self-start font-semibold">
            About
          </label>
          <TextArea id="description" rows={3} {...register("description")} />
        </div>

        <div className="flex w-full flex-col items-center gap-1">
          <label htmlFor="age" className="self-start">
            Age
          </label>
          <Select
            id="age"
            className="border border-input-200 bg-input-100"
            {...register("age")}
          >
            <option value={"PUPPY"}>Puppy</option>
            <option value={"ADULT"}>Adult</option>
            <option value={"SENIOR"}>Senior</option>
          </Select>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <label htmlFor="energy" className="self-start">
            Energy Level
          </label>
          <Select
            id="energy"
            className="border border-input-200 bg-input-100"
            {...register("energy")}
          >
            <option value={"LOW"}>Low</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"HIGH"}>High</option>
          </Select>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <label htmlFor="size" className="self-start">
            Size
          </label>
          <Select
            id="size"
            className="border border-input-200 bg-input-100"
            {...register("size")}
          >
            <option value={"SMALL"}>Small</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"BIG"}>Big</option>
          </Select>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <label htmlFor="independency" className="self-start">
            Independency
          </label>
          <Select
            id="independency"
            className="border border-input-200 bg-input-100"
            {...register("independency")}
          >
            {" "}
            <option value={"LOW"}>Low</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"HIGH"}>High</option>
          </Select>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <label htmlFor="space_needed" className="self-start">
            Space Needed
          </label>
          <Select
            id="space_needed"
            className="border border-input-200 bg-input-100"
            {...register("space_needed")}
          >
            <option value={"LOW"}>Low</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"HIGH"}>High</option>
          </Select>
        </div>

        <div className="flex flex-col items-center">
          <div className="self-start font-semibold">Image</div>
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            {...register("image")}
          />
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="requirements" className="self-start font-semibold">
            Requirements
          </label>
          <Input
            id="requirements"
            error={formState.errors.requirements}
            {...register("requirements")}
          />
        </div>

        <button
          type="submit"
          className="my-10 w-full rounded-xl bg-yellow p-3 font-bold text-blue-200"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};
