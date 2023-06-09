import React from 'react'
import { Flex, Link, Text, Icon, Menu, MenuButton } from '@chakra-ui/react'
import {useRouter} from 'next/router';

export default function NavBarItem({navBarSize, title, icon, link}) {
    const router = useRouter();
  return (
    <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navBarSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                backgroundColor={router.pathname === link ? "orange" : "none"}
                textColor={router.pathname === link ? "white" : "black.500"}
                p={3}
                borderRadius="full"
                _hover={{ textDecor:"none", backgroundColor: "orange" }}
                w={navBarSize == "large" && "100%"}
                href={link}
                justifyContent="center"
                >
                    <MenuButton 
                    w="100%" 
                    alignItems="center"
                    >
                        <Flex alignItems="center">
                            <Icon  as={icon} fontSize="xl" color={router.pathname === link ? "white" : "gray.500"} />
                            <Text ml={5} display={navBarSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
    </Flex>
  )
}
