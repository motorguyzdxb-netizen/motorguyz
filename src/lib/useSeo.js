import { useEffect } from "react";

export default function useSeo({ title, description, notFound = false }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  useEffect(() => {
    if (!notFound) return;
    const meta = document.createElement("meta");
    meta.setAttribute("name", "prerender-status-code");
    meta.setAttribute("content", "404");
    document.head.appendChild(meta);
    return () => meta.remove();
  }, [notFound]);
}