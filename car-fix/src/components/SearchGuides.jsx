import React from 'react';
import {
  Box,
  Badge,
  Image,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';

export default function SearchGuides({ guide, searchInput }) {
  const router = useRouter();
  if (searchInput.trim() === '' || guide.title.toLowerCase().includes(searchInput.toLowerCase())) {
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' cursor="pointer" onClick= {() => router.push(`/guides/${guide.title}`)}>
        <Image src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/GuideImages/${guide.pictures}`} />
        <Box p='6' backgroundColor="white">
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme={(guide.difficulty <= 3) ? 'green' : (guide.difficulty <= 6) ? 'yellow' : 'red'}>
              {`${guide.difficulty} / 10`}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              difficulty &bull; {guide.time} min
            </Box>
          </Box>
          <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
            {guide.title}
          </Box>
          <Box>
            {guide.short_description}
            <Box as='span' color='gray.600' fontSize='sm'></Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return null;
}
