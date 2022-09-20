import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { getData } from "../Redux/AppReducer/action"

export const MusicRecord = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const musicRecords = useSelector((state)=>state.AppReducer.musicRecords)
    useEffect(() => {
        // dispatch(getData())
        if (location || musicRecords.length === 0) {
            const querry = {
                params: {
                    genre: searchParams.getAll("genre"),
                    _sort: searchParams.get("sort"),
                    _order:searchParams.get("orderBy")
                }
            }
            dispatch(getData(querry))

        }
    }, [location.search])
    console.log(musicRecords)
    return (
        <Box>
            <Grid  gridTemplateColumns={"repeat(4,1fr)"} gap="1rem">
                {musicRecords?.length >= 0 && musicRecords?.map((item) => (
                   <Link to={`music/${item.id}`}> <GridItem key={item.id}>
                        <Box border="1px solid rgba(1,1,1,0.5)" borderRadius={"md"}> 
                            <Text>{item.name}</Text>
                            <Image m="auto" src={item.img} alt={item.name} />
                            <Text>{ item.genre}</Text>
                            <Text>{ item.year}</Text>
                        </Box>
                    </GridItem>
                    </Link>
                ))}
            </Grid>
        </Box>
    )
}