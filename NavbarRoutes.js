export const Movies = [
  {
    category: "Top 250",
    url: "Top250Movies",
  },
  {
    category: "Most Popular",
    url: "MostPopularMovies",
  },
  {
    category: "Box Office",
    url: "BoxOffice",
  },
];
export const TV = [
  {
    category: "Top 250 ",
    url: "Top250TVs",
  },
  {
    category: "Most Popular",
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
    url: "InTheaters",
  },
  {
    category: "Other Awards",
    url: "InTheaters",
  },
];

export const NavRoutes = [...Movies, ...TV, ...Awards];
