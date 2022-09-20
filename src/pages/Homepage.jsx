import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { MusicPage } from "./MusicPage"

export const Homepage = () => {
    return (
        <Box>
            <Flex w="50%" m="auto">
                <NavLink to="/login"><Text>Login</Text></NavLink>
                <Spacer />
                <NavLink to="/"><Text>MusicPage</Text></NavLink>
            </Flex>
            <MusicPage />
        </Box>
    )
}