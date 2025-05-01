import React from "react";
import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Image,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../Paragraph";
import { resume } from "../../constant";
import SocialButton from "../SocialButton";
import { BiPhoneCall } from "react-icons/bi";
import SpotifySection from "./SpotifySection";
import { SpotifySong } from "../../types/spotify";
import { MotionFlex } from "../../utils/motion";

interface IProfileSection {
  song: SpotifySong;
}

const ProfileSection: React.FC<IProfileSection> = ({ song }) => {
  return (
    <Box>
      <MotionFlex
        alignItems="center"
        justifyContent="space-between"
        opacity="0"
        initial={{
          opacity: 0,
          translateX: 150,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          Hi! I am Kaito <span className="waving-hand">👋</span>
        </Heading>
        <MotionFlex alignItems={"flex-end"} whileHover={{ scale: 1.8 }}>
          <Avatar
            name="Kaito Kitaya (北谷　海斗)"
            src="/images/profile.jpg"
            mb={5}
            size="2xl"
          />
        </MotionFlex>
      </MotionFlex>
      <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
        Mobile Application Engineer in Germany 🇩🇪 from Japan 🇯🇵
      </Paragraph>
      <Paragraph textProps={{ fontSize: "xl", lineHeight: 1.6 }}>
        Focused on{" "} Cross Platform (<Link
          color={useColorModeValue("blue.500", "blue.400")}
          href="https://flutter.dev/"
          fontWeight="500"
          isExternal
        >Flutter</Link> &
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          href="https://kotlinlang.org/docs/multiplatform.html"
          fontWeight="500"
          isExternal
        >Kotlin Multiplatform</Link>  
        )
        {" & "}
          Native Mobile Development (Android & iOS).
        </Paragraph>

      <Box mt={5}>
        <ButtonGroup>
          <SocialButton social={resume} />
          {/* <Link href={"/contact"} style={{ textDecoration: "none" }}>
            <Button
              colorScheme="blue"
              size="sm"
              margin={"5px"}
              leftIcon={<BiPhoneCall />}
            >
              Contact Me
            </Button>
          </Link> */}
        </ButtonGroup>
      </Box>

      {/* <SpotifySection song={song} /> */}
    </Box>
  );
};

export default ProfileSection;
