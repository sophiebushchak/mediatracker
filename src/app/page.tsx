import { MediaRelationTable } from '@/components/media-relation/MediaRelationTable';
import { promises as fs } from 'fs';
import {
  MediaRelationStatus,
  MediaType,
  UserMediaRelation,
} from '@/data/definitions';
import { getJsonData } from '@/data/data';

export default async function Home() {
  const data = await getJsonData();

  const tables: Map<string, UserMediaRelation[]> = new Map();
  data.forEach((row) => {
    const existingArray = tables.get(row.media.type);
    if (existingArray) {
      existingArray.push(row);
    } else {
      tables.set(row.media.type, [row]);
    }
  });

  return (
    <>
      {Array.from(tables.entries()).map(entry => {
        const [mediaType, media] = entry;
        return (
          <div className='p-4' key={mediaType}>
            <h2 className='text-4xl font-bold mb-4'>{mediaType}</h2>
            <MediaRelationTable media={media}/>
          </div>
        );
      })}
    </>
  );
}
