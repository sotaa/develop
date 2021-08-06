import { Button } from "../../../lib";

interface SearchGiftsProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitSearch: () => void;
}

export function SearchGifs({
  handleSubmitSearch,
  handleInputChange,
}: SearchGiftsProps) {
  return (
    <div className="form">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Search all the GIFs
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        name="searchWord"
        placeholder="type something ..."
        style={{ borderRadius: "15px" }}
        onChange={handleInputChange}
      />

      <Button
        type="primary"
        size="sm"
        className="px-4 mt-2"
        onClick={handleSubmitSearch}
      >
        Search
      </Button>
    </div>
  );
}
