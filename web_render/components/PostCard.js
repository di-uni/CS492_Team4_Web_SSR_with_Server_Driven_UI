import React from 'react'
import Link from '@mui/material/Link'
import styles from '../styles/postCard.module.css'
import Box from '@mui/material/Box';
import Morevert from './Morevert'
import DateConvertor from './DateConvertor'


import { Card, CardContent, CardHeader, Divider } from '@mui/material';

export default function PostCard({props, view}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL } = props
    const { viewType } = view

    const now = Date.now()
    var converted_date = DateConvertor(date)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '8px' }} variant="contained"
                avatar={
                    <Link href={publisherURL}>
                        <a>
                            <div className={styles.publisherImgBoarder}>
                                {publisherImgURL == ""
                                ? <Box className={styles.publisherImg}
                                    component="img"
                                    src="/images/default_publisher.png"
                                />
                                : <Box className={styles.publisherImg}
                                    component="img"                                    
                                    src={publisherImgURL}
                                />}
                            </div>
                        </a>
                    </Link>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL}>
                            <a>
                                <div className={styles.publisher}>{publisher}</div>
                            </a>
                        </Link>
                        { viewType != "WIKI" &&
                            <hr className={styles.verticalDivider}></hr>
                        }
                        { date != "" &&
                            <div className={styles.date}>{converted_date}</div>
                        }
                    </div>
                }
                action = {
                    <Morevert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose
                    }}
                    />
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '16px', paddingRight: '16px', marginBottom: '10px' }} variant="contained" >
                <Link href={postURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
                        { viewType == "WIKI" && <Divider 
                            sx={{mt: 1.25, mb: 1.25, color: 'gray.light' }} // theme.spacing value (the default for the value is 8px
                        />}
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>{contents}</div>
                            {contentsImgURL != "" && <div className={styles.contentsImgBoarder}>
                                <Box className={styles.contentsImg}
                                    src={contentsImgURL}
                                    sx={{width:88,}}
                                /> 
                            </div>}
                        </div>
                    </a>
                </Link>
            </CardContent>                      
        </Card>
    )
}
