import { MediaTable } from '@/app/(components)/MediaTable';
import { promises as fs } from 'fs';

export default async function Home() {
  const jsonFile = await fs.readFile(process.cwd() + '/src/data/media.json', 'utf-8');
  const jsonData: Media[] = JSON.parse(jsonFile);

  const tables: Map<string, Media[]> = new Map();

  jsonData.forEach((row) => {
    const existingArray = tables.get(row.type);
    if (existingArray) {
      existingArray.push(row);
    } else {
      tables.set(row.type, [row]);
    }
  });

  return (
    <main className='max-w-6xl px-4 mx-auto'>
      <h1 className='text-6xl mt-8 mb-4 font-extrabold'>Track</h1>
      {Array.from(tables.entries()).map(entry => {
        const [mediaType, media] = entry;
        return (
          <div className="p-4" key={mediaType}>
            <h2 className="text-4xl font-bold mb-4">{mediaType}</h2>
            <MediaTable media={media}/>
          </div>
      )
      })}


    </main>
  );
}
