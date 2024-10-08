import { twMerge } from "tailwind-merge";
import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type TextAreaProps = ComponentProps<"textarea"> & {
  error?: FieldError;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          `w-full resize-none rounded-lg border border-input-200 bg-input-100 p-2 ${
            error && "border !border-red-300"
          }`,
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
