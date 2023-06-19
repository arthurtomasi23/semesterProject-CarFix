import SearchGuides from "@/components/SearchGuides";
import Sidebar from "@/components/Sidebar";
import {
  Flex,
  Stack,
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Button,
  Textarea,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function addguide() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const carModels = {
    Audi: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "Q2",
      "Q3",
      "Q5",
      "Q7",
      "Q8",
      "TT",
    ],
    BMW: [
      "1er",
      "2er",
      "3er",
      "4er",
      "5er",
      "6er",
      "7er",
      "8er",
      "X1",
      "X2",
      "X3",
      "X4",
      "X5",
      "X6",
      "X7",
      "Z4",
    ],
    "Mercedes Benz": [
      "A-Klasse",
      "B-Klasse",
      "C-Klasse",
      "E-Klasse",
      "S-Klasse",
      "CLA",
      "CLS",
      "GLA",
      "GLB",
      "GLC",
      "GLE",
      "GLS",
      "SL",
      "SLC",
      "AMG GT",
    ],
    Hyundai: [
      "i10",
      "i20",
      "i30",
      "i40",
      "Ioniq",
      "Kona",
      "Nexo",
      "Tucson",
      "Santa Fe",
      "H-1 Travel",
      "H350",
    ],
    Honda: [
      "Civic",
      "CR-V",
      "HR-V",
      "Jazz",
      "NSX",
      "e",
      "Jazz Crosstar",
      "CR-V Hybrid",
      "Honda e",
    ],
    Toyota: [
      "Aygo",
      "Yaris",
      "Corolla",
      "Camry",
      "C-HR",
      "RAV4",
      "Prius",
      "GT86",
      "Supra",
      "Land Cruiser",
      "Hilux",
      "Proace City",
    ],
    Volkswagen: [
      "up!",
      "Polo",
      "Golf",
      "T-Cross",
      "T-Roc",
      "Tiguan",
      "Touran",
      "Passat",
      "Arteon",
      "Sharan",
      "Touareg",
      "ID.3",
      "ID.4",
    ],
    KIA: [
      "Picanto",
      "Rio",
      "Ceed",
      "Stonic",
      "Niro",
      "Sportage",
      "Sorento",
      "Soul",
      "Optima",
      "Stinger",
      "XCeed",
      "e-Niro",
      "e-Soul",
    ],
    Skoda: [
      "Citigo",
      "Fabia",
      "Rapid",
      "Scala",
      "Octavia",
      "Superb",
      "Kamiq",
      "Karoq",
      "Kodiaq",
      "Enyaq iV",
    ],
    Volvo: [
      "V40",
      "V60",
      "V90",
      "XC40",
      "XC60",
      "XC90",
      "S60",
      "S90",
      "XC40 Recharge",
      "XC90 Recharge",
    ],
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <Flex>
      <Flex
        p="1"
        justifyContent="center"
        h="80vh"
        mt="10vh"
        flexDirection="column"
        w="100%"
        alignItems="center"
      >
        <Text m="5" fontSize="2xl">
          Add Your Own Step-by-Step Guide
        </Text>
        <Box>
          <Stack spacing={4} justifyContent="center" w="60vw">
            <FormControl isRequired>
              <FormLabel>Car Brand</FormLabel>
              <Select
                placeholder="Select Car Manufacturer"
                onChange={handleBrandChange}
                value={selectedBrand}
              >
                <option value="Mercedes Benz">Mercedes Benz</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Honda">Honda</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="KIA">KIA</option>
                <option value="Skoda">Skoda</option>
                <option value="Volvo">Volvo</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Model</FormLabel>
              <Select
                placeholder="Select Model"
                onChange={handleModelChange}
                value={selectedModel}
              >
                {carModels[selectedBrand]?.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input variant="outline" placeholder="Give your guide a title" />
            </FormControl>
            <FormControl>
              <FormLabel>Short Description</FormLabel>
              <Input
                variant="outline"
                placeholder="Write a short description..."
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Full Guide</FormLabel>
              <Textarea
                size="lg"
                variant="outline"
                placeholder="Write a Step by Step Guide to fixing this Issue... (Example: Step 1: Open the hood of your car...)"
              />
            </FormControl>
            <FormControl>
              <FormLabel>When did you fix your car?</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <FormHelperText>
                When no date and time is selected it will automatically select
                the current date and time
              </FormHelperText>
            </FormControl>
            <Flex justifyContent="end">
              <Button
                mt={4}
                colorScheme="orange"
                //isLoading={props.isSubmitting}
                type="submit"
                w="15%"
              >
                Submit
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
