import React from "react";

const Main = () => {
  return (
    <div>
      <img src="./cur.jpg" alt="" height="300px" />
      <br></br>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0-S5a0eXPoc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Main;
