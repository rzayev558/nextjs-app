import React from "react";
import SearchForm from "./SearchForm";

async function Hero({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Freera</h1>
        <p className="sub-heading !max-w-3xl">
          Get cheap insurance with Freera
        </p>
        <SearchForm query={query}></SearchForm>
      </section>
    </>
  );
}

export default Hero;
