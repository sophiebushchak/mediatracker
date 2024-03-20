import {
  MediaRelationStatus,
  UserMediaRelation,
} from '@/data/definitions';

const mediaRelationStatusSorting: Record<MediaRelationStatus, number> = {
  'Planned': 1,
  'Dropped': 0,
  'In-Progress': 5,
  'On Hold': 2,
  'Perpetual': 3,
  'Finished': 4,
}

export function sortMediaByStatus(media: UserMediaRelation[]): UserMediaRelation[] {
  return media.toSorted((a, b) => {
    return mediaRelationStatusSorting[b.status] - mediaRelationStatusSorting[a.status]
  })
}
