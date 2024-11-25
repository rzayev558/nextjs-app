import { ProductType } from "@/components/ProductCard";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
const md = markdownit();
export const experimental_ppr = true;
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const product: ProductType = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  const parsedContent = md.render(product?.pitch || "");
  if (!product) return notFound;
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(product._createdAt)}</p>
        <h1 className="heading"> {product.title}</h1>
        <p className="sub-heading !max-w-5xl">{product.description}</p>
      </section>

      <section className="section_container">
        <img
          src={product.image}
          alt="thumbnal"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              className="flex gap-2 items-center mb-3"
              href={`/user/${product.author?._id}`}
            >
              <Image
                src={product.author?.avatar || ""}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              ></Image>
              <div>
                <p className="text-20-medium">{product.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{product.author?.username}
                </p>
              </div>
            </Link>
            <p className="category-tag">{product.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
        </div>
      </section>
    </>
  );
};

export default Page;
