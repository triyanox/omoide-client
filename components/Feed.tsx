import React, { Fragment } from 'react'
import LatestPosts from './LatestPosts'
import MostLikedPosts from './MostLikedPosts'
import MostPopular from './MostPopular'
import Toolbar from './Toolbar'

type Props = {}

const Feed = (props: Props) => {
  return (
    <Fragment>
      <Toolbar />
      <LatestPosts />
      <MostLikedPosts />
      <MostPopular />
    </Fragment>
  )
}

export default Feed
