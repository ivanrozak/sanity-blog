"use client";
import React from "react";

const YoutubePreview = ({ url }: { url: string }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default YoutubePreview;
