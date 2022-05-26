import { FaHome, 
    FaRegClipboard, 
    FaUsers, 
    FaChartArea,
    FaDollarSign,
    FaMoneyBill
} 
from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'



export const SideBarData = [
    {
        icon: FaHome,
        heading: "Dashboard"
    },
    {
        icon: FaRegClipboard,
        heading: "Orders"
    },
    {
        icon: FaUsers,
        heading: "Customers"
    },
    {
        icon: FiPackage,
        heading: "Products"
    },
    {
        icon: FaChartArea,
        heading: "Analytics"
    }
]


export const CardsData = [
    {
        title: "Sales",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: FaDollarSign,
        // series: [
        //   {
        //     name: "Sales",
        //     data: [31, 40, 28, 51, 42, 109, 100],
        //   },
        // ],
      },
      {
        title: "Revenue",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: FaMoneyBill,
        // series: [
        //   {
        //     name: "Revenue",
        //     data: [31, 40, 28, 51, 42, 109, 100],
        //   },
        // ],
      },
      {
        title: "Expenses",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: FaRegClipboard,
        // series: [
        //   {
        //     name: "Expenses",
        //     data: [31, 40, 28, 51, 42, 109, 100],
        //   },
        // ],
      },

]