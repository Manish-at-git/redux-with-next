import { getMoviePickTwo, getMoviePick } from "../redux/actions/main";
import { useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

import MoviePick from "../components/MoviePick/MoviePick";
import SingleMovie from "../components/SingleMovie/SingleMovie";
import SignIn from "../components/SignIn/SignIn";

function Home() {
  const navbarData = useSelector((state) => state.main.navbarOpened);
  return (
    <>
      {/* <SingleMovie /> */}
      {!navbarData && (
        <div>
          <MoviePick
            heading="What To Watch"
            recommend="Get More Recommendations"
            title="TV Shows"
            text="TV Shows and Movies just for you"
            data="Two"
            color="black"
          />
          <MoviePick
            heading=""
            recommend=""
            title="Movies"
            text="TV Shows and Movies just for you"
            data=""
            color="black"
          />
          <SignIn />
        </div>
      )}
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // store.dispatch(getMoviePick());
  // store.dispatch(getMoviePickTwo());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
