import { SubmitHandler, useForm } from "react-hook-form";
import { DogsLogoCard } from "../components/dogsLogoCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthenticate } from "@/services/organizations/useAuthenticate";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { Input } from "@/components/ui/input";

type LoginFormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate } = useAuthenticate();

  const { formState, register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: () => navigate("/pets"),
        onError: (error) => {
          console.error(error);
          toast.error(
            error instanceof AxiosError && error.response?.status == 403
              ? "Invalid credentials."
              : error.message,
          );
        },
      },
    );
  };

  return (
    <div className="flex h-full flex-col gap-12 p-6 text-blue-200 lg:flex-row">
      <div className="relative lg:m-auto lg:basis-1/2">
        <Link
          to={location?.state?.from || "/"}
          className="absolute -left-2 top-16 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-white"
        >
          <ArrowLeftIcon size={40} strokeWidth={3} />
        </Link>
        <DogsLogoCard />
      </div>

      <div className="lg:m-auto lg:basis-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto flex w-full max-w-2xl flex-col gap-4"
        >
          <h1 className="text-4xl font-bold">Welcome!</h1>

          <div className="flex flex-col items-center">
            <div className="flex w-full justify-between px-1">
              <label htmlFor="email" className="font-semibold">
                E-mail
              </label>
              <div className="text-end text-sm text-red-100">
                {formState.errors.email?.message}
              </div>
            </div>
            <Input
              id="email"
              error={formState.errors.email}
              {...register("email", {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Insert a valid e-mail",
                },
                required: {
                  value: true,
                  message: "E-mail required",
                },
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
            <Input
              id="password"
              type="password"
              autoComplete="on"
              error={formState.errors.password}
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password required (min. 6 digits)",
                },
                required: "Password required (min. 6 digits)",
              })}
            />
          </div>

          <div className="mb-10 flex flex-col items-center gap-y-3">
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-200 p-3 font-bold text-input-100"
            >
              Login
            </button>

            <Link
              to={"/signup"}
              className="w-full rounded-xl bg-input-100 p-3 text-center font-bold text-blue-200"
            >
              Register my organization
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
