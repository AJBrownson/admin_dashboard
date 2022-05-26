import React from 'react'
import { SideWrapper, Logo, LogoIcon, Menu, MenuItem } from './SideBar.styles'
import { SideBarData } from '../../Utils/Data'
import { FaSignOutAlt } from 'react-icons/fa'

const SideBar = () => {


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

                    <MenuItem>
                        <FaSignOutAlt />
                    </MenuItem>
                </Menu>
            </SideWrapper>
        </>
    )
}

export default SideBar