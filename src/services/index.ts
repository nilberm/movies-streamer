import type { VideoProps } from '@/interfaces';
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '7cd33f57ce1734a36e86edb23ecef15f';

export async function getAllContent(page?: number) {
  const pageNumber = page ? page : 1;
  const url = `${baseURL}/trending/all/day?api_key=${apiKey}&page=${pageNumber}`;

  return await handleFetch(url);
}

export async function getMovies(page?: number) {
  const pageNumber = page ? page : 1;
  const url = `${baseURL}/discover/movie?api_key=${apiKey}&page=${pageNumber}`;

  return await handleFetch(url);
}

export async function getSeries(page?: number) {
  const pageNumber = page ? page : 1;
  const url = `${baseURL}/discover/tv?api_key=${apiKey}&page=${pageNumber}`;

  return await handleFetch(url);
}

export async function getTrailerByID(type: string, id: string) {
  const url = `${baseURL}/${type}/${id}/videos?api_key=${apiKey}`;
  const data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));

  const dataFiltered = data.results.filter((e: VideoProps) => e.type == 'Trailer');
  console.log(dataFiltered)
  return dataFiltered.length === 0 ? '' : dataFiltered[0].key;
}

export async function getStreamByID(type: string, id: string) {
  const url = `${baseURL}/${type}/${id}?api_key=${apiKey}`;
  return await handleFetch(url);
}

const handleFetch = async (url: string) => {
  const data = await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return data;
};
