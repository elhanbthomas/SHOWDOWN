import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/afterEntryPage"
    },
    {
        title:"See Waiting List",
        icon:<MedicalServicesIcon/>,
        path:"/waitingList"
    },
    {
        title:"Edit Profile",
        icon:<ManageAccountsIcon/>,
        path:"/EditDetails"
    }
]