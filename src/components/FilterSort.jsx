import { Box, FormLabel, Heading, Input, Select, TagLabel } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export const Filtering = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [sort, setSort] = useState(searchParams.get("sort")||"")
    const [orderBy, setSortBy] = useState(searchParams.get("orderBy") || "")
    const [category, setCategory] = useState(searchParams.getAll("genre") || [])
    const handleGenreChange = (e) => {
        const option = e.target.value
        const newCategory = [...category]
        if (category.includes(option)) {
            newCategory.splice(newCategory.indexOf(option), 1)
        }
        else {
            newCategory.push(option)
        }
        setCategory(newCategory)
    }
    useEffect(() => {
        if (category || orderBy||sort)
        {
            const params = {}
            category && (params.genre = category)
            sort && (params.sort = sort)
            orderBy && (params.orderBy=orderBy)
            setSearchParams(params)
        }    
    },[category,setSearchParams,orderBy,sort])
    return (
        <Box>
            <Box>
            <Heading>Filter</Heading>
            <Box>
                <input onChange={handleGenreChange} defaultChecked={category.includes("K-Pop")} type="checkbox" value={"K-Pop"} id="K-Pop" />
                <label htmlFor="K-Pop">K-Pop</label>
            </Box>
            <Box>
                <input onChange={handleGenreChange} defaultChecked={category.includes("Country")}  type="checkbox" value={"Country"} id="Country" />
                <label htmlFor="Country">Country</label>
            </Box>
            <Box>
                <input onChange={handleGenreChange} defaultChecked={category.includes("Pop")} type="checkbox" value={"Pop"} id="Pop" />
                <label htmlFor="Pop">Pop</label>
            </Box>
            <Box>
                <input onChange={handleGenreChange} defaultChecked={category.includes("Hard Rock")} type="checkbox" value={"Hard Rock"} id="Hard Rock" />
                <label htmlFor="Hard Rock">Hard Rock</label>
            </Box>
            <Box>
                <input onChange={handleGenreChange} defaultChecked={category.includes("Holiday")} type="checkbox" value={"Holiday"} id="Holiday" />
                <label htmlFor="Holiday">Holiday</label>
            </Box>
            <Box>
                <input onChange={handleGenreChange} defaultChecked={category.includes("Rock")} type="checkbox" value={"Rock"} id="Rock" />
                <label htmlFor="Rock">Rock</label>
            </Box>
            </Box>
            <Box >
                <Heading>Sort</Heading>
                {/* sort byt types */}
                <Box>
                    <Select placeholder="Sort By Types" onChange={(e)=>setSort(e.target.value)}>
                        <option value="name">Sort by Name</option>
                        <option value="year">Sort by Year</option>
                    </Select>
                </Box>
                {/* sort by asc or desc */}
                <Box>
                    <Box >
                    <input onChange={(e) => setSortBy(e.target.value)}type="radio" defaultChecked={orderBy==="ASC"} name="sortBy"value="ASC" id="asc"  />
                    <label htmlFor="asc">Ascending</label>
                </Box>
                 <Box >
                    <input onChange={(e) => setSortBy(e.target.value)}type="radio"defaultChecked={orderBy==="DESC"} name="sortBy" value="DESC" id="desc"  />
                    <label htmlFor="desc">Descending</label>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}