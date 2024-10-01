import { Link, useLocation, useNavigate } from "react-router-dom";
import { DogsLogoCard } from "../components/dogsLogoCard";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useRegisterOrganization } from "@/services/organizations/useRegisterOrganization";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { Address } from "@/types/address";
import { maskCEP, maskPhone } from "@/utils/masks";

type SignUpFormValues = {
  name: string;
  email: string;
  phone: string;
  zip_code: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  password: string;
  confirm_password: string;
};

export const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate } = useRegisterOrganization();

  const { formState, register, handleSubmit, getValues, setValue, setError } =
    useForm<SignUpFormValues>({
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        zip_code: "",
        state: "",
        city: "",
        neighborhood: "",
        street: "",
        password: "",
        confirm_password: "",
      },
      mode: "onTouched",
    });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    mutate(data, {
      onSuccess: () => navigate("/pets"),
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    });
  };

  const onSubmitError: SubmitErrorHandler<SignUpFormValues> = (error) => {
    console.log(error);
  };

  const fetchCEP = async () => {
    const CEP = getValues("zip_code");

    if (CEP.length !== 9) return;

    try {
      const { data } = await axios.get<Address>(
        `https://brasilapi.com.br/api/cep/v2/${CEP}`,
      );

      setValue("state", data.state, { shouldValidate: true });
      setValue("city", data.city, { shouldValidate: true });
      setValue("neighborhood", data.neighborhood, { shouldValidate: true });
      setValue("street", data.street, { shouldValidate: true });
    } catch (error) {
      toast.error("Zip code not found!");

      console.error(error);

      setError("zip_code", { message: "Error: Zip code not found" });
      setValue("state", "", { shouldValidate: true });
      setValue("city", "", { shouldValidate: true });
      setValue("neighborhood", "", { shouldValidate: true });
      setValue("street", "", { shouldValidate: true });
    }
  };

  return (
    <div className="flex h-full flex-col gap-12 p-6 text-blue-200">
      <div className="relative">
        <DogsLogoCard />
        <Link
          to={location?.state?.from || "/"}
          className="absolute -left-2 top-16 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-white"
        >
          <ArrowLeftIcon size={40} strokeWidth={3} />
        </Link>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit, onSubmitError)}
        className="m-auto flex w-full max-w-2xl flex-col gap-4"
      >
        <h1 className="text-4xl font-bold">Register your organization</h1>
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.name?.message}
            </div>
          </div>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("name", {
              required: "Name required",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="email" className="font-semibold">
              E-mail
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.email?.message}
            </div>
          </div>
          <input
            id="email"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Insert a valid e-mail",
              },
              required: "E-mail required",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="phone" className="font-semibold">
              Phone
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.phone?.message}
            </div>
          </div>
          <input
            id="phone"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("phone", {
              required: "Phone required",
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: "Should be in (XX) 99999-9999 format",
              },
              onChange: (e) => {
                setValue("phone", maskPhone(e.target.value));
              },
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="zip-code" className="font-semibold">
              Zip Code (CEP)
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.zip_code?.message}
            </div>
          </div>
          <input
            id="zip-code"
            maxLength={9}
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("zip_code", {
              required: "Zip code required",
              minLength: { value: 9, message: "Zip code should have 8 digits" },
              onChange: (e) => {
                setValue("zip_code", maskCEP(e.target.value));
                fetchCEP();
              },
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="state" className="font-semibold">
              State
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.state?.message}
            </div>
          </div>
          <input
            id="state"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            {...register("state", {
              required: "State required",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="city" className="font-semibold">
              City
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.city?.message}
            </div>
          </div>
          <input
            id="city"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            {...register("city", {
              required: "City required",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="neighborhood" className="font-semibold">
              Neighborhood
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.neighborhood?.message}
            </div>
          </div>
          <input
            id="neighborhood"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            {...register("neighborhood", {
              required: "Neighborhood required",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="street" className="font-semibold">
              Address
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.street?.message}
            </div>
          </div>
          <input
            id="street"
            type="text"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("street", {
              required: "Street required",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.password?.message}
            </div>
          </div>
          <input
            id="password"
            type="password"
            autoComplete="on"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password required (min. 6 digits)",
              },
              required: "Password required (min. 6 digits)",
            })}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between px-1">
            <label htmlFor="confirm-password" className="font-semibold">
              Confirm Password
            </label>
            <div className="text-end text-sm text-red-100">
              {formState.errors.confirm_password?.message}
            </div>
          </div>
          <input
            id="confirm-password"
            type="password"
            autoComplete="on"
            className="w-full rounded-lg border border-input-200 bg-input-100 p-2"
            {...register("confirm_password", {
              required: "Confirm your password",
              validate: (value, formValues) =>
                value === formValues.password || "Password does not match",
            })}
          />
        </div>

        <div className="mb-10 flex flex-col items-center gap-y-3">
          <button className="w-full rounded-xl bg-blue-200 p-3 font-bold text-input-100">
            Register
          </button>

          <Link
            to={"/login"}
            className="w-full rounded-xl bg-input-100 p-3 text-center font-bold text-blue-200"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};
