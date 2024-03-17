export interface Media {
  title: string,
  release?: Date,
  type: MediaType,
}
export type MediaType = 'Game' | 'TV' | 'Movie'

export interface UserMediaRelation {
  media: Media,
  status: MediaRelationStatus,
  consumptionStartDate?: Date,
  consumptionEndDate?: Date
}
export type MediaRelationStatus = 'Planned' | 'In-Progress' | 'Finished' | 'Played (Not Finished)' | 'On Hold' | 'Dropped'
