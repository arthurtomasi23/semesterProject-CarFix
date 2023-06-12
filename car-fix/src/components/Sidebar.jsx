import React, { useState } from 'react';
import { Flex, Avatar, Heading, Text, Divider, IconButton } from '@chakra-ui/react';
import { FiHome, FiMenu, FiSearch, FiSettings, FiUpload, FiUser } from 'react-icons/fi';
import NavBarItem from './NavBarItems';

export default function Sidebar() {
  const [navBarSize, changeNavBarSize] = useState("large")
  return (
    <Flex
      pos="sticky"
      left="5"
      h="100vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navBarSize === "small" ? "15px" : "30px"}
      w={navBarSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
      p="5%"
      flexDir="column"
      alignItems="flex-start"
      as="nav"
      >
        <IconButton
        background="none"
        mt="5"
        _hover={{ background: "none" }}
        icon={<FiMenu />}
        onClick={() => {
          if(navBarSize === "small")
          changeNavBarSize("large")
          else
          changeNavBarSize("small")
        }}
        />
        <NavBarItem navBarSize={navBarSize} icon={FiHome} title="Homescreen" />
        <NavBarItem navBarSize={navBarSize} icon={FiUser} title="UserPage" active />
        <NavBarItem navBarSize={navBarSize} icon={FiSearch} title="Search Guides" />
        <NavBarItem navBarSize={navBarSize} icon={FiUpload} title="Upload Guide" />
        <NavBarItem navBarSize={navBarSize} icon={FiSettings} title="Settings" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        width="100%"
        alignItems={navBarSize == "small" ? "none" : "flex"}
        mb={4}
      >
        <Divider display={navBarSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
            <Flex flexDir="column" ml={4} display={navBarSize == "small" ? "none" : "flex"}>
                <Heading as="h3" size="sm">Arthur Tomasi</Heading>
                <Text color="gray">Admin</Text>
            </Flex>
        </Flex>
      </Flex>
    </Flex>

  )
}
