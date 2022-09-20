import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useParams } from "react-router-dom"
import { getData } from "../Redux/AppReducer/action"

export const SingleMusicRecord = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [currentMusic, setCurrentMusic] = useState({})
    const musicRecords = useSelector((store) => store.AppReducer.musicRecords)
    // const location = useLocation()
    // console.log(location)
    useEffect(() => {
        if (musicRecords.length === 0)
        {
            dispatch(getData())
        }
    }, [dispatch,musicRecords.length])
    useEffect(() => {
        if (id) {

            const Music = musicRecords.find((item) =>
                item.id==id
            )
            // console.log(Music)
            Music && setCurrentMusic(Music)
        }
        
   },[id,musicRecords])
    return (
        <Container maxW="container.lg" border="1px solid" borderRadius={"2rem"} mt="2rem">
            <Flex>
                <Box mr="1rem">
                    <Image h="300px" src={currentMusic.img} alt={currentMusic.name} />
                </Box >
                <Flex direction={"column"} textAlign={"left"} gap="1rem">
                    <Heading fontWeight={"sm"}>{currentMusic.name}</Heading>
                    <Heading fontSize={"2xl"} fontWeight={"sm"}>Artist : {currentMusic.artist}</Heading>
                    <Heading fontSize={"2xl"} fontWeight={"sm"}>Genre : {currentMusic.genre}</Heading>
                    <Heading  fontSize={"2xl"}fontWeight={"sm"}>Year : {currentMusic.year}</Heading>
                    <Heading fontSize={"2xl"} fontWeight={"sm"}>No of songs : { currentMusic.no_of_songs}</Heading>
                    
                    
                </Flex>
            </Flex>
            <Box borderTop="1px solid">
                <Link to={`/music/${id}/edit`}><Text fontSize={"2xl"}>Edit</Text></Link>
            </Box>
        </Container>
    )
}