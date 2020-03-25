import React, { useState } from "react";
import Header from "../Header";
import Display from "../Display";
import Menu from "../Menu";
import { numToString } from "../../utils/PostUtils";
import Overlay from "../Overlay";
import Slider from "../Slider";
import { FullScreenLoader } from "../Loader";
import { appTypes } from "../../actions/types";

const Home = ({
  subreddit,
  post,
  nextPost,
  prevPost,
  fetchPosts,
  loadNextPost,
  loadPrevPost
}) => {
  const [overlayActive, setOverlayActive] = useState(false);
  return (
    <div className="view home w-100 h-100" style={{ overflow: "hidden" }}>
      <Header subreddit={subreddit} fetchPosts={fetchPosts} />
      {/*
      <Display
        onSwipedDown={loadNextPost}
        onSwipedUp={loadPrevPost} x={0}
        y={-window.innerHeight}
        post={prevPost}
        autoplay={false}
      />
      
      */}
      <Slider handleSwipeDown={loadPrevPost} handleSwipeUp={loadNextPost}>
        <Display post={post} autoplay={true} />
      </Slider>
      {/*
      <Display
        onSwipedDown={loadNextPost}
        onSwipedUp={loadPrevPost}
        x={50}
        y={-window.innerHeight * 2}
        post={nextPost}
        autoplay={false}
      />
      
      */}
      <Menu />
    </div>
  );
};

export default Home;
