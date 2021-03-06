import PostCard from '../components/PostCard'
import { Box } from '@mui/material';
import MoreContent from '../components/Morecontent';

var ViewType = Object.freeze({
    NEWS: 0,
    WIKI: 1
});

export default function Wiki({props}) {
    const {wiki_posts, wiki_more} = props
    return (
        <>
        {wiki_posts&&wiki_posts.map(
            (wiki, index) => 
                <div key={wiki.publisherURL} >
                    <Box sx={{mb: 1.25}}>
                        <PostCard props={wiki} view={{ "viewType": ViewType.WIKI }} index={index}/>
                    </Box>
                </div>
        )}
        <MoreContent props={{'view_option': "",'more_link':wiki_more}}/>
        </>
    )
}
