import { FormEvent, useRef } from "react";
import useProductQueryStore from "../store/useProductQueryStore";

function SearchInput() {
  const setSearchableText = useProductQueryStore(
    (selector) => selector.setSearchableText
  );
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef && inputRef.current != null) {
          setSearchableText(inputRef.current.value);
          inputRef.current.value = "";
        }
      }}
    >
      <input
        type="search"
        className="input"
        placeholder="Search products ..."
        ref={inputRef}
      />
    </form>
  );
}

export default SearchInput;
