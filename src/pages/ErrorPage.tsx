import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] dark:text-white flex flex-col items-center justify-center gap-3">
      <Heading color="inherit">Oops..</Heading>
      <Text className="text-sm text-zinc-500 dark:text-[#5f6368]">
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurred"}
      </Text>
    </div>
  );
};
export default ErrorPage;
