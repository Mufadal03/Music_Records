import {Box , Flex} from "@chakra-ui/react"
import { Filtering } from "../components/FilterSort"
import { MusicRecord } from "../components/MusicRecord"
export const MusicPage = () => {
    return (
        <Box>
            <Flex>
                <Box border="2px solid red" w="25%">
                    <Filtering />
                </Box>
                <Box border="2px solid blue" w="100%">
                    <MusicRecord />
                </Box>
            </Flex>
        </Box>
    )
}