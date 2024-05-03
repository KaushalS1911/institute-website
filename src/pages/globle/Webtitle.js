import { useEffect } from "react";

function Webtitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default Webtitle;
