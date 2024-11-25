import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type=="startup" && defined(slug.current) && !defined($search) || title match $search ||  category match $search || author -> name match $search] | order(_createAt desc) {
  _id,
    author -> {
      _id,name,avatar,bio
    },
    title,
    description,
    views,
    category,
    image,
    slug,_createdAt
    }`
);

export const STARTUP_BY_ID_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, username, avatar,bio
    },
    views,
    description,
    image,
    category,
    pitch
}`);
