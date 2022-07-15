export const Movies = [
  {
    category: "Top 250 Movies",
    url: "Top250Movies",
  },
  {
    category: "popular",
    url: "MostPopularMovies",
  },
  {
    category: "Top Box Office",
    url: "BoxOffice",
  },
];
export const TV = [
  {
    category: "Top 250 TV Shows",
    url: "Top250TVs",
  },
  {
    category: "Popular TV Shows",
    url: "MostPopularTVs",
  },
  {
    category: "Rating",
    url: "MostPopularTVs",
  },
];
export const Awards = [
  {
    category: "Academy Awards",
    url: "ComingSoon",
  },
  {
    category: "Other Awards",
    url: "Top250Movies",
  },
];

export const NavRoutes = [...Movies, ...TV, ...Awards];
