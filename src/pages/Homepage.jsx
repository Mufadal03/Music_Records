import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { MusicPage } from "./MusicPage"

export const Homepage = () => {
    return (
        <Box>
            <Flex justifyContent={"space-around"} gap="2rem" p="1rem" bgColor="#f8f8f8"   >
                <NavLink to="/login"><Text>Login</Text></NavLink>
               
                <NavLink to="/"><Text>MusicPage</Text></NavLink>
            </Flex>
            <MusicPage />
        </Box>
    )
}