const initialState = {
    movies:[
     
        {
            "id": 1,
            "title": "wanted",
            "genre": "Action",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_.jpg",
            "trailer":"https://www.youtube.com/embed/edpEspHOeVU?si=doiBuaIKGsNzSHaP",
            "description": "A man is hired by the government to hunt down a notorious outlaw.",
            "year": 2008,
            "director": "James Mangold",
    
    },
    {
        "id": 2,
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "poster": "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_QL75_UX500_CR0,47,500,281_.jpg",
        "trailer":"https://www.youtube.com/embed/NmzuHjWmXOc?si=I1UKLap7ZuM_CJwg",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual",
        "year": 1994,
        "director": "Frank Darabont",
        
    }
    ]
}

const moviereducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}
export default moviereducer