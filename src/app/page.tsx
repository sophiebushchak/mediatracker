import { MediaRelationTable } from '@/components/media-relation/MediaRelationTable';
import { promises as fs } from 'fs';
import {
  MediaRelationStatus,
  MediaType,
  UserMediaRelation,
} from '@/data/definitions';
import { getJsonData } from '@/data/data';
import { MediaCollection } from '@/components/media-relation/MediaRelationCollection';

export default async function Home() {
  const data = await getJsonData();

  return (
    <>
      <MediaCollection mediaStatusList={data} />
    </>
  );
}
