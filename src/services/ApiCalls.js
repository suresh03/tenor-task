
import env from "../env.json";
let SearchApiUrl = "https://g.tenor.com/v1/search?"
let TrendingTermsUrl = "https://tenor.googleapis.com/v2/trending_terms?"
let FeaturedGifsUrl = "https://tenor.googleapis.com/v2/featured?"

const GetHttp = (url) => {
    return fetch(`${url}`)
      .then((response) => response.json())
      .then((myJson) => myJson)
      .catch((err) => {
        //ToastNotification({ message: "something went wrong" });
        return false;
      });
  };
  
  const PostHttp = (url, body) => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => {
       // ToastNotification({ message: "something went wrong" });
        return false;
      });
  };
  export { GetHttp, PostHttp, SearchApiUrl,TrendingTermsUrl,FeaturedGifsUrl};