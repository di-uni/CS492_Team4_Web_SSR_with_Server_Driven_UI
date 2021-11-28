import React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './MoreVert'
import styles from './drama.module.css'
import HeaderMenuButton from './HeaderMenuButton';

import { Card, CardContent, CardHeader, Divider, Box, Paper } from '@mui/material';

export default function Drama({props}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    var link;
    if (typeof window !== "undefined") {
        link = window.location.href;
        console.log(link);
    }

    const [offset, setOffset] = React.useState(0);
    React.useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    var variant;
    if (offset) {
        variant ='elevation';
    }
    else {
        variant ='none';
    }
    // console.log(offset); 
    
    return (
        <>
        <Card className={styles.stickyHeader}  sx={{ maxWidth: 768, maxHeight: 500}} style={{backgroundColor: "#F1EDEB" }} variant={variant} square >
        {/* <Card className={styles.stickyHeader}  sx={{ maxWidth: 768, maxHeight: 122}} style={{backgroundColor: "#F1EDEB" }} variant={variant} square > */}
        <CardHeader
            sx={{ paddingBottom: '4px', paddingRight: '8px', '& .MuiCardHeader-action': { padding: 0}
            }}
            title= {
                <div>
                    <Link underline="none">
                    {/* // <Link href={dramaURL} underline="none">  */}
                        <div className={styles.dramaName}>술꾼도시여자들</div>
                    </Link>
                    { (offset == 0) &&
                    <Link underline="none">
                    {/* // <Link href={categoryURL} underline="none"> */}
                        <div className={styles.dramaCategory}>웹드라마</div>
                    </Link>
                    }
                    <div className={styles.menu}>
                        <HeaderMenuButton/>
                        {/* <div className={styles.firstunselectedMenu}>
                            전체
                        </div>
                        <div className={styles.verticalDivider}></div>
                        <div className={styles.unselectedMenu}>
                            기본정보
                        </div>
                        <div className={styles.verticalDivider}></div>
                        <div className={styles.unselectedMenu}>
                            등장인물
                        </div>
                        <div className={styles.verticalDivider}></div>
                        <div className={styles.unselectedMenu}>
                            공식영상
                        </div>
                        <div className={styles.selectedMenu}>
                            공식영상
                        </div>
                        <div className={styles.unselectedMenu}>
                            함께 볼만한 웹드라마
                        </div> */}
                    </div>
                    <Box sx={{m: 0.5}}/>
                </div>
            }
            
            action = {
                (offset == 0) &&
                <MoreVert props = {{
                    "open": open, 
                    "anchorEl": anchorEl, 
                    "handleClick": handleClick, 
                    "handleClose": handleClose,
                    "url": link,
                    "title": "술꾼도시여자들 공식영상",
                    "activeColor": "rgba(145,120,103,1)",
                    "inactiveColor": "rgba(145,120,103,0.5)"
                }}
                />
            }
            style={{ textAlign: 'left'}}
        />
        </Card>
        <Card className={styles.contents} sx={{ maxWidth: 768 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square>
        <Paper
            sx={{ maxWidth:746, height: 1000, borderRadius: '8px' }}>
            <Paper 
            sx={{ maxWidth:716, height: 464, borderRadius: '6px'}}
            style= {{ background: "#D2C9C4" }}
            >
        {/* // {drama_videos&&drama_videos.map((video) => <PostCard key={video.title} props={video} view={{"viewType": ViewType.NEWS }}/>)} */}
            </Paper>
        </Paper>
      </Card>
      {/* </div> */}

      {/* <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/> */}
        </>
    )
}