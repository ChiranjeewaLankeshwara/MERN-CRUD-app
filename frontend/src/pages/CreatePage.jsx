import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={"container.md"} py={12} px={6}>
      <VStack spacing={12}>
        <Heading as={"h2"} size={"2xl"} textAlign={"center"} color="teal.500" fontWeight="bold">
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={8}
          rounded={"lg"}
          shadow={"xl"}
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.600")}
        >
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel htmlFor="name" fontWeight="medium" color={useColorModeValue("gray.700", "gray.300")}>
                Product Name
              </FormLabel>
              <Input
                id="name"
                placeholder="Enter product name"
                name="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                _focus={{
                  borderColor: "teal.500",
                  boxShadow: "0 0 0 1px teal.500",
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="price" fontWeight="medium" color={useColorModeValue("gray.700", "gray.300")}>
                Price
              </FormLabel>
              <Input
                id="price"
                placeholder="Enter product price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                _focus={{
                  borderColor: "teal.500",
                  boxShadow: "0 0 0 1px teal.500",
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="image" fontWeight="medium" color={useColorModeValue("gray.700", "gray.300")}>
                Image URL
              </FormLabel>
              <Input
                id="image"
                placeholder="Enter image URL (optional)"
                name="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                _focus={{
                  borderColor: "teal.500",
                  boxShadow: "0 0 0 1px teal.500",
                }}
              />
            </FormControl>

            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleAddProduct}
              w="full"
              mt={4}
              _hover={{
                bg: "teal.600",
              }}
              _active={{
                bg: "teal.700",
              }}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
