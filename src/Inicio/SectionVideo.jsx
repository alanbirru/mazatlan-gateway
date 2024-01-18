import React from "react";

const SectionVideo = () => {
  return (
    <div className="section-video">
      <iframe
        className="youtube-video"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/bzBzbF0_VIM?si=r11WkCbXdd8I7x6S"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <div className="youtube-text">
        <h1>An awesome beach in Mexico</h1>
        <p>
          Discover "The Pearl of the Pacific" as a couple, with family, friends
          or on your own. Are you ready to live the best adventure of your life?
        </p>

        <span>Follow us!</span>
      </div>
    </div>
  );
};

export default SectionVideo;
