import React from "react";
import Lottie from "react-lottie";
import * as location from "./world-locations.json";
// import * as location1 from "./Weather-Icon.json";
// import * as success from "../1127-success.json";

export function PreLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={200} width={200} />
    </>
  );
}

// export function WeatherAnima() {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: location1.default,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <>
//       <Lottie options={defaultOptions} height={200} width={200} />
//     </>
//   );
// }
