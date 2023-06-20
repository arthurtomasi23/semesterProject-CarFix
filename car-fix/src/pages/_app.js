import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const hideSidebarRoutes = ["/", "/login"]; // Routes where the sidebar should be hidden

  // Check if the current route is in the hideSidebarRoutes array
  const shouldHideSidebar = hideSidebarRoutes.includes(router.pathname);

  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <ChakraProvider>
      {!shouldHideSidebar && (
        <Flex>
          <Sidebar />
        </Flex>
      )}
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
