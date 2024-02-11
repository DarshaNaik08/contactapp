import { BiSolidBarChartSquare, BiSolidContact } from "react-icons/bi";
import { Sidebaritem } from "../Models/Sidebaritems";

export const SidebarData:Sidebaritem[]=[
    {
        title: 'Contact',
        path: '/Contact',
        icon : BiSolidContact
    },
    {
        title: 'Charts and Maps',
        path: '/ChartsMaps',
        icon : BiSolidBarChartSquare
    }
]