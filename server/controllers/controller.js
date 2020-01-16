let movies = [{
    "id": 0,
    "title": "Gladiator",
    "img": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "rating": "R",
    "imdbRating": "8.5"
},
{
    "id": 1,
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "img": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    "rating": "PG-13",
    "imdbRating": "8"
},
{
    "id": 2,
    "title": "A Knight's Tale",
    "img": "https://m.media-amazon.com/images/M/MV5BMTE5OTE4OTE2Nl5BMl5BanBnXkFtZTYwMDkzMTQ3._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "After his master dies, a peasant squire, fueled by his desire for food and glory, creates a new identity for himself as a knight.",
    "rating": "PG-13",
    "imdbRating": "6.9"
},
{
    "id": 3,
    "title": "Casino Royale",
    "img": "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
    "rating": "PG-13",
    "imdbRating": "8"
},
{
    "id": 4,
    "title": "Skyfall",
    "img": "https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    "rating": "PG-13",
    "imdbRating": "7.7"
},
{
    "id": 5,
    "title": "Miss Peregrine's Home for Peculiar Children",
    "img": "https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_UY268_CR16,0,182,268_AL_.jpg",
    "description": "When Jacob (Asa Butterfield) discovers clues to a mystery that stretches across time, he finds Miss Peregrine's Home for Peculiar Children. But the danger deepens after he gets to know the residents and learns about their special powers.",
    "rating": "PG-13",
    "imdbRating": "6.7"
},
{
    "id": 6,
    "title": "Corpse Bride",
    "img": "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    "rating": "PG",
    "imdbRating": "7.3"
},
{
    "id": 7,
    "title": "Sherlock Holmes",
    "img": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
    "rating": "PG-13",
    "imdbRating": "7.6"
},
{
    "id": 8,
    "title": "Harry Potter and the Sorcerer's Stone",
    "img": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    "rating": "PG",
    "imdbRating": "7.6"
},
{
    "id": 9,
    "title": "The Fast and the Furious",
    "img": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
    "rating": "PG-13",
    "imdbRating": "6.8"
},
{
    "id": 10,
    "title": "Signs",
    "img": "https://m.media-amazon.com/images/M/MV5BNDUwMDUyMDAyNF5BMl5BanBnXkFtZTYwMDQ3NzM3._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "A family living on a farm finds mysterious crop circles in their fields which suggests something more frightening to come.",
    "rating": "PG-13",
    "imdbRating": "6.7"
},
{
    "id": 11,
    "title": "The Bourne Identity",
    "img": "https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
    "rating": "PG-13",
    "imdbRating": "7.9"
}]

let id = 12

module.exports = {
    getMovies(req, res){
        res.status(200).send(movies)
    },
    addMovie(req, res){
        const { title, img, description, rating, imdbRating } = req.body
        const newMovie = {id: id++, title, img, description, rating, imdbRating}
        movies.push(newMovie)
        res.status(200).send(movies) 
    },
    editMovie(req, res){
        const{id} = req.params
        const editIndex = movies.findIndex(element => {
            return +id === element.id})
        movies[editIndex] = {id, ...req.body}
        res.status(200).send(movies)
    }
}
