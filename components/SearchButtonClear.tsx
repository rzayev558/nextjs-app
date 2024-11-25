import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchButtonClear = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <div>
      {" "}
      <button type="reset" onClick={reset}>
        <Link className="search-btn text-white" href="/">
          <X className="size-5" />
        </Link>
      </button>
    </div>
  );
};

export default SearchButtonClear;
