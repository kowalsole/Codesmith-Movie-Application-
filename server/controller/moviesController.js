// https://imdb.iamidiotareyoutoo.com/search?q=Inception
// fetch('https://imdb.iamidiotareyoutoo.com/search?q=&tt=&lsn=1&v=1')
// https://imdb.iamidiotareyoutoo.com/search?q=A

export async function getAllEntertainment(_, res, next) {
  try {
    const responseData = await (
      await fetch("https://imdb.iamidiotareyoutoo.com/search?q=A")
    ).json();

    return res.status(200).json(responseData);
  } catch (error) {
    return next({
      log: `Error in get All entertainment: ${error}`,
      status: 400,
      message: { err: "Error with Get all entertainment endpoint" },
    });
  }
}

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
      message: { err: "Error with Get all entertainment endpoint" },
    });
  }
}

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
      message: { err: "Error with Get all entertainment endpoint" },
    });
  }
}

export async function getWhereStreamingByTitle(req, res, next) {
  try {
    const query = req.params.name;

    // console.log(query);
    const responseData = await (
      await fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q=${query}`)
    ).json();

    return res.status(200).json(responseData);
  } catch (error) {
    return next({
      log: `Error in get All entertainment: ${error}`,
      status: 400,
      message: { err: "Error with Get all entertainment endpoint" },
    });
  }
}

export async function getEntertainmentTrailerById(req, res) {
  const query = req.params.id;

  // console.log(query, "test");
  const responseData = (
    await fetch(`https://imdb.iamidiotareyoutoo.com/media/${query}`)
  ).url;

  // console.log(query);
  // console.log(responseData.url)
  // console.log(responseData);

  return res.status(200).send(responseData);
}

export async function getEntertainmentPhotoById(req, res) {
  const query = req.params.id;

  // console.log(query, "test");
  const responseData = (
    await fetch(`https://imdb.iamidiotareyoutoo.com/photo/${query}`)
  ).url;

  // console.log(query);
  // console.log(responseData.url)
  // console.log(responseData);

  return res.status(200).send(responseData);
}
