import { UserMediaRelation } from '@/data/definitions';
import {groupBy} from 'lodash-es'
import { MediaRelationTable } from '@/components/media-relation/MediaRelationTable';
import { ReactNode } from 'react';

export function MediaCollection({
  mediaStatusList,
}: {
  mediaStatusList: UserMediaRelation[]
}) {
  const splitTables = groupBy(mediaStatusList, (mediaStatus) => {
      return mediaStatus.status
    })

  return (
    <>
      {Object.keys(splitTables).map((mediaType) => (
        <div className='p-4' key={mediaType}>
          <h2 className='text-4xl font-bold mb-4'>{mediaType}</h2>
          <MediaRelationTable media={splitTables[mediaType]}/>
        </div>
      ))}
    </>
  );
}
