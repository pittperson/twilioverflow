import axios from "axios";

export async function getTwilioTags(tagName) {
  let queryUrl = "";

  queryUrl = `https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&inname=${tagName}&site=stackoverflow&key=DkLwlYTWw9AoNuzTYgmnUg((`;
  return axios
    .get(queryUrl)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log("error: ", e.message);
    });
}
