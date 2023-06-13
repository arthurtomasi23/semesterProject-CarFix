import React, { useState } from 'react';
import { Flex, Avatar,AvatarBadge, Heading, Text, Divider, IconButton } from '@chakra-ui/react';
import { FiHome, FiMenu, FiSearch, FiSettings, FiUpload, FiUser } from 'react-icons/fi';
import NavBarItem from './NavBarItems';



export default function Sidebar() {
  const [navBarSize, changeNavBarSize] = useState("large")
  const [userPicture, showUserPicture] = useState("picture")
  const userpic = "https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"

  return (
    <Flex
      zIndex="50"
      pos="fixed"
      left="5"
      h="95vh"
      margin="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navBarSize === "small" ? "30px" : "20px"}
      w={navBarSize === "small" ? "50px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      backgroundColor="white"
    >
      <Flex
      p="5%"
      flexDir="column"
      alignItems={navBarSize === "large" ? "flex-start" : "center"}
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
        
        <NavBarItem navBarSize={navBarSize} icon={FiHome} title="Home" active href="/home"/>
        <NavBarItem navBarSize={navBarSize} icon={FiUser} title="User" href="/user" />
        <NavBarItem navBarSize={navBarSize} icon={FiSearch} title="Search Guides" href="/searchguides" />
        <NavBarItem navBarSize={navBarSize} icon={FiUpload} title="Upload Guide" href="/account" />
        <NavBarItem navBarSize={navBarSize} icon={FiSettings} title="Settings" href="/settings" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        width="100%"
        alignItems={navBarSize == "small" ? "none" : "flex"}
        mb={4}
      >
        <Divider display={navBarSize == "small" ? "none" : "flex"} />
        <Flex mt={4} alignItems="center" justifyContent="center">
          <Avatar size="sm" src={userPicture == "picture" ? "userpic" : "FiUser"} />
            <Flex flexDir="column" ml={4} display={navBarSize == "small" ? "none" : "flex"}>
                <Heading as="h3" size="sm">Arthur Tomasi</Heading>
            </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
