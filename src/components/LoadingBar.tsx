import { useState, useEffect } from "react";

const LoadingBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-muted">
      <div className="h-full gradient-primary loading-bar" />
    </div>
  );
};

export default LoadingBar;
