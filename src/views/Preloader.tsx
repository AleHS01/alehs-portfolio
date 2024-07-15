import React, { useState, useEffect, useRef } from "react";
import "../css/Preloader.css";
import WAVES from "vanta/dist/vanta.waves.min.js";
type PreloaderType = {
  theme: string;
};

const Preloader: React.FC<PreloaderType> = ({ theme }) => {
  const [vantaEffect, setVantaEffect] = useState(undefined);
  const myRef = useRef(null);
  const [zoom, setZoom] = useState(0.8);

  const getColor = () => {
    if (theme == "light") {
      return "rgb(57, 88, 134)";
    } else if (theme == "dark") {
      return "rgb(3, 32, 48)";
    } else {
      return "rgb(7, 96, 66)";
    }
  };

  useEffect(() => {
    const incrementZoom = (targetZoom: number, duration: number) => {
      const startZoom = zoom;
      const increment = (targetZoom - startZoom) / ((duration / 1000) * 60);

      const updateZoom = () => {
        setZoom((prevZoom) => {
          const newZoom = prevZoom + increment;
          if (increment > 0 ? newZoom >= targetZoom : newZoom <= targetZoom) {
            return targetZoom;
          } else {
            setTimeout(updateZoom, 1000 / 60);
            return newZoom;
          }
        });
      };

      updateZoom();
    };

    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: getColor(),
          zoom: zoom,
        })
      );
    }
    incrementZoom(1.8, 1000);
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, zoom]);

  return (
    <div className="preloader center" ref={myRef}>
      <div className="name-container">
        <svg
          id="preloader-logo"
          width="464"
          height="119"
          viewBox="0 0 464 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M442.441 33.7486L442.702 35.9546H444.923H457.196H459.778L459.695 33.3739C459.508 27.5914 457.706 22.3758 454.295 17.7999C450.947 13.264 446.437 9.73901 440.85 7.19842C435.223 4.60527 428.858 3.34091 421.81 3.34091C414.817 3.34091 408.41 4.62651 402.628 7.24383C396.882 9.82676 392.231 13.4999 388.749 18.2777L388.747 18.2805C385.239 23.1089 383.514 28.7478 383.514 35.0909C383.514 42.7781 386.145 49.1832 391.486 54.0667C396.619 58.7594 403.474 62.2717 411.914 64.6981L411.918 64.6993L424.805 68.3811L424.814 68.3836L424.822 68.3861C428.407 69.3818 431.726 70.5387 434.782 71.8534C437.677 73.0985 439.914 74.674 441.573 76.5377C443.034 78.1775 443.855 80.3765 443.855 83.3636C443.855 86.6483 442.902 89.4368 441.019 91.8363C439.072 94.282 436.391 96.2585 432.876 97.722C429.37 99.1478 425.353 99.8864 420.787 99.8864C416.882 99.8864 413.274 99.3116 409.945 98.1828C406.727 97.0468 404.127 95.3577 402.082 93.1384C400.181 91.0086 399.033 88.2734 398.732 84.7853L398.535 82.5H396.241H383.151H380.466L380.657 85.1781C381.096 91.3285 382.993 96.8073 386.385 101.541L386.393 101.552C389.817 106.279 394.48 109.917 400.29 112.495L400.295 112.498C406.171 115.089 413.024 116.341 420.787 116.341C429.1 116.341 436.325 114.951 442.37 112.057C448.38 109.196 453.059 105.28 456.279 100.265C459.517 95.2765 461.128 89.6883 461.128 83.5682C461.128 78.3199 460.051 73.7099 457.758 69.8622C455.574 66.1974 452.779 63.17 449.376 60.8114C446.144 58.5145 442.736 56.6919 439.155 55.3531C435.758 54.0704 432.643 53.0536 429.816 52.3112C429.813 52.3105 429.811 52.3099 429.808 52.3092L419.187 49.4496L419.18 49.4478L419.173 49.446C417.313 48.9564 415.254 48.315 412.992 47.5173C410.84 46.7247 408.781 45.7273 406.816 44.5239C404.991 43.3737 403.512 41.9631 402.354 40.2889C401.344 38.752 400.787 36.8522 400.787 34.4773C400.787 31.6519 401.582 29.1898 403.166 27.0074C404.811 24.7893 407.128 22.9844 410.224 21.6347C413.326 20.2974 417.032 19.5909 421.401 19.5909C427.36 19.5909 432.21 20.9329 436.086 23.4765C439.832 25.935 441.914 29.3004 442.441 33.7486Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M278.557 112V114.5H281.057H293.739H296.239V112V67.6591H347.08V112V114.5H349.58H362.261H364.761V112V7.27274V4.77274H362.261H349.58H347.08V7.27274V51.4091H296.239V7.27274V4.77274H293.739H281.057H278.557V7.27274V112Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M192.494 112V114.5H194.994H259.017H261.517V112V100.75V98.25H259.017H210.176V67.6591H254.926H257.426V65.1591V53.9091V51.4091H254.926H210.176V21.0227H258.199H260.699V18.5227V7.27274V4.77274H258.199H194.994H192.494V7.27274V112Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M111.494 112V114.5H113.994H175.358H177.858V112V100.75V98.25H175.358H129.176V7.27274V4.77274H126.676H113.994H111.494V7.27274V112Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M20.9773 114.5H22.7427L23.3332 112.836L33.2713 84.8409H72.0924L82.0304 112.836L82.621 114.5H84.3864H97.6818H101.263L100.029 111.138L61.5741 6.41102L60.9725 4.77274H59.2273H46.1364H44.3911L43.7896 6.41102L5.33503 111.138L4.10065 114.5H7.68182H20.9773ZM52.6818 30.1616L66.3238 68.5909H39.0398L52.6818 30.1616Z"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
