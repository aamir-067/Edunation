import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Hero } from "../components/Hero";
import { Donate } from "../components/Donate";
import { Withdraw } from "../components/Withdraw";
import { AboutUs } from "../components/AboutUs";
import { Error } from "../components/Error"
import App from "../App";
import { getOwner } from "../interactions/helpers";


export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Hero />} />
        <Route path="donate" element={<Donate />} />
        <Route path="withdraw" loader={getOwner} element={<Withdraw />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<Error />} />

    </Route>
))