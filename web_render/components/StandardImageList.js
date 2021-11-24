import React from 'react';
import styles from "../styles/imagelist.module.css";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function StandardImageList({props}) {
  
  return (
      <div className={styles.container}>
      {props&&props.map((img) => (
          <div className={styles.grid_item} >
            <Link href={img.img_url}>
              <a>
                <Box
                  component="img"
                  src={img.img_path}
                />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );


}

