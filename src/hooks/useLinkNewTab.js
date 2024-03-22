import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      console.log(contentRef.current);
      const links = contentRef.current.querySelectorAll("a");
      links.forEach((item) => {
        item.setAttribute("target", "_blank");
      });
    }
  }, []);
  return {
    contentRef,
  };
}
