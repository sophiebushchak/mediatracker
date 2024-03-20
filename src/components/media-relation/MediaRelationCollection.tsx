import { UserMediaRelation } from '@/data/definitions';
import {groupBy} from 'lodash-es'
import { MediaRelationTable } from '@/components/media-relation/MediaRelationTable';
import { ReactNode } from 'react';
import { sortMediaByStatus } from '@/data/util';

export function MediaCollection({
  mediaStatusList,
}: {
  mediaStatusList: UserMediaRelation[]
}) {
  const sortedList = sortMediaByStatus(mediaStatusList);
  console.log(sortedList);
  const splitTables = groupBy(sortedList, (mediaStatus) => {
      return mediaStatus.status
    })

  return (
    <>
      {Object.keys(splitTables).map((mediaStatus) => (
        <div className='p-4' key={mediaStatus}>
          <h2 className='text-4xl font-bold mb-6'>{mediaStatus}</h2>
          <MediaRelationTable media={splitTables[mediaStatus]}/>
        </div>
      ))}
    </>
  );
}
