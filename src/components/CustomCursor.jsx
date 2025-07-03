import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      ringRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 400, fill: "forwards" }
      );
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-7 h-7 rounded-full transition-colors duration-500 
      bg-gradient-to-tr 
      from-cyan-400 via-blue-500 to-indigo-600 
      shadow-xl mix-blend-difference"
    ></div>
  );
};

export default CustomCursor;
