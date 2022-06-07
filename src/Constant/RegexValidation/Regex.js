export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

// export const validLinkedin = new RegExp(
//   "^(http(s)?://)?linkedin.com/(pub|in|profile)"
// );

export const validLinkedin = new RegExp(
  "^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$"
);

export const validWebsiteUrl = new RegExp("^http[s]?://(www.)?(.*)?/?(.)*");
