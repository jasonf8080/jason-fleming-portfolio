import React from "react";

const Underline = ({
  mobileWidth = 100,
  width = 200,
  height = 8,
  className = "",
}) => {
  return (
    <div
      style={{
        "--w": `${Number(mobileWidth)}px`,
        "--wMd": `${Number(width)}px`,
        "--h": `${Number(height)}px`,
      }}
      className={`
        w-[var(--w)]
        md:w-[var(--wMd)]
        h-[var(--h)]
        text-underline
        ${className}
      `}
    />
  );
};

export default Underline;