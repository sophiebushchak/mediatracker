import { promises as fs } from 'fs';
import {
  MediaRelationStatus,
  MediaType,
  UserMediaRelation,
} from '@/data/definitions';

interface JsonEntry {
  title: string,
  type: MediaType,
  status: MediaRelationStatus
}
export async function getJsonData(): Promise<UserMediaRelation[]> {
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

export async function filterUserMediaStatusToType(requestedType: MediaType) {
  const userMedia = await getJsonData();

  return userMedia.filter(userMedia => {
    return userMedia.media.type === requestedType;
  })
}