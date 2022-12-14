import Link from "next/link";
import React from "react";

const Artcicle = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className="article">
        <h3>{article.title} ➡️</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default Artcicle;
