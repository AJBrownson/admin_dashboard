import React, { useState } from 'react'
import { SideWrapper, Logo, LogoIcon, Menu, MenuItem } from './SideBar.styles'
import { SideBarData } from '../../Data/Data'


const SideBar = () => {

    const [ selected, setSelected ] = useState(0)


    return (
        <>
            <SideWrapper>
                <Logo>
                    <LogoIcon />
                    Roca<span>Shop</span>
                </Logo>

                <Menu>
                    {SideBarData.map((item, index)) => {
                            return (
                                <MenuItem = {selected === index ? 'MenuItem active' : 'MenuItem' }
                                key={index}
                                onClick = { () => setSelected(index) }
                                >
                                    <item.icon />
                                    <item.heading />
                                </MenuItem>
                            );
                        }
                </Menu>
            </SideWrapper>
        </>
    )
}

export default SideBar