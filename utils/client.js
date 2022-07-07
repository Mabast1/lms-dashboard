import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "7nxnffxv",
  dataset: "production",
  apiVersion: "2022-07-07",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
