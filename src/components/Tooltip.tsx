import React, { useState, ReactNode } from "react";
import "../css/Tooltip.css";

type TooltipProps = {
  children: ReactNode;
  content: string;
  bgColor?: string;
};

const Tooltip: React.FC<TooltipProps> = (props) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 10);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={`Tooltip-Tip left`}
          style={
            {
              backgroundColor: props.bgColor,
              "--tooltip-arrow-color": props.bgColor,
            } as React.CSSProperties
          }
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
