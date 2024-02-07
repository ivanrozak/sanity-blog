import React from "react";
import { PreviewProps } from "sanity";

interface PreviewYouTubeProps extends PreviewProps {
  url: string;
}

const VideoPreview = (props: PreviewYouTubeProps) => {
  const { url } = props;
  return (
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPreview;
