import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './component.module.css'

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Divider, IconButton } from '@mui/material';

export default function Morevert({props}) {  
    const { open, anchorEl, handleClick, handleClose } = props

    return (
        <div>
            <IconButton
                onClick={handleClick}
                style={{ backgroundColor: 'transparent' }}
                disableRipple
            >
                { open
                ? <MoreVertIcon style={{color: '#8F8F8F'}}/>
                : <MoreVertIcon style={{color: '#D1D3D6'}}/>
                }   
            </IconButton>
            <Menu
                id="morevert-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    elevation: 3,
                }}
                >
                <MorevertMenuItem props = {{
                    "handleClose": handleClose,
                    "text": "Keep에 저장",
                    "srcURL": '/icons/bookmark.svg'
                }}/>
                <Divider/>
                <MorevertMenuItem props = {{
                    "handleClose": handleClose,
                    "text": "Keep 바로가기",
                    "srcURL": '/icons/forward.svg'
                }}/>
            </Menu>
        </div>
    )
}

function MorevertMenuItem({props}) { 
    const { handleClose, text, srcURL } = props

    return (
        <MenuItem 
            className={styles.menuItem} 
            onClick={handleClose}
            style={{ backgroundColor: 'transparent' }}
            disableRipple
        >
            {text}
            <img src={srcURL}/>
        </MenuItem>
    )
}