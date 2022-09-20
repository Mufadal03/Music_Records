import { Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { login } from "../Redux/AuthReducer/action"
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes"

export const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const comingFrom = location.state?.from?.pathname
    const handleSubmit = () => {
        // e.preventDefault()
        if (email && password) {
            dispatch(login({ email, password }))
                .then((r) => {
                    if (r.type == USER_LOGIN_SUCCESS) {
                        navigate(comingFrom,{replace:true})
                }
            })
        }
    }
    return (
        <Container border="2px solid red" p="2">
            <Heading fontWeight={"sm"}>Login Page</Heading>
         <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input  onChange={(e)=>setEmail(e.target.value)} value={email}type='email' />
        <FormLabel>Password</FormLabel>
        <Input onChange={(e)=>setPassword(e.target.value)} value={password}type='password'mb="1rem" />
        <Input onClick={handleSubmit} bgColor="blue" color="white " type="submit" />
        </FormControl>
        
        </Container>
    )
}