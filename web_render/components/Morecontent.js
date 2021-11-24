import React from 'react';
import { Box, Paper, Typography} from '@mui/material';
import Link from '@mui/material/Link';
import styles from '../styles/component.module.css'

export default function MoreContent({props}){
    const {view_option, more_link} = props;
    return(
        <div className={styles.moreContent} >
            <Link href={more_link}>
                <a>
                    <Paper 
                        style={{ maxWidth:767, height: 50, borderRadius: 0, backgroundColor: '#f4f7f8'}}>
                        {<div className={styles.moreContentText}>
                            <Box sx={{m: 0.5}}/>
                            <Typography  style={{ fontSize: 16, verticalAlign:'center', textAlign:'center'}}>
                                {view_option} 더보기 {<img src="/images/svg/forward_arrow.svg"/>}
                            </Typography>
                            <Box sx={{m: 0.5}}/>
                        </div> 
                        }
                    </Paper>
                </a>
            </Link>
        </div>
       
    );
}