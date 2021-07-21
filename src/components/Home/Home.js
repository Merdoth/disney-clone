import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';
import db from "../../firebase";
import Viewers from '../Common/Viewers';
import ImgSlider from "../Common/ImgSlider";
import Recommends from '../Common/Recommends';
import NewDisney from '../Common/NewDisney';
import Originals from '../Common/Originals';
import Trending from '../Common/Trending';

import { setMovies } from "../../reducers/movie/movieSlice";
import { selectUserName } from "../../reducers/user/userSlice";


function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies')
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data()}];
            break;

          case 'new':
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data()}];
            break;

          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data()}];
            break;

          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data()}];
            break;

          default:
            return "Loading..."
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending
        })
      )
    });
  }, [userName]);

  return (
    <main className="home__container">
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  )
}

export default Home;
