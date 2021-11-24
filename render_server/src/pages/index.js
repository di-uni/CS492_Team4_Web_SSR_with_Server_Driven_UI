import styles from '../styles/Home.module.css'
import React from 'react';

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from '@mui/material';

import News from '../components/news';
import Photo from '../components/photo';
import Wiki from '../components/wiki';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
    },
    gray: {
      light: "#FFFFFF"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
    },
  }
});

export async function getServerSideProps(context) {
  const {req, } = context
  const props = {data: ''}
  if (req.method === "POST") {
    const streamPromise = new Promise((resolve, reject) => {
      let body = ''
      req.on('data', ( data ) => {
        body += data
      });
      req.on('end', () => {
        resolve(body);
      });
    });
    const body = await streamPromise;
		props.data = body;
  }
  return { props }
}


export default function Home({data}) {
  const json = JSON.parse(JSON.parse(data).data)
  const news_view =  json[1].view.includes("news");
  const photo_view = json[1].view.includes("photo");
  const wiki_view = json[1].view.includes("wiki");
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
    <div className={styles.container}>
        {news_view && 
        <div className="section_news">
          <News props={json[1].news}/>
        </div>}
        {wiki_view && 
        <div className="section_wiki">
          <Wiki props={json[1].wiki}/>
        </div>}
        {photo_view&&
        <div className="section_image">
          <Photo props={json[1].photo}/>  
        </div>}
    </div>
    </ThemeProvider>
  )
}
