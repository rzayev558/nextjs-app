import Hero from "@/components/Hero";
import ProductCard, { ProductType } from "@/components/ProductCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import React from "react";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: products } = await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  });
  return (
    <>
      <Hero searchParams={searchParams}></Hero>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All products`}
        </p>
        <ul className="mt-7 card_grid">
          {products.length ? (
            products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          ) : (
            <p>no products found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}

export default Home;
