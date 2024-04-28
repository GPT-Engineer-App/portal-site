import { Box, Flex, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaUserCircle, FaInfoCircle, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1626847038141-14f86210fac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0YWwlMjBsb2dvfGVufDB8fHx8MTcxNDMwNzYxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portal Logo" mb={4} />
        <Heading>Welcome to the Portal</Heading>
        <Text mt={2} fontSize="lg">
          Your gateway to services and information
        </Text>
      </Flex>

      <Flex justify="space-around" wrap="wrap">
        <LinkBox icon={FaUserCircle} title="Profile" description="Manage your personal profile" />
        <LinkBox icon={FaInfoCircle} title="About Us" description="Learn more about our services" />
        <LinkBox icon={FaEnvelope} title="Contact" description="Get in touch with us" />
        <LinkBox icon={FaPhone} title="Support" description="24/7 customer support" />
        <LinkBox icon={FaHome} title="Home" description="Return to homepage" />
      </Flex>
    </Box>
  );
};

const LinkBox = ({ icon: Icon, title, description }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" width="200px" m={2}>
    <Flex direction="column" align="center" justify="center">
      <Icon size="3em" />
      <Heading size="md" mt={4} mb={2}>
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </Flex>
  </Box>
);

export default Index;
