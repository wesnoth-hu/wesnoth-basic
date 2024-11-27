"use client";

import Link from "next/link";
import React from "react";

interface Article {
  id: number;
  title: string;
  link: string;
}

const Articles: Article[] = [
  {
    id: 1,
    title: "Hűbéresek 1-5/11",
    link: "https://monogr.ph/67214179e3fcd2de8f0d94c5",
  },
  {
    id: 2,
    title: "Hűbéresek 6/11",
    link: "https://monogr.ph/67214179e3fcd2de8f0f94c5",
  },
  {
    id: 3,
    title: "Hűbéresek 7/11",
    link: "https://monogr.ph/6721417ae3fcd2de8f1194c5",
  },
  {
    id: 4,
    title: "Hűbéresek 8/11",
    link: "https://monogr.ph/6721417ae3fcd2de8f1594c5",
  },
  {
    id: 5,
    title: "Hűbéresek 9/11",
    link: "https://monogr.ph/6721417ae3fcd2de8f1794c5",
  },
  {
    id: 6,
    title: "Hűbéresek 10/11",
    link: "https://monogr.ph/6721417ae3fcd2de8f1994c5",
  },
  {
    id: 7,
    title: "Hűbéresek 11/11",
    link: "https://monogr.ph/6721417ae3fcd2de8f1b94c5",
  },
  {
    id: 8,
    title: "Lázadók 1-6/12",
    link: "https://monogr.ph/6721417ce3fcd2de8f2d94c5",
  },
  {
    id: 9,
    title: "Lázadók 7/12",
    link: "https://monogr.ph/6721417de3fcd2de8f2f94c5",
  },
  {
    id: 10,
    title: "Lázadók 8/12",
    link: "https://monogr.ph/6721417de3fcd2de8f3194c5",
  },
  {
    id: 11,
    title: "Lázadók 9/12",
    link: "https://monogr.ph/6721417de3fcd2de8f3394c5",
  },
  {
    id: 12,
    title: "Lázadók 10/12",
    link: "https://monogr.ph/6721417de3fcd2de8f3594c5",
  },
  {
    id: 13,
    title: "Lázadók 11/12",
    link: "https://monogr.ph/6721417de3fcd2de8f3794c5",
  },
  {
    id: 14,
    title: "Lázadók 12/12",
    link: "https://monogr.ph/6721417de3fcd2de8f3994c5",
  },
];

export default function Article() {
  const [selectedArticle, setSelectedArticle] = React.useState<string | null>(
    null
  );

  const handleArticleClick = (link: string) => {
    setSelectedArticle(link);
  };

  const handleReturn = () => {
    setSelectedArticle(null);
  };
  return (
    <>
      {selectedArticle ? (
        <>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={handleReturn}
          >
            Vissza
          </div>
          <iframe
            src={selectedArticle as string}
            width="100%"
            height="500px"
            allowFullScreen
            tabIndex={0}
            loading="lazy"
          ></iframe>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Hogyan játsszuk</h2>
          {Articles.map((article) => (
            <div
              key={article.id}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link
                href={article.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleArticleClick(article.link);
                }}
              >
                {article.title}
              </Link>
              <span>{"-".repeat(article.title.length + 6)}</span>
            </div>
          ))}
          <span>Folytatás következik...</span>
        </div>
      )}
    </>
  );
}
