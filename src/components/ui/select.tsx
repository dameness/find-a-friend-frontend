import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type SelectProps = ComponentProps<"select"> & {
  error?: FieldError;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, ...props }, ref) => (
    <select
      className={twMerge(
        `flex w-full items-center gap-0.5 rounded-xl p-3 ${error && "border !border-red-300"}`,
        className,
      )}
      ref={ref}
      {...props}
    >
      {props.children}
    </select>
  ),
);
