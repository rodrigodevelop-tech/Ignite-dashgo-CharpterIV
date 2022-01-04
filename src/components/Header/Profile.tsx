import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData=true } : ProfileProps){
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Alves</Text>
          <Text color="gray.300" fontSize="small">
            rodrigo@cpcbrasil.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rodrigo Alves"
        src="https://github.com/rodrigodevelop-tech.png"
      />
    </Flex>
  );
}