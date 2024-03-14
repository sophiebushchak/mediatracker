// const fs = require('fs/promises')

// This is just to label my existing data..

interface ReleaseDate {
  releaseYear: number,
  releaseDay: number,
  releaseMonth: number,
}

interface Media {
  title: string,
  release?: ReleaseDate,
  type: string,
  status?: 'In-Progress' | 'Not Started' | 'Finished' | 'On Hold' | 'Played (Not Finished)' | 'Dropped' | 'Planned'
}

fs.readFile('./media.json', 'utf-8').then((file: string) => {
  const data: Media[] = JSON.parse(file)

  let gamesCurrently = data.slice(0, 4);

  let gamesPlayedNotCompleted = data.slice(4, 18)

  let gamesOnHold = data.slice(18, 32)

  let tvShows = data.slice(32, 54)

  let gamesCompleted = data.slice(54, 161)

  let moviesWatched = data.slice(161, 316)

  let gamesDropped = data.slice(316, 328)

  let tvDropped = data.slice(328, 330)

  let gamesWantToPlay = data.slice(330, 332)

  const media: Media[] = [];

  gamesCurrently = gamesCurrently.map(item => ({
    ...item,
    status: 'In-Progress',
    type: 'Game'
  }))

  gamesPlayedNotCompleted = gamesPlayedNotCompleted.map(item => ({
    ...item,
    status: 'Played (Not Finished)',
    type: 'Game'
  }))

  gamesOnHold = gamesOnHold.map(item => ({
    ...item,
    status: 'On Hold',
    type: 'Game'
  }))

  tvShows = tvShows.map(item => ({
    ...item,
    status: 'Finished',
    type: 'TV'
  }))

  gamesCompleted = gamesCompleted.map(item => ({
    ...item,
    status: 'Finished',
    type: 'Game'
  }))

  moviesWatched = moviesWatched.map(item => ({
    ...item,
    status: 'Finished',
    type: 'Movie'
  }))

  gamesDropped = gamesDropped.map(item => ({
    ...item,
    status: 'Dropped',
    type: 'Game'
  }))

  tvDropped = tvDropped.map(item => ({
    ...item,
    status: 'Dropped',
    type: 'TV'
  }))

  gamesWantToPlay = gamesWantToPlay.map(item => ({
    ...item,
    status: 'Planned',
    type: 'Game'
  }))

  const finalData = [
    ...gamesCurrently,
    ...gamesPlayedNotCompleted,
    ...gamesOnHold,
    ...tvShows,
    ...gamesCompleted,
    ...moviesWatched,
    ...gamesDropped,
    ...tvDropped,
    ...gamesWantToPlay
  ]

  return fs.writeFile('./media.json', JSON.stringify(finalData, null, 2))
}).then()




