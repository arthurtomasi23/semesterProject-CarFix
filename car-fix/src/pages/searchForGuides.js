import SearchGuides from "@/components/SearchGuides";
import Sidebar from "@/components/Sidebar";
import { Flex, Input, SimpleGrid, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function searchForGuides() {
  const guides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Car tire replacement",
      difficulty: 2,
      time: 60,
      title: "Car Tire Replacement",
      shortIntroduction: "Learn how to replace tires on your car",
    },
    {
      imageUrl:
        "https://signtest.pk/wp-content/uploads/2021/07/car-oil-change.png",
      imageAlt: "Car oil change",
      difficulty: 5,
      time: 45,
      title: "Car Oil Change",
      shortIntroduction: "Learn how to change the oil in your car",
    },
    {
      imageUrl:
        "https://iultrasonic.com/product_images/uploaded_images/carburetor-cleaning-ultrasonic-cleaner.jpeg",
      imageAlt: "Carburetor cleaning",
      difficulty: 8,
      time: 90,
      title: "Carburetor Cleaning",
      shortIntroduction: "Learn how to clean the carburetor in your car",
    },
    {
      imageUrl:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-change-spark-plugs-step-72023jpg.jpg",
      imageAlt: "Spark plug replacement",
      difficulty: 5,
      time: 30,
      title: "Spark Plug Replacement",
      shortIntroduction: "Learn how to replace spark plugs in your car",
    },
    {
      imageUrl:
        "https://www.mycertifiedservice.com/content/dam/mcs/na/us/en/index/vehicle-maintenance/batteries/01-images/certified-service-technician-replacing-auto-battery.jpg?imwidth=960",
      imageAlt: "Car battery replacement",
      difficulty: 1,
      time: 20,
      title: "Car Battery Replacement",
      shortIntroduction: "Learn how to replace the battery in your car",
    },
    {
      imageUrl:
        "https://www.driving.co.uk/wp-content/uploads/sites/5/2017/12/Haynes-How-To-change-a-cars-front-brake-pads.jpg",
      imageAlt: "Brake pad replacement",
      difficulty: 6,
      time: 60,
      title: "Brake Pad Replacement",
      shortIntroduction: "Learn how to replace brake pads in your car",
    },
    {
      imageUrl:
        "https://www.hella-bulbs.com/storage/app/media/uploaded-files/10114444a_AM0.jpg",
      imageAlt: "Headlight bulb replacement",
      difficulty: 2,
      time: 30,
      title: "Headlight Bulb Replacement",
      shortIntroduction: "Learn how to replace headlight bulbs in your car",
    },
    {
      imageUrl:
        "https://blog.way.com/wp-content/uploads/2022/11/labor-cost-to-replace-alternator.jpg",
      imageAlt: "Alternator replacement",
      difficulty: 9,
      time: 120,
      title: "Alternator Replacement",
      shortIntroduction: "Learn how to replace the alternator in your car",
    },
    {
      imageUrl:
        "https://bigchieftire.com/wp-content/uploads/wheel-alignment.jpg",
      imageAlt: "Wheel alignment",
      difficulty: 9,
      time: 60,
      title: "Wheel Alignment",
      shortIntroduction: "Learn how to perform wheel alignment on your car",
    },
    {
      imageUrl:
        "https://k8p8c4c8.rocketcdn.me/wp-content/uploads/2019/12/20191204_125524.jpg",
      imageAlt: "Radiator replacement",
      difficulty: 8,
      time: 120,
      title: "Radiator Replacement",
      shortIntroduction: "Learn how to replace the radiator in your car",
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
