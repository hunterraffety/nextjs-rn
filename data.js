export const MOVIE_DATA = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 4.8,
    longDesc:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. ',
    genre: 'drama',
    image:
      'https://images.unsplash.com/photo-1538289272124-733d053ad09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    cover:
      'https://images.unsplash.com/photo-1553112295-4e7646a96859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1257&q=80',
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    longDesc:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. ',
    rating: 4.7,
    genre: 'action, crime, drama',
    image:
      'https://images.unsplash.com/photo-1553112295-4e7646a96859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1257&q=80',
    cover:
      'https://images.unsplash.com/photo-1553112295-4e7646a96859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1257&q=80',
  },
  {
    id: '3',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    longDesc:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. ',
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image:
      'https://images.unsplash.com/photo-1516493050975-4743df62322e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    cover:
      'https://images.unsplash.com/photo-1553112295-4e7646a96859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1257&q=80',
  },
]

const CATEGORY_DATA = [
  {
    id: '1',
    name: 'drama',
  },
  {
    id: '2',
    name: 'action',
  },
  {
    id: '3',
    name: 'comedy',
  },
  {
    id: '4',
    name: 'documentary',
  },
  {
    id: '5',
    name: 'adventure',
  },
  {
    id: '6',
    name: 'noir',
  },
]

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA)
      // reject('Uh-oh A-aron')
    }, 50)
  })
}

export const createMovie = movie => {
  return new Promise((resolve, reject) => {
    movie.id = Math.random().toString(36).substr(2, 7)
    MOVIE_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIE_DATA)
      // reject('Uh-oh A-aron')
    }, 50)
  })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      // reject('Uh-oh A-aron')
    }, 50)
  })
}

export const getMovieById = id => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id)
    const movie = MOVIE_DATA[movieIndex]
    setTimeout(() => resolve(movie), 50)
  })
}
