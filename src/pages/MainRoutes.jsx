import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "../components/PrivateRoute"
import { EditMusicRecord } from "./EditMusicRecord"
import { Homepage } from "./Homepage"
import { Login } from "./Login"
import { SingleMusicRecord } from "./SingleMusicRecord"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/music/:id" element={<PrivateRoutes><SingleMusicRecord /></PrivateRoutes>} />
            <Route path="/music/:id/edit" element={<EditMusicRecord />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
         </Routes>
    )
}