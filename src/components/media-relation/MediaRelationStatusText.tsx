import {
  MediaRelationStatus,
  MediaType,
} from '@/data/definitions';

const colourMap: Map<MediaRelationStatus, string> = new Map([
  ['Finished', 'bg-emerald-500'],
  ['In-Progress', 'bg-sky-500'],
  ['Dropped', 'bg-stone-500'],
  ['Planned', 'bg-amber-400'],
  ['On Hold', 'bg-stone-500'],
  ['Played (Not Finished)', 'bg-violet-500'],
]);

function MediaRelationStatusText({
  mediaType,
  mediaStatus,
}: {
  mediaType: MediaType,
  mediaStatus: MediaRelationStatus
}) {
  const getColour = () => {
    return colourMap.get(mediaStatus);
  };

  return (
    <span
      className={`${getColour()} text-slate-200 py-1 px-3 rounded-xl`}
    >
      {mediaStatus}
    </span>
  );
}

export default MediaRelationStatusText;