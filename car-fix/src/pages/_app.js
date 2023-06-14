// _app.js
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const hideSidebarRoutes = ["/", "/login"]; // Routes where the sidebar should be hidden

  // Check if the current route is in the hideSidebarRoutes array
  const shouldHideSidebar = hideSidebarRoutes.includes(router.pathname);

  return (
    <ChakraProvider>
      {!shouldHideSidebar && (
        <Flex>
          <Sidebar />
        </Flex>
      )}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
