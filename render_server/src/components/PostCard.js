import React from 'react'
import Link from '@mui/material/Link';
import styles from './postCard.module.css'
import MoreVert from './MoreVert'
import DateConvertor from './DateConvertor'
import Image from 'material-ui-image'
import ImageScroll from './ImageScroll';

import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import TagArea from './TagArea';
import LinkArea from './LinkArea';
import Linkslist from './Linkslist';

var ViewType = Object.freeze({
    NEWS: 0,
    WIKI: 1,
    VIEW: 2
});

var LinkType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1
  });

var ScrollType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1,
    INFLUENCER: 2
});
// typeScript 에서는 바꾸기 https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/

export default function PostCard({props, view}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL, imgNum, tags, more_links, content_links } = props
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
    // if (viewType==ViewType.VIEW){
    //     console.log(contentsImgURL.length);
    // }
    
    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '16px', paddingLeft: '16px', paddingRight: '8px', '& .MuiCardHeader-avatar': {
                    marginRight: '8px',
                  } }} variant="contained"
                avatar={
                    <Link href={publisherURL}>
                        <div className={styles.publisherImgBoarder}>
                            {publisherImgURL == ""
                            ? <Image className={styles.publisherImg}
                                src="/images/default_publisher.png" 
                                style={{
                                    width:'100%',
                                    height:'100%',
                                    objectFit:'contain',
                                }}
                                alt='default'
                            />
                            : <Image className={styles.publisherImg}
                                
                                src={publisherImgURL}
                                style={{
                                    width:'100%',
                                    height:'100%',
                                    objectFit:'contain',
                                }}
                                alt='publisher'
                            />}
                        </div>
                    </Link>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL} underline="none">
                            <div className={styles.publisher}>{publisher}</div>
                        </Link>
                        { viewType != ViewType.WIKI &&
                            <div className={styles.verticalDivider}></div>
                        }
                        { date != "" &&
                            <div className={styles.date}>{converted_date}</div>
                        }
                    </div>
                }
                action = {
                    <MoreVert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose,
                        "url": postURL,
                        "title": title
                    }}
                    />
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '16px', paddingRight: '16px', marginBottom: '10px' }} variant="contained" >
                {viewType == ViewType.WIKI ?
                    <>
                        <Link href={postURL} underline="none"><div className={styles.title}>{title}</div></Link>
                        <Divider 
                            sx={{mt: 1.25, mb: 1.25, color: 'gray.light' }} // theme.spacing value (the default for the value is 8px
                        />
                        <div className={styles.contentsInfo_wiki}>
                            {(content_links.length !== 0) && 
                                <div className={styles.contents_wiki}>
                                    <Linkslist content_links={content_links}/>
                                </div>}
                            <Link href={postURL} underline="none">
                                <div className={styles.contents}>
                                    <p>{contents}</p>                              
                                </div>
                            </Link>
                        </div>
                    </>
                :
                <Link href={postURL} underline="none">
                    <div className={styles.title}>{title}</div>
                    {viewType == ViewType.VIEW && contentsImgURL.length > 1 &&
                        <>
                            <ImageScroll props={{'imgs': contentsImgURL}} scroll_view={{"scroll_type": ScrollType.VIEWBASIC}}/>
                        </>
                    }
                    <div className={styles.contentsInfo}>
                        <div className={styles.contents}>
                            <p>{contents}</p>
                        </div>
                        {viewType != ViewType.VIEW && contentsImgURL != "" && <div className={styles.contentsImgBoarder}>
                            <Image className={styles.contentsImg}
                                src={contentsImgURL}
                                style={{
                                    width:'88px',
                                    height:'100%',
                                    objectFit:'contain',
                                }}
                                alt='content'
                            /> 
                        </div>}
                        {viewType == ViewType.VIEW && contentsImgURL.length == 1 && <div className={styles.contentsImgBoarder}>
                            <Image className={styles.contentsImg}
                                src={contentsImgURL[0]}
                                width='87px'
                                height='87px'
                                alt='content'
                            /> 
                        </div>}
                    </div>
                </Link>
                }
            </CardContent>  
            {viewType == ViewType.VIEW &&<TagArea props={{"tags":tags}}/>}   
            {viewType == ViewType.VIEW &&<LinkArea props={{"more_links":more_links}} link_view={{"link_type": LinkType.VIEWBASIC}}/>}                
        </Card>
    )
}
