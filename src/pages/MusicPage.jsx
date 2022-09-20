import {Box , Flex} from "@chakra-ui/react"
import { Filtering } from "../components/FilterSort"
import { MusicRecord } from "../components/MusicRecord"
export const MusicPage = () => {
    return (
        <Box>
            <Flex bgColor={"#f8f8f8"}>
                <Box   w="25%">
                    <Filtering />
                </Box>
                <Box  w="100%">
                    <MusicRecord />
                </Box>
            </Flex>
        </Box>
    )
}