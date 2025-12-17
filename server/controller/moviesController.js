/* GET ALL ENTERTAINMENT  
-- Fetches a default list of entertainment titles from the IMDb API.*/
export async function getAllEntertainment(_, res, next) {
  try {
    const responseData = await (
      await fetch('https://imdb.iamidiotareyoutoo.com/search?q=A')
    ).json();

    return res.status(200).json(responseData);
  } catch (error) {
    return next({
      log: `Error in get All entertainment: ${error}`,
      status: 400,
      message: { err: 'Error with Get all entertainment endpoint' },
    });
  }
}

/* GET ENTERTAINMENT BY NAME  
-- Searches for entertainment titles by name using a query parameter. */
export async function getEntertainmentsByName(req, res, next) {
  const query = req.params.name;

  try {
    const responseData = await (
      await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
    ).json();

    return res.status(200).json(responseData);
  } catch (error) {
    return next({
      log: `Error in get All entertainment: ${error}`,
      status: 400,
      message: { err: 'Error with Get all entertainment endpoint' },
    });
  }
}

/* GET ENTERTAINMENT BY ID  
-- Retrieves detailed entertainment data for a single title using its IMDb ID. */
export async function getEntertainmentById(req, res, next) {
  try {
    const query = req.params.id;
    const responseData = await (
      await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${query}`)
    ).json();

    return res.status(200).json(responseData);
  } catch (error) {
    return next({
      log: `Error in get All entertainment: ${error}`,
      status: 400,
      message: { err: 'Error with Get all entertainment endpoint' },
    });
  }
}

/* GET WHERE STREAMING BY TITLE 
-- Fetches streaming availability information for a title by name. */
export async function getWhereStreamingByTitle(req, res, next) {
  try {
    const query = req.params.name;

    const responseData = await (
      await fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q=${query}`)
    ).json();

    return res.status(200).json(responseData);
  } catch (error) {
    return next({
      log: `Error in get All entertainment: ${error}`,
      status: 400,
      message: { err: 'Error with Get all entertainment endpoint' },
    });
  }
}

/* GET ENTERTAINMENT TRAILER BY ID 
-- Retrieves the trailer URL for a specific entertainment title by IMDb ID. */
export async function getEntertainmentTrailerById(req, res) {
  const query = req.params.id;

  const responseData = (
    await fetch(`https://imdb.iamidiotareyoutoo.com/media/${query}`)
  ).url;

  return res.status(200).send(responseData);
}

/* GET ENTERTAINMENT PHOTO BY ID 
-- Retrieves the primary image URL for a specific entertainment title by IMDb ID. */
export async function getEntertainmentPhotoById(req, res) {
  const query = req.params.id;

  const responseData = (
    await fetch(`https://imdb.iamidiotareyoutoo.com/photo/${query}`)
  ).url;

  return res.status(200).send(responseData);
}
