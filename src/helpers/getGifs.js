
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mhVXB17Q2Z09QhipR3Z2iHZwQns8Vi5v&q=${category}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs
  }