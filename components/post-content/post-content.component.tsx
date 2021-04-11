import React from 'react'
import classes from './post-content.module.css'

export function PostContent({ content }: { content: string }) {
  return <div className={classes.root} dangerouslySetInnerHTML={{ __html: content }} />
}
