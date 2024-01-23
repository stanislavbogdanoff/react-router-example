import axios from "axios";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/quotes?category=happiness", {
        headers: {
          "X-Api-Key": "GHc1qJjqqRQUKZMVeihjXA==bq99202NSFAAytwh",
        },
      })
      .then((response) => {
        setQuote(response.data[0]);
        console.log(response.data[0], "data saved to quote state");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Quote Page</h1>
      <span>
        <i>Author:</i> {quote.author}
      </span>
      <br />
      <span>
        <i>Category:</i> {quote.category}
      </span>
      <br />
      <span>
        <i>Quote:</i> {quote.quote}
      </span>
    </>
  );
};

export default AboutPage;
