import React from 'react'
import { Box, Image, Badge} from '@chakra-ui/react'


export default function Stepbytest({guide}) {
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={guide.imageUrl} alt={guide.imageAlt} />
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>

            <Badge borderRadius='full' px='2' colorScheme='green'>
              {guide.difficulty} difficulty
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {guide.time} min
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {guide.title}
          </Box>
  
          <Box>
            {guide.shortIntroduction}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
        </Box>
      </Box>

      
    )
  }