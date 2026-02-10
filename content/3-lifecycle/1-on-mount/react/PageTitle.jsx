import { useState, useEffect } from "react";

export default function PageTitle() {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  return <p>页面标题: {pageTitle}</p>;
}
