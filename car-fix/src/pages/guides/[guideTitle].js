import React from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Image, Box, Text, Icon, Flex } from "@chakra-ui/react";
import { MdTimer } from "react-icons/md";

export default function guide({ data }) {
  console.log(data);
  const fullDescription = data[0].full_description;
  const steps = fullDescription.split("Step");
  // Split the full description into an array of steps
  return (
    <Box w="80%" justifyContent="center" ml="10%" mt="10">
      <Text fontSize="3xl">{data[0].title}</Text>
      <Box display="flex" flexDir="row" w="full" mb="5" mt="5">
        <Image
          borderRadius="2xl"
          w="80%"
          h="50%"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/GuideImages/${data[0].pictures}`}
        />
        <Box flexDir="column" w="20%" p="10">
          <Text fontsize="xl" mb="5">
            {data[0].difficulty}/10
          </Text>
          <Flex flexDir="row" alignItems="center">
            <Text mr="2">{data[0].time} min</Text>
            <Icon as={MdTimer} />
          </Flex>
        </Box>
      </Box>
      <Box
        mb="5"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.1)"
        p="5"
        borderRadius="2xl"
      >
        {steps.map((step, index) => (
          <Text key={index} fontSize="md">
            {index > 0 && <br />} {index > 0 && "Step "} {step}
          </Text>
        ))}
      </Box>
    </Box>
  );
}

export async function getServerSideProps(ctx) {
  const supabase = createServerSupabaseClient(ctx);

  const { guideTitle } = ctx.query;

  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .eq("title", guideTitle);

  return { props: { data } };
}
