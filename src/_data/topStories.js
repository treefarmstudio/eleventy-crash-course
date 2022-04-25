require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getTopStories() {
  const category = 'technology';
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.NYT_API_KEY}`;
  const response = EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });
  const articles = await response;
  return articles;
}

module.exports = getTopStories;