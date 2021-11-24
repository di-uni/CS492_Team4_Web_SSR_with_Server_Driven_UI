import * as React from 'react';
import PostCard from '../components/PostCard'
import { Box } from '@mui/material';
import MoreContent from '../components/MoreContent';

export default function Wiki({props}) {
    const {wiki_posts, wiki_more} = props
    return (
        <>
        {wiki_posts&&wiki_posts.map(
            (wiki) => 
                <div>
                    <Box sx={{mb: 1.25}}>
                        <PostCard props={wiki} view={{ "viewType": "WIKI" }}/>
                    </Box>
                </div>
        )}
        <MoreContent props={{'view_option': "",'more_link':wiki_more}}/>
        </>
    )
}