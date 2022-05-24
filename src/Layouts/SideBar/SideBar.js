import React from 'react'
import { SideWrapper, Logo, LogoIcon, Menu, MenuItem } from './SideBar.styles'
import { SideBarData } from '../../Data/Data'


const SideBar = () => {

    // const [ selected, setSelected ] = useState(0)


    return (
        <>
            <SideWrapper>
                <Logo>
                    <LogoIcon />
                    Roca<span>Shop</span>
                </Logo>

                <Menu>
                    {SideBarData.map((item, index) =>{
                        return(
                            <MenuItem>
                                <item.icon />
                                <span>
                                    {item.heading}
                                </span>
                            </MenuItem>
                        )
                    })}
                </Menu>
            </SideWrapper>
        </>
    )
}

export default SideBar