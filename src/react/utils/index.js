import slugify from "slugify";
const https = false;
const clientPort = 5000;
const protocol = https ? "https:" : "http:";
const hostname = location.hostname;
const apiPort = 5001;

export const apiUrl = to =>
  `${protocol}//${hostname}` + (apiPort !== 80 ? `:${apiPort}` : "") + to;

export const siteUrl = to =>
  `${protocol}//${hostname}` + (clientPort !== 80 ? `:${clientPort}` : "") + to;

export const sameUser = (user, currentUser) => user.id === currentUser.id;

export const slugifyTitle = title =>
  slugify(title, { remove: /[$*_+~.()'"!\-:@]/g });
