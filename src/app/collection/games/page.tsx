import React from 'react';
import { MediaCollection } from '@/components/media-relation/MediaRelationCollection';
import { filter } from 'lodash-es';
import { filterUserMediaStatusToType } from '@/data/data';
import { MediaRelationTable } from '@/components/media-relation/MediaRelationTable';

export default async function Games() {
  const data = await filterUserMediaStatusToType('Game');

  return (
    <MediaCollection mediaStatusList={data}/>
  )
}