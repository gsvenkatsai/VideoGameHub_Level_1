import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center gap-4">
      <Heading>Oops..</Heading>
      <Text className="text-zinc-500 dark:text-zinc-400">
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurred"}
      </Text>
    </div>
  );
};
export default ErrorPage;
