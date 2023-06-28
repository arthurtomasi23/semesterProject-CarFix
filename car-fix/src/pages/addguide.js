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
  Image,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FiUpload } from "react-icons/fi";

export default function addguide() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [preview, setPreview] = useState();

  const carModels = {
    Audi: [
      "A1",
      "A2",
      "A3",
      "A4",
      "S4",
      "RS4",
      "A5",
      "S5",
      "RS5",
      "A6",
      "S6",
      "RS6",
      "A7",
      "S7",
      "RS7",
      "A8",
      "R8",
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
    const brand = event.target.value;
    setSelectedBrand(brand);
    setSelectedModel(""); //Resets the model to empty when the user changes the brand

    setDataToUpload((prevData) => ({
      ...prevData,
      selectedBrand: brand,
      selectedModel: "", //Resets the models to empty when brand changes to display right models
    }));
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);

    setDataToUpload((prevData) => ({
      ...prevData,
      selectedModel: model,
    }));
  };

  const supabase = useSupabaseClient();

  const uploadImage = async () => {
    const fileName = `public/${selectedImage.name}`;
    console.log(fileName, selectedImage);
    const { data, error } = await supabase.storage
      .from("GuideImages")
      .upload(fileName, selectedImage);
    console.log(data, error);

    if (error) {
      console.error("Error uploading file: ", error.message);
      return;
    }
    return data.path;
  };

  const [dataToUpload, setDataToUpload] = useState({
    created_at: "",
    title: "",
    short_description: "",
    full_description: "",
    selectedBrand: "",
    selectedModel: "",
    year: "",
    pictures: "",
  });
  const handleUpload = async () => {
    const path = await uploadImage();
    await uploadToTable(path);

    console.log("Data uploaded successfully:", guides);
  };

  const uploadToTable = async (path) => {
    if (!path) {
      return;
    }
    const { data, error } = await supabase.from("guides").insert([
      {
        ...dataToUpload,
        pictures: path,
      },
    ]);
  };

  const handleChange = (e) => {
    setDataToUpload({ ...dataToUpload, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = useRef();

  useEffect(() => {
    console.log(selectedImage);
    if (!selectedImage) {
      return;
    }
    // create the preview
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(preview);
  }, [selectedImage]);

  return (
    <Flex>
      <Flex
        p="1"
        justifyContent="center"
        flexDirection="column"
        w="100%"
        alignItems="center"
      >
        <Text m="10" fontSize="2xl">
          Add Your Own Step-by-Step Guide
        </Text>
        <Box>
          <Stack spacing={4} justifyContent="center" w="60vw">
            <FormControl>
              <FormLabel textAlign="center">Picture Upload</FormLabel>
              <Input
                alignItems="center"
                justifyContent="center"
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                accept={[".jpg", ".png", ".jpeg"]}
                placeholder="Upload explaining pictures"
                name="pictures"
                defaultValue={dataToUpload.pictures}
                onChange={handleImageChange}
              />
              {selectedImage ? (
                <Image ml="25%" w="50%" h="50%" size="cover" src={preview} />
              ) : (
                <Button
                  variant="outline"
                  borderStyle="dashed"
                  mt="5"
                  ml="25%"
                  w="50%"
                  p="28"
                  colorScheme="orange"
                  onClick={handleButtonClick}
                >
                  Upload your Images here!
                </Button>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Car Brand</FormLabel>
              <Select
                placeholder="Select Car Manufacturer"
                onChange={handleBrandChange}
                name="selectedBrand"
                defaultValue={dataToUpload.selectedBrand}
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
                name="selectedModel"
                defaultValue={dataToUpload.selectedModel}
              >
                {carModels[selectedBrand]?.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Year</FormLabel>
              <Select
                placeholder="Select Manufacturing Year"
                onChange={handleChange}
                name="year"
                defaultValue={dataToUpload.year}
              >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                variant="outline"
                placeholder="Give your guide a title"
                name="title"
                defaultValue={dataToUpload.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Short Description</FormLabel>
              <Input
                variant="outline"
                placeholder="Write a short description..."
                name="short_description"
                defaultValue={dataToUpload.short_description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Full Guide</FormLabel>
              <Textarea
                size="lg"
                variant="outline"
                placeholder="Write a Step by Step Guide to fixing this Issue... (Example: Step 1: Open the hood of your car...)"
                name="full_description"
                defaultValue={dataToUpload.full_description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl flexDir="row" display="flex" isRequired>
              <FormLabel alignSelf="center">Difficulty</FormLabel>
              <Select
                placeholder="Select difficulty level"
                w="40%"
                onChange={handleChange}
                name="difficulty"
                mr="2"
                defaultValue={dataToUpload.difficulty}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
              <FormLabel>Time</FormLabel>
              <Input
                placeholder="z.B. 30"
                onChange={handleChange}
                name="time"
                defaultValue={dataToUpload.time}
                htmlSize={6}
                width="auto%"
              />{" "}
              Minutes
            </FormControl>
            <FormControl>
              <FormLabel>When did you fix your car?</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name="created_at"
                defaultValue={dataToUpload.created_at}
                onChange={handleChange}
              />
              <FormHelperText>
                When no date and time is selected it will automatically select
                the current date and time
              </FormHelperText>
            </FormControl>
            <Flex justifyContent="end">
              <Button
                onClick={handleUpload}
                mt={4}
                colorScheme="orange"
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
