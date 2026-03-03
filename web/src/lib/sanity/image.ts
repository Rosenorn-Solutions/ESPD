import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "@/types";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
