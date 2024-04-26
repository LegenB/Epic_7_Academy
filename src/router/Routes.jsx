import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { EpicApp, Heros, Home,Hero, Artifacts, Artifact ,Credits } from "../Pages";



export const getRoutes = () => createBrowserRouter([
    
    {
        path: "/",
        element: <EpicApp />,
        errorElement: <ErrorPage />,
        children: [

            { path: "/", element: <Home /> },
            { path: "Heros", element: <Heros /> },
            { path: "Heros/:heroname", element: <Hero /> },
            { path: "Credits", element: <Credits /> },
            { path: "Artifacts", element: <Artifacts/> },
            { path: "Artifacts/:name", element: <Artifact/> },
           
        ]
    }
]);