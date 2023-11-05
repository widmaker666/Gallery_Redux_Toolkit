import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPictureData } from "./feature/picture.slice";

const App = () => {
  const picsData = useSelector((state) => state.pictures.pictures)
  const dispatch = useDispatch();

  const getData = () => {
    axios
    .get("http://localhost:5000/pictures")
    .then((res) => dispatch(setPictureData(res.data)));
  }

  useEffect(() => {
   getData()
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getData={getData}/>
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
