import { Box, Button, Container, Flex, Heading,Input,Spacer,Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {useDispatch} from "react-redux"
import { editData } from "../Redux/AppReducer/action"
import { EDIT_ALBUM_SUCCESS } from "../Redux/AppReducer/actionTypes"
export const EditMusicRecord = () => {
    const [artist, setArtist] = useState("")
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate=useNavigate()
    const handleEdit = () => {
        if (name && artist) {
            const params = {
            name: name&& name,
            artist:artist&& artist
            }
            dispatch(editData(id, params))
                .then((r) => {
                    // console.log(r)
                    if (r.type === EDIT_ALBUM_SUCCESS)
                    {
                        navigate(`/music/${id}`)
                    }
            })

        }
    }
    return (
        <Container maxW={"container.sm"} >
            <Heading fontWeight={"sm"}>Edit MusicRecord</Heading>
            <Flex justifyContent={"space-evenly"}  my="1rem">
                <Text fontSize={"2xl"}>Edit Music Name </Text>
                
                <Input  onChange={(e)=>setName(e.target.value)}placeholder="Edit Music Name of the Record" maxW={"sm"} type="text" />
            </Flex>
            <Flex justifyContent={"space-evenly"} my="1rem">
                <Text fontSize={"2xl"}>Edit Artist Name </Text>
                
                <Input onChange={(e)=>setArtist(e.target.value)} placeholder="Edit Artist Name of the Record" maxW={"sm"} type="text" />
            </Flex>
            <Button onClick={handleEdit} colorScheme={"green"}>Edit</Button>
        </Container>
    )
}