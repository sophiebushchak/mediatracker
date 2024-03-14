export interface Media {
  title: string,
  release?: ReleaseDate,
  type: string,
  status?: 'In-Progress' | 'Not Started' | 'Finished' | 'On Hold' | 'Played (Not Finished)' | 'Dropped' | 'Planned'
}

export interface ReleaseDate {
  releaseYear: number,
  releaseDay: number,
  releaseMonth: number,
}