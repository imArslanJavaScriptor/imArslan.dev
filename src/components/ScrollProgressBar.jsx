import React, { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[999] bg-transparent">
      <div
        className="h-full bg-blue-500 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
