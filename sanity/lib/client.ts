import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function sanityFetch<QueryResponse>({
  query,
}: {
  query: string;
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, {});
}
