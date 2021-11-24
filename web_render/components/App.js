import * as React from 'react';
import styles from '../styles/Home.module.css'
import News from './news';
import Photo from './photo';
import Wiki from './wiki';

export default function App(data) {
  const json = data.input.keywords[1]
  const news_view =  json.view.includes("news");
  const photo_view = json.view.includes("photo");
  const wiki_view = json.view.includes("wiki");
  return (
    <div className={styles.container}>
      {news_view && 
        <div className="section_news">
          <News props={json.news}/>
        </div>}
      {wiki_view && 
        <div className="section_wiki">
          <Wiki props={json.wiki}/>
        </div>}
      {photo_view &&
        <div className="section_image">
          <Photo props={json.photo}/>  
        </div>}
    </div>
  );
}