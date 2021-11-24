import React from 'react'
import styles from '../styles/news.module.css'
import PostCard from './PostCard'
import MoreContent from './MoreContent';
import { Card, CardHeader } from '@mui/material';
export default function News({props}) {
  const {news_posts, news_more, } = props
  console.log(props)

  const [sort, setSort] = React.useState(null);
  const [sortRelated, setSortRelated] = React.useState(null);
  const [sortLastest, setSortLastest] = React.useState(null);
  const isRelated = Boolean(sort);
  const sortRelatedClick = (event) => {
    console.log("--------");
    console.log(isRelated);
    setSort(!sort);
    console.log(event.currentTarget);
    console.log(isRelated);
  };
  const sortLastestClick = (event) => {
    console.log("--------");
    console.log(isRelated);
    setSort(!sort);
    console.log(event.currentTarget);
    console.log(isRelated);
  };
  
  return (
    <>
      <Card sx={{ maxWidth: 768}} variant='outlined' square>
        <CardHeader 
          className="api_title_area"
          title= {
            <div className={styles.viewHeader}>
              <div className={styles.viewName}>뉴스</div>
              <div className={styles.viewOptions}>
                <button className={styles.btn}
                  onClick={sortRelatedClick}
                >
                  관련도순
                </button>
                <button className={styles.btn}
                  onClick={sortLastestClick}
                >
                  최신순
                </button>
              </div>
            </div>
          }
          style={{ textAlign: 'left'}}
        />
        {news_posts&&news_posts.map((news) => <PostCard props={news} view={{"viewType": "NEWS"}}/>)}
      </Card>
      <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/>
    </>
  );
}
