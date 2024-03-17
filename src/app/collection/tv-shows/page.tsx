import { filterUserMediaStatusToType } from '@/data/data';
import { MediaCollection } from '@/components/media-relation/MediaRelationCollection';
import React from 'react';

export default async function TvShows() {
  const data = await filterUserMediaStatusToType('TV');

  return (
    <MediaCollection mediaStatusList={data}/>
  )
}