import {
 MediaRelationStatus,
 MediaType,
} from '@/data/definitions';

function MediaRelationStatusText({
 mediaType,
 mediaStatus
}: {
 mediaType: MediaType,
 mediaStatus: MediaRelationStatus
}) {

 const getColour = () => {
  switch (mediaStatus) {
   case 'Finished': ''
  }
 }

 return (
   <span className="">
    {mediaStatus}
   </span>
 )
}

export default MediaRelationStatusText