interface Media {
  title: string,
  release?: ReleaseDate,
  type: string,
  status?: 'In-Progress' | 'Not Started' | 'Finished'
}

interface ReleaseDate {
  releaseYear: number,
  releaseDay: number,
  releaseMonth: number,
}