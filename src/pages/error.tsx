import { Link } from "react-router-dom";

interface ErrorPageProps {
  errorMessage?: string;
}

export const ErrorPage = ({
  errorMessage = "Oops! Unexpected Error!",
}: ErrorPageProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-semibold">{errorMessage}</h1>
      <Link
        className="mb-6 text-center text-lg font-semibold text-blue-100"
        to="/"
      >
        Go Home
      </Link>
      <img className="w-48" src="/no-image-2.png" alt="Dog Image" />
    </div>
  );
};
