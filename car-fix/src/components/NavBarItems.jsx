import React from 'react'
import { Flex, Link, Text, Icon, Menu, MenuButton } from '@chakra-ui/react'

export default function NavBarItem({navBarSize, title, icon, active}) {
  return (
    <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navBarSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                backgroundColor={active ? "orange" : "none"}
                p={3}
                borderRadius={8}
                _hover={{ textDecor:"none", backgroundColor: "orange" }}
                w={navBarSize == "large" && "100%"}
                >
                    <MenuButton w="100%" >
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "white" : "gray.500"} />
                            <Text ml={5} display={navBarSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
    </Flex>
  )
}
