import React from "react";

const PhotoInfo = ({ copyright, date, explanation, title, url }) => {
  return (
    <div>
      <h2>Title: {title}</h2>
      <h4>Date: {date}</h4>
      <img src={url} alt='NASA CAPTURE OF THE DAY' />
      <h6> {copyright} </h6>
      <p> {explanation} </p>
    </div>
  );
};

export default PhotoInfo;
