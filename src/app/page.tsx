import { MediaTable } from '@/app/(components)/MediaTable';
import { promises as fs } from 'fs'

export default async function Home() {
  const jsonFile = await fs.readFile(process.cwd() + '/src/data/media.json', 'utf-8');
  const jsonData: Media[] = JSON.parse(jsonFile);

  return (
    <main className="max-w-6xl px-4 mx-auto">
      <h1 className="xs:text-xl md:text-2xl lg:text-4xl mt-8 mb-4">Track</h1>
      <MediaTable media={jsonData} />
    </main>
  );
}
