
export const mockSearch = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "Search": MOCK_DATA,
            "totalResults": "1884",
            "Response": "True"
        });
    }, 1000);
});

export const mockGetMovieById = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(MOCK_MOVIE);
    }, 1000);
});

const MOCK_MOVIE = {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "Rated": "PG-13",
    "Released": "26 Apr 2019",
    "Runtime": "181 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
    "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "Language": "English, Japanese, Xhosa, German",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 70 wins & 132 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "94%"
        },
        {
            "Source": "Metacritic",
            "Value": "78/100"
        }
    ],
    "Metascore": "78",
    "imdbRating": "8.4",
    "imdbVotes": "999,441",
    "imdbID": "tt4154796",
    "Type": "movie",
    "DVD": "30 Jul 2019",
    "BoxOffice": "$858,373,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}


const MOCK_DATA = [
    {
        Title: 'Fight Club',
        Year: '1999',
        imdbID: 'tt0137523',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    },
    {
        Title: 'Fist Fight',
        Year: '2017',
        imdbID: 'tt3401882',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NzkyMjE5NF5BMl5BanBnXkFtZTgwMDE5NTg3MDI@._V1_SX300.jpg'
    },
    {
        Title: 'The Good Fight',
        Year: '2017–',
        imdbID: 'tt5853176',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMDI3OThlOTUtZGY0ZC00NmNlLTk2YTEtYjA3NjE3ODAwZjMzXkEyXkFqcGdeQXVyODM0NDY1ODY@._V1_SX300.jpg'
    },
    {
        Title: 'Run Hide Fight',
        Year: '2020',
        imdbID: 'tt11456054',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNTkyMzMxN2MtNjFjYS00MmRjLWJjMjctYzBlMGZiM2I1MmQ2XkEyXkFqcGdeQXVyNjIwNjI4NTA@._V1_SX300.jpg'
    },
    {
        Title: 'Winter on Fire: Ukraine\'s Fight for Freedom',
        Year: '2015',
        imdbID: 'tt4908644',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNTY4MDgwOTI3M15BMl5BanBnXkFtZTgwNjYxMjU3NjE@._V1_SX300.jpg'
    },
    {
        Title: 'Ip Man: The Final Fight',
        Year: '2013',
        imdbID: 'tt2495118',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNmEwOGFhOTAtNDY0Yy00MDIwLWJjZWEtMzk5OGFmNTljMjE2XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg'
    },
    {
        Title: 'Why We Fight',
        Year: '2005',
        imdbID: 'tt0436971',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDk2ZDZmZGUtNTlmNS00YzU0LWI1MDgtYzg4MzgzZWYwYTY2XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg'
    },
    {
        Title: 'Bring It On: Fight to the Finish',
        Year: '2009',
        imdbID: 'tt1349482',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTg3NjMzOTExNl5BMl5BanBnXkFtZTcwNTY4ODc3Mg@@._V1_SX300.jpg'
    },
    {
        Title: 'Asterix and the Big Fight',
        Year: '1989',
        imdbID: 'tt0096842',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDlhMjljNTctMDI2MS00ODdkLWE1MjktN2IwOTg2NzU0ZWQ0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
    },
    {
        Title: 'Love at First Fight',
        Year: '2014',
        imdbID: 'tt3204144',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTY1ODMxODE3Ml5BMl5BanBnXkFtZTgwNzY3MzExNTE@._V1_SX300.jpg'
    }
]