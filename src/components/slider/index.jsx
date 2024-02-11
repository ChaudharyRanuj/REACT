import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState(null);

  function handlePrevBtn() {
    setCurrSlide((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  }
  function handleNextBtn() {
    setCurrSlide((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  }
  console.log(currSlide);
  useEffect(() => {
    async function fetchImageData(getUrl) {
      try {
        setLoading(true);
        const res = await fetch(`${getUrl}pag=${page}&limit=${limit}`);
        // error handling
        if (!res.ok) {
          throw Error("Something went wrong while fetching images.");
        }
        const data = await res.json();

        setImages(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    if (url !== "") fetchImageData(url);
  }, [url, limit, page]);

  if (loading)
    return (
      <div>
        <p>Images are loading..</p>
      </div>
    );
  if (errorMsg)
    return (
      <div>
        <p>{errorMsg}</p>
      </div>
    );

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="prevBtn"
        size={40}
        onClick={handlePrevBtn}
      />
      {images.map((ele, index) => (
        <img
          src={ele.download_url}
          width={"300px"}
          height={"300px"}
          alt=""
          className={currSlide === index ? "current-slide" : "hide-slide"}
          key={index}
        />
      ))}
      <div className="current-slide-container">
        {[...Array(images.length)].map((_, index) => (
          <div
            className={
              currSlide === index
                ? "current-slide-circle current-slide"
                : "current-slide-circle"
            }
          ></div>
        ))}
      </div>
      <BsArrowRightCircleFill
        className="nextBtn"
        size={40}
        onClick={handleNextBtn}
      />
    </div>
  );
}

export default ImageSlider;
