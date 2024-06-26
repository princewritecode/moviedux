import { useEffect, useState } from "react";
export default function Script()
{
    const [movies, setMovies] = useState([]);
    const arr = ['1', '2', '3'];
    useEffect(() =>
    {
        setMovies(arr);
    }, []);
    console.log(movies);
    return null;
}






