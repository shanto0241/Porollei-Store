'use client'
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-lg shadow-xl">
      <h1 className="mb-4 text-4xl font-bold">{`${APP_NAME}`}</h1>

      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        height={48}
        width={48}
        priority={true}
      />
      <div className="p-6 text-center">
        <h1 className="mb-4 text-2xl font-bold">404</h1>
        <h1 className="text-xl font-bold">Page not found</h1>
        <p className="text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <Button
          variant = 'outline'
          className="mt-4 ml-2"
          onClick={() => (window.location.href = '/')}
        >
          {" "}
          Go back to Home{" "}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
