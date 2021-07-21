import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Header.css";
import NavLogo from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/images/home-icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import WatchIcon from "../../assets/images/watchlist-icon.svg";
import OrigIcon from "../../assets/images/original-icon.svg";
import MoviesIcon from "../../assets/images/movie-icon.svg";
import SeriesIcon from "../../assets/images/series-icon.svg";
import { auth, provider } from "../../firebase";
import {
	selectUserName,
	selectUserPhoto,
  setSignOutState,
	setUserLoginDetails,
} from "../../reducers/user/userSlice";

function Header() {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [userName])

	const handleAuth = () => {
	  if (!userName) {

      auth
			.signInWithPopup(provider)
			.then((result) => {
				setUser(result.user);
			})
			.catch((error) => {
				alert(error.message);
			});

    } else if (userName) {

      auth.signOut()
      .then(() => {
        dispatch(setSignOutState())
        history.push('/');
      })
      .catch((error) => {
				alert(error.message);
			});

    }
	};

	const setUser = (user) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	return (
		<nav className="header__nav">
			<a href="#" className="header__logo">
				<img src={NavLogo} alt="Disney+ logo" />
			</a>

			{!userName ? (
				<a className="header__login" onClick={handleAuth}>
					Login
				</a>
			) : (
				<>
					<div className="header__navMenu">
						<a href="/home" className="header__menu">
							<img src={HomeIcon} alt="Home" />
							<span>HOME</span>
						</a>
						<a href="#"className="header__menu">
							<img src={SearchIcon} alt="Search" />
							<span>SEARCH</span>
						</a>
						<a href="#recommends" className="header__menu">
							<img src={WatchIcon} alt="Watchlist" />
							<span>WATCHLIST</span>
						</a>
						<a href="#originals" className="header__menu">
							<img src={OrigIcon} alt="Originals" />
							<span>ORIGINALS</span>
						</a>
						<a href="#movies" className="header__menu">
							<img src={MoviesIcon} alt="Movies" />
							<span>MOVIES</span>
						</a>
						<a href="#series" className="header__menu">
							<img src={SeriesIcon} alt="Series" />
							<span>SERIES</span>
						</a>
					</div>
          <div className="header__signOut">
            <img className="header__displayPic" src={userPhoto} alt={userName} />

            <div className="signOut__dropDown">
              <span onClick={handleAuth}>Sign out</span>
            </div>
          </div>
				</>
			)}
		</nav>
	);
}

export default Header;
