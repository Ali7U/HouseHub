import { useState } from "react";
import { Box, Text, Heading, Icon, Flex, Button } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

interface OrderConfirmationProps {
  email: string;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ email }) => {
  const [orderNumber, setOrderNumber] = useState(
    Math.floor(Math.random() * 1000000000).toString()
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Box
        width="40vw"
        height="60vh"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="md"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Icon as={FaCheck} color="green.500" boxSize={10} mb={4} mx={"auto"} />
        <Heading size="md" mb={2}>
          Your order has been received!
        </Heading>
        <Text>
          Your unique order number is <strong>{orderNumber}</strong>.
        </Text>
        <Text>
          You will receive an email confirmation. <strong>{email}</strong>.
        </Text>
        <Button as={Link} to="/home" mt={4} colorScheme="blue">
          Back to Home
        </Button>
      </Box>
    </Flex>
  );
};

export default OrderConfirmation;
