import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
  error?: FieldError;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      className={twMerge(
        `w-full rounded-lg border border-input-200 bg-input-100 p-2 text-inherit disabled:cursor-not-allowed disabled:bg-gray-300 ${
          error && "border !border-red-300"
        }`,
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);
