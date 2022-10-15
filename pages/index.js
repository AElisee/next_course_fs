import React from "react";
import Article from "../components/Artcicle";
import Meta from "../components/Meta";

const index = ({ articles }) => {
  return (
    <div>
      <Meta />
      <h1>Blog</h1>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
