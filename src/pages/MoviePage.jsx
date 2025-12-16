import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5500/api/info/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("FULL RESPONSE:", data);
            setMovie(data)
            })
        .catch((err) => console.error(err));
    }, [id]);

    if (!movie) return <p>Loading...</p>

    console.log("movie response:", movie);

    const title = movie.main.titleText?.text;
    const year = movie.main.releaseDate?.year;

    // if (!movie.description || movie.description.length === 0) {
    //     return <p>No movie data found.</p>
    // }

    // const info = movie.description[0];

    return (
        <div>
            <h1>{title}</h1>
            <p>{year}</p>
        </div>
    );
}

export default MoviePage;