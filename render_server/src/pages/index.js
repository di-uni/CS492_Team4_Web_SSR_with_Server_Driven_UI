import styles from '../styles/Home.module.css'
import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
  const res = await fetch('http://localhost:5000/keywords')
  const data = await res.json()
  const string_data = JSON.stringify(data)
  const props = {data: ''}
  props.data = string_data
  /*
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
  */
  return { props }
}


export default function Home({ data }) {
  const json = JSON.parse(data)
  const news_view = json[1].view.includes("news");
  const photo_view = json[1].view.includes("photo");
  const wiki_view = json[1].view.includes("wiki");
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <div className={styles.container}>
        <Box sx={{ m: 0, mb: 1 }}></Box>
        {news_view &&
          <div className="section_news">
            <News props={json[1].news} />
          </div>}
        {wiki_view &&
          <div className="section_wiki">
            <Wiki props={json[1].wiki} />
          </div>}
        {photo_view &&
          <div className="section_image">
            <Photo props={json[1].photo} />
          </div>}
        <Box sx={{ mb: 15 }}></Box>
        <Typography style={{ fontSize: 16, fontWeight: '900', verticalAlign: 'center', textAlign: 'center' }}>
          NAVER
        </Typography>
        <Typography style={{ fontSize: 14, verticalAlign: 'center', textAlign: 'center' }}>
          Team 4
        </Typography>
        <Box sx={{ mb: 5 }}></Box>

      </div>
    </ThemeProvider>
  )
}

