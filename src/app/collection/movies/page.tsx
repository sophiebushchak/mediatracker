import { filterUserMediaStatusToType } from '@/data/data';
import { MediaCollection } from '@/components/media-relation/MediaRelationCollection';
import React from 'react';

export default async function Movies() {
  const data = await filterUserMediaStatusToType('Movie');

  return (
    <MediaCollection mediaStatusList={data}/>
  )
}