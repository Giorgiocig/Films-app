import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAsyncShows } from "../../features/movies/movieSlice";
import MovieListing from "../MovingListing/MovieListing";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

export default function Home() {
  const movieText = "Harry";
  const showText = "Friends";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
