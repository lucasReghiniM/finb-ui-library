import React, { useEffect, useRef } from "react";
import "./ProgressBar.scss";

//improving note
//settup package to accept import type from other files

export interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, ...props }) => {
  const bar = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (bar.current) {
      bar.current.style.width = percentage + "%";
    }
  }, [percentage]);

  return (
    <div className="progressBarContainer">
      <div ref={bar} className="progressBar"></div>
    </div>
  );
};

export default ProgressBar;
