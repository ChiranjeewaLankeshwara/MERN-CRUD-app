import { Container, SimpleGrid, Text, VStack, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js"; // Import the Zustand store
import { useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx"; // Import the ProductCard component

const HomePage = () => {
  const { fetchProducts, products } = useProductStore(); // Fetch the fetchProducts function from the store

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8} align="center">
        {/* Page Title */}
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="extrabold"
          bgGradient="linear(to-r, teal.400, cyan.500, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Explore Our Products 🚀
        </Text>
        
        {/* Subtitle */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          color="gray.600"
          maxW="2xl"
        >
          Browse through our collection of amazing products. Whether you're shopping for yourself or looking for a gift, we’ve got something for everyone!
        </Text>

        {/* Product Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          w="full"
        >
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            // No products message
            <Box
              textAlign="center"
              w="full"
              bg="gray.100"
              p={6}
              rounded="md"
              shadow="md"
            >
              <Text fontSize="lg" fontWeight="bold" color="gray.500">
                No products found 😢
              </Text>
              <Link to="/create">
                <Button
                  mt={4}
                  colorScheme="blue"
                  variant="solid"
                  size="sm"
                >
                  Create a Product
                </Button>
              </Link>
            </Box>
          )}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage;
