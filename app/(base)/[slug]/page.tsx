import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

const BlogDetail = async ({ params }: { params: any }) => {
  const { slug } = params;
  const query = groq`*[_type == "post" && slug.current == $slug][0]`;
  const blog = await client.fetch(query, { slug });
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
