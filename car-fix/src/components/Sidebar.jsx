import React, { useState } from 'react';
import { Flex, Avatar,AvatarBadge, Heading, Text, Divider, IconButton } from '@chakra-ui/react';
import { FiHome, FiMenu, FiSearch, FiSettings, FiUpload, FiUser } from 'react-icons/fi';
import NavBarItem from './NavBarItems';
import Link from 'next/link';



export default function Sidebar() {
  const [navBarSize, changeNavBarSize] = useState("small")
  const [userPicture, showUserPicture] = useState("picture")
  const [active, setActive] = useState("home")
  const userpic = "https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"

  return (
    <Flex
      zIndex="50"
      pos="fixed"
      left="5"
      h="80vh"
      mt="10vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.3)"
      borderRadius={navBarSize === "small" ? "20px" : "20px"}
      w={navBarSize === "small" ? "50px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
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
        <NavBarItem
          navBarSize={navBarSize}
          icon={FiHome}
          title="Home"
          link="/home"
        />
        <NavBarItem
          navBarSize={navBarSize}
          icon={FiSearch}
          title="Search Guides"
          link="/searchForGuides"
        />
        <NavBarItem
          navBarSize={navBarSize}
          icon={FiUpload}
          title="Upload Guide"
          link="/addguide"
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        width="100%"
        alignItems={navBarSize == "small" ? "none" : "flex"}
        mb={4}
      >
        <Divider display={navBarSize == "small" ? "none" : "flex"} />
        <Flex mt={4} alignItems="center" justifyContent="center" flexDir="column">
        <NavBarItem
          navBarSize={navBarSize}
          icon={FiSettings}
          title="Settings"
          link="/settings"
        />
        <NavBarItem
          navBarSize={navBarSize}
          icon={Avatar}
          title="Account"
          link="/account"
        />
        </Flex>
      </Flex>
    </Flex>
  )
}
