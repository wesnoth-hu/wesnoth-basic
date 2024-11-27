"use client";

import { title } from "process";
import React from "react";
import Article from "./Article";

interface Article {
  id: number;
  title: string;
  link: string;
}

const Articles: Article[] = [
  {
    id: 1,
    title: "Hűbéresek 1-5/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f0d94c5",
  },
  {
    id: 2,
    title: "Hűbéresek 6/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f0f94c5",
  },
  {
    id: 3,
    title: "Hűbéresek 7/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f1194c5",
  },
  {
    id: 4,
    title: "Hűbéresek 8/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f1594c5",
  },
  {
    id: 5,
    title: "Hűbéresek 9/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f1794c5",
  },
  {
    id: 6,
    title: "Hűbéresek 10/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f1994c5",
  },
  {
    id: 7,
    title: "Hűbéresek 11/11",
    link: "https%3A%2F%2Fmonogr.ph%2F67214179e3fcd2de8f1b94c5",
  },
];

export default function ArticleList() {
  return (
    <div>
      {Articles.map((article) => (
        <div key={article.id}>
          {article.id} - {article.title}{" "}
        </div>
      ))}
    </div>
  );
}
