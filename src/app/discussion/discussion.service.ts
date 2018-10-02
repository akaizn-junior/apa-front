import { map } from 'rxjs/operators';

export default function DiscussionsService(http) {
  const BASE_URL = 'http://localhost:3000/api/discussions';

  return {
    getAll: () => {
      return http
      .get(BASE_URL)
      .pipe(map(data => data));
    },
    /**
     * getChunk
     * Request a chunk of data from the database
     * @param {number} skip The amout of initial data to skip
     * @param {number} limit The amout of data to return
     */
    getChunk: (skip: number, limit: number) => {
      return http
      .get(`${BASE_URL}/${skip}/${limit}`)
      .pipe(map(data => data));
    },
    getOne: (id: string) => {
      return http
      .get(`${BASE_URL}/${id}`)
      .pipe(map(data => data));
    }
  };
}
