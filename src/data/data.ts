import { promises as fs } from 'fs';
import {
  MediaStatus,
  MediaType,
  UserMediaStatus,
} from '@/data/definitions';

interface JsonEntry {
  title: string,
  type: MediaType,
  status: MediaStatus
}
export async function getJsonData(): Promise<UserMediaStatus[]> {
  const jsonFile = await fs.readFile(process.cwd() + '/src/data/media.json', 'utf-8');
  const jsonData: JsonEntry[] = JSON.parse(jsonFile);

  return jsonData.map(entry => ({
    status: entry.status,
    media: {
      type: entry.type,
      title: entry.title,
    }
  }))
}