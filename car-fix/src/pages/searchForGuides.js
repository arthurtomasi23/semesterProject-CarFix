import SearchGuides from "@/components/SearchGuides";
import Sidebar from "@/components/Sidebar";
import { Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function searchForGuides() {
  const guides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "6",
      time: 30,
      title: "Oil Change",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "9",
      time: 30,
      title: "Cleaning Carbaurator",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "7",
      time: 30,
      title: "Changing Spark Plugs",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "8",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "3",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4",
      time: 30,
      title: "sitting",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "5",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "1",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "6",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "10",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
  ];

  const [searchInput, setSearchInput] = React.useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };

  return (
    <Flex>
      <Flex mt="2.5vh" ml="8vw" w="100%" mr="2.5vw" p="1" flexDir="column">
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
