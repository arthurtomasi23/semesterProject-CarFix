import SearchGuides from "@/components/SearchGuides";
import Sidebar from "@/components/Sidebar";
import { Flex, Input, SimpleGrid, Text, Box } from "@chakra-ui/react";
import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function searchForGuides() {
  const [searchInput, setSearchInput] = React.useState("");
  const [guides, setGuides] = React.useState([]);

  const supabase = useSupabaseClient();

  React.useEffect(() => {
    supabase
      .from("guides")
      .select("*")
      .then((result) => {
        if (result.error) {
          alert(result.error.message);
        } else {
          setGuides(result.data);
        }
      });
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };

  return (
    <Flex>
      <Flex mt="2.5vh" ml="8vw" w="100%" mr="2.5vw" p="1" flexDir="column">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" ml="1" mb="4">
            Search Results: {searchInput}
          </Text>
          <Input
            value={searchInput}
            onChange={handleChange}
            placeholder="Your Search Results"
            mb="4"
            w={{ base: "100%", md: "50%" }}
          />
        </Box>
        <SimpleGrid spacing={10} w="100%" columns={{ sm: 2, md: 3 }}>
          {guides.map((guideItem) => (
            <SearchGuides
              key={guideItem.title}
              guide={guideItem}
              searchInput={searchInput}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
