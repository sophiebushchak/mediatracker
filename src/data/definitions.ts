export interface Media {
  title: string,
  release?: Date,
  type: MediaType,
}
export type MediaType = 'Game' | 'TV' | 'Movie'

export interface UserMediaStatus {
  media: Media,
  status: MediaStatus,
  consumptionStartDate?: Date,
  consumptionEndDate?: Date
}
export type MediaStatus = 'In-Progress' | 'Not Started' | 'Finished' | 'On Hold' | 'Played (Not Finished)' | 'Dropped' | 'Planned'
