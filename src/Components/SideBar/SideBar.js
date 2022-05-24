import React, { useState } from 'react'
import { SideWrapper, Logo, LogoIcon, Menu, MenuItem } from './SideBar.styles'



const SideBar = () => {
    return (
        <>
            <SideWrapper>
                <Logo>
                    <LogoIcon />
                    Roca<span>Shop</span>
                </Logo>

                <Menu>
                    <MenuItem>
                        <div>
                            Icon
                        </div>
                        Dashboard
                    </MenuItem>
                </Menu>
            </SideWrapper>
        </>
    )
}

export default SideBar