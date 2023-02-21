const add = (a :number, b : number) => a + b;
const state : string[] = [];

type Photo = {
  urls: { small:string },
  alt_description: string
};

const fetchData = async () => {
  const searchbar : HTMLInputElement = document.querySelector('#search-bar')!;
  const search = searchbar.value;

  const photos = await fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
  const data = await photos.json();
  data.results.forEach((photo: Photo) => {
    document.querySelector('#main-container__images')!.innerHTML += `
    <img class="main-containter__photo" src="${photo.urls.small}" alt="${photo.alt_description}">`;
  });
  state.unshift(search);
  window.localStorage.setItem('searchKey', state.toString());
};

document.querySelector('#search-btn')?.addEventListener('click', fetchData);

export { add };
