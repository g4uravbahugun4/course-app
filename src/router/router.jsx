import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Dashboard from "../screens/dashboard";
import Courses from "../screens/course-listing";
import CourseInfo from "../screens/course-description";
import MainLayout from "../components/layout";

export const router=createBrowserRouter([
    {
        element:<MainLayout/>,
        
        children:[
            {
                path:ROUTES.HOME,
                element:<Dashboard/>
            },
            
            {
                path: `${ROUTES.COURSES}`,
                element: <Courses />
            },
            {
                path: `${ROUTES.COURSES}/:courseId`,
                element: <CourseInfo />
            }
        ]
        
    },
   
])