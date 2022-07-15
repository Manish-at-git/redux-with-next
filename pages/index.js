import { getMoviePickTwo, getMoviePick } from "../redux/actions/main";
import { useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

import MoviePick from "../components/MoviePick/MoviePick";

function Home() {
  const navbarData = useSelector((state) => state.main.navbarOpened);
  return (
    <>
      {!navbarData && (
        <div>
          <MoviePick
            heading="What To Watch"
            recommend="Get More Recommendations"
            title="TV Shows"
            text="TV Shows and Movies just for you"
            data="Two"
          />
          <MoviePick
            heading="What To Watch"
            recommend=""
            title="Movies"
            text="TV Shows and Movies just for you"
            data=""
            color="black"
          />
        </div>
      )}
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getMoviePick());
  store.dispatch(getMoviePickTwo());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
