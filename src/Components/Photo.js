import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoInfo from "./PhotoInfo";

export default function Photo() {
  const [capture, setCapture] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=mb3qKb7eRGkSl8DUb8GzKc0iJUTc9hU6tMW05KS3`
      )
      .then((res) => {
        console.log(res);
        setCapture(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <PhotoInfo
        title={capture.title}
        date={capture.date}
        url={capture.url}
        copyright={capture.copyright}
        explanation={capture.explanation}
      />
    </div>
  );
}
