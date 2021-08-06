import { useEffect, useState } from "react";
import { Button, Loading } from "../../../lib";
import { IGif } from "../../../models";
import { getApiService } from "../../../services";
import { GifsItem } from "../gifs-item/gifs.item";
import { SearchGifs } from "../search-gifs/search-gifs";
import styles from "./gifs.module.css";

const defaultOffset = 0;
const defaultLimit = 5;

export function Gifs() {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [limit] = useState(defaultLimit);
  const [offset, setOffset] = useState(defaultOffset);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchgifs(limit, offset);

    // eslint-disable-next-line
  }, []);

  const fetchgifs = async (limit: number, offset: number) => {
    try {
      setLoading(true);
      const result = await getApiService().fetchGifs(limit, offset);
      setGifs((state) => [...state, ...result.data]);
    } catch (error) {
      // TODO: Need to handle error
      console.log(error);
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchWord((prevState) => value);
  };

  const handleSubmitSearch = async () => {
    if (searchWord) {
      setLoading(true);
      setOffset(defaultOffset);
      setGifs((state) => []);
      try {
        const result = await getApiService().searchGifs(
          searchWord,
          limit,
          defaultOffset
        );
        setGifs((state) => [...result.data]);
      } catch (error) {
        // TODO: Need to handle error
        console.log(error);
      }
      setLoading(false);
    }
  };

  const handleMoreGifs = () => {
    const newOffset = offset + limit;
    setOffset((state) => newOffset);
    fetchgifs(limit, newOffset);
  };

  return (
    <div className="mb-5">
      <div className={`w-50 ${styles.searchGifsContainr}`}>
        <SearchGifs
          handleSubmitSearch={handleSubmitSearch}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className={styles.gifContainer}>
        {gifs.map((gif, index) => {
          return <GifsItem gifUrl={gif.images.original.url} key={index} />;
        })}
      </div>
      {!loading ? (
        <Button
          className="px-4 my-4"
          type="success"
          size="lg"
          onClick={handleMoreGifs}
        >
          more Gifs
        </Button>
      ) : (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
    </div>
  );
}
