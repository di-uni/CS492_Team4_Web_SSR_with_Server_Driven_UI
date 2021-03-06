import React from 'react'
import styles from './imageScroll.module.css'
import cn from 'classnames';

var ScrollType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1,
    INFLUENCER: 2
  });

export default function ImageScroll({props, scroll_view}) {
    const {imgs} = props
    // const {imgs, link} = props
    const {scroll_type} = scroll_view
    var scroll_css = ''
    var scroll_container_css = ''
    var scroll_item_css = ''

    switch(scroll_type){
        case ScrollType.VIEWBASIC: {
            scroll_css = styles.imageScrollerBasic
            scroll_container_css = styles.imageScrollerContainerBasic
            scroll_item_css = styles.imageScrollerItemBasic
        }
        break;
        case ScrollType.VIEWTIMELINE:{
            scroll_css = styles.imageScrollerTimeLine
            scroll_container_css = styles.imageScrollerContainerTimeLine
            scroll_item_css = styles.imageScrollerItemTimeLine
        }
        break;
        case ScrollType.INFLUENCER: {
            scroll_css = styles.imageScrollerInfluencer
            scroll_container_css = styles.imageScrollerContainerInfluencer
            scroll_item_css = styles.imageScrollerItemInfluencer
        }
        break;
    }

    return(
        
        <div className={scroll_css}>
            <ul className={cn(styles.imageScrollerContainer, scroll_container_css)} >
                {imgs&&imgs.map((img, index)=> (
                    <img key={index}
                        className={cn(styles.imageScrollerItem, scroll_item_css)}
                        src={img}
                        alt={index}
                    />
                ))}
            </ul>
        </div>
    )
}
