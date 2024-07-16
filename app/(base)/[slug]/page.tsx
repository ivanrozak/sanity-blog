import { client, sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Skeleton } from "@nextui-org/react";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
const Youtube = dynamic(() => import("@/components/YoutubePreview"), {
  loading: () => <Skeleton className="aspect-video w-[80%] mx-auto"></Skeleton>,
  ssr: false,
});

const BlogDetail = async ({ params }: { params: any }) => {
  const { slug } = params;
  const query = groq`*[_type == "post" && slug.current == $slug][0]`;
  const blog: any = await sanityFetch({
    query,
    params: { slug },
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold">{blog?.title}</h1>
      <Image
        src={urlForImage(blog?.mainImage)}
        alt="Post"
        width={700}
        height={400}
        className="mx-auto mt-8"
      />
      <div className={richTextStyles}>
        <PortableText
          value={blog?.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
    youtube: ({ value }: any) => {
      const { url } = value;
      return (
        <div className="aspect-video w-[80%] mx-auto">
          <Youtube url={url} />
        </div>
      );
    },
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-5xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
prose-ul:mb-4
prose-a:text-blue-500
`;

export default BlogDetail;
