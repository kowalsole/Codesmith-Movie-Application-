import express from "express";

// https://imdb.iamidiotareyoutoo.com/search?q=Inception
// fetch('https://imdb.iamidiotareyoutoo.com/search?q=&tt=&lsn=1&v=1')
// https://imdb.iamidiotareyoutoo.com/search?q=A

export async function getMoviesByName(req, res) {
    const query = req.params.string

    console.log(query)
  const responseData = await (
    await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)).json();

  return res.status(200).json(responseData);
}


export async function getAllMovies(req, res) {
    // const query = req.body.query

    // console.log(query)
  const responseData = await (
    await fetch("https://imdb.iamidiotareyoutoo.com/search?q=A")).json();

  return res.status(200).json(responseData);
}
