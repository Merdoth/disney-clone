import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./MovieDetails.css";
import db from "../../firebase";
import Play from "../../assets/images/play-icon-black.png";
import GroupIcon from "../../assets/images/group-icon.png";
import PlayTrailer from "../../assets/images/play-icon-white.png";

function MovieDetails() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});


  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase")
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      })
  }, [id]);

  return (
    <div className="movieDetails__cont">
      <div className="movieDetails__background">
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </div>

      <div className="movieDetails__imageTitle">
        <img src={detailData.titleImg} alt={detailData.title}/>
      </div>

      <div className="movieDetails__contentMeta">
        <div className="movieDetails__controls">
          <button className="movieDetails__player play">
            <img src={Play} alt="Play Button" />
            <span>Play</span>
          </button>

          <button className="movieDetails__player trailer">
            <img src={PlayTrailer} alt="Play Trailer Button" />
            <span>Trailer</span>
          </button>

          <div className="movieDetails__btn  addList">
            <span />
            <span />
          </div>

          <div className="movieDetails__btn groupWatch">
            <div>
              <img src={GroupIcon} alt="Group Icon" />
            </div>
          </div>
        </div>

        <div className="movieDetails__subTitle">
          {detailData.subTitle}
        </div>

        <div className="movieDetails__desc">
          {detailData.description}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;
