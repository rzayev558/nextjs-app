"use client";
import Form from "next/form";
import SearchButtonClear from "./SearchButtonClear";
import { Search } from "lucide-react";
interface SearchFormProps {
  query?: string;
  handleClick?: (value: string) => void;
}

function SearchForm({ query }: SearchFormProps) {
  return (
    <>
      <Form action="/" scroll={false} className="search-form">
        <input
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="search"
        />
        <div className="flex gap-2">
          {query && <SearchButtonClear />}
          <button type="submit" className="search-btn text-white">
            <Search className="size-5" />
          </button>
        </div>
      </Form>
    </>
  );
}

export default SearchForm;
