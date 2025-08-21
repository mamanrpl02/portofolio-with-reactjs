import React, { useEffect, useRef, useState } from "react";

export default function CursorAura() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;
    const follow = () => {
      const dx = target.x - posRef.current.x;
      const dy = target.y - posRef.current.y;

      posRef.current.x += dx * 0.1;
      posRef.current.y += dy * 0.1;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate(${posRef.current.x - 25}px, ${posRef.current.y - 25}px)`;
      }

      animationFrame = requestAnimationFrame(follow);
    };

    follow();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.35)",
          boxShadow: "0 0 20px rgba(59,130,246,0.6)",
          animation: "pulse 1.5s infinite ease-in-out",
        }}
      />
    </div>
  );
}
