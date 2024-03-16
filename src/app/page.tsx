import { MediaTable } from '@/app/(components)/MediaTable';
import { promises as fs } from 'fs';
import {
  MediaStatus,
  MediaType,
  UserMediaStatus,
} from '@/data/definitions';
import { getJsonData } from '@/data/data';

export default async function Home() {
  const data = await getJsonData();
  
  const tables: Map<string, UserMediaStatus[]> = new Map();
  data.forEach((row) => {
    const existingArray = tables.get(row.media.type);
    if (existingArray) {
      existingArray.push(row);
    } else {
      tables.set(row.media.type, [row]);
    }
  });

  return (
    <main className='max-w-6xl px-4 mx-auto'>
      <h1 className='text-6xl mt-8 mb-4 font-extrabold'>Track</h1>
      {Array.from(tables.entries()).map(entry => {
        const [mediaType, media] = entry;
        return (
          <div className='p-4' key={mediaType}>
            <h2 className='text-4xl font-bold mb-4'>{mediaType}</h2>
            <MediaTable media={media}/>
          </div>
        );
      })}


    </main>
  );
}
