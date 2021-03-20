import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MouseoverInfo from './MouseoverInfo';

const StyledPath = styled.path`
  fill: ${props => props.theme.heatmapColors[props.color]};
`;

const FloorPlan = ({ svgRef, times }) => {
  const [heatMap, setHeatMap] = useState([]);
  const [pos, setPos] = useState([0, 0]);
  const [active, setActive] = useState('');
  const [isVisible, setIsViible] = useState(false);

  useEffect(() => {
    setHeatMap(times.map(t => {
      const getColor = (time) => {
        if (time > 190) return 1;
        if (time > 150) return 2;
        if (time > 140) return 3;
        if (time > 135) return 4;
        if (time > 130) return 5;
        if (time > 120) return 6;
        if (time > 90) return 7;
        if (time > 60) return 8;
        return 9;
      }

      return { id: t.camId, time: t.times.seconds, string: t.times.string, color: getColor(t.times.seconds) }
    }))
  }, []);

  const handleHover = (e) => {
    setPos([e.pageX - 320, e.pageY - 180]);
    const index = e.target.getAttribute('data-index');

    heatMap[index] ? setIsViible(true) : setIsViible(false);
    if (!index) return;
    setActive({ camId: heatMap[index].id, time: heatMap[index].string, color: heatMap[index].color });
  }

  if (heatMap.length === 0) return <div>Loading...</div>;

  return (
    <>
      <MouseoverInfo x={pos[0]} y={pos[1]} data={active} isVisible={isVisible} />
      <svg className="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" ref={svgRef} onMouseMove={(e) => handleHover(e)}>
        <defs>
          <style>
            {`.prefix__cls-2, .prefix__cls-4 { fill: #fff } .prefix__cls-3 { fill: #9598fa } .prefix__cls-4 { opacity: .23 } .prefix__cls-10, .prefix__cls-11, .prefix__cls-12, .prefix__cls-13, .prefix__cls-14, .prefix__cls-5, .prefix__cls-6, .prefix__cls-7, .prefix__cls-8, .prefix__cls-9 { opacity: .95 }`}
          </style>
        </defs>
        <path
          fill="#e0e1fe"
          d="M0 0h1419v784H0z"
          id="prefix__Layer_2"
          data-name="Layer 2"
        />
        <g id="prefix__Layer_1" data-name="Layer 1">
          <path className="prefix__cls-2" d="M42.86 15.43H352.5v99.07H42.86z" />
          <path
            className="prefix__cls-3"
            d="M350 17.93V112H45.36V17.93H350m5-5H40.36V117H355V12.93z"
          />
          <path className="prefix__cls-2" d="M15.14 233.14h99.07v309.64H15.14z" />
          <path
            className="prefix__cls-3"
            d="M111.72 235.64v304.64H17.64V235.64h94.08m5-5H12.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M285.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M381.72 235.64v304.64h-94.08V235.64h94.08m5-5H282.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M395.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M491.72 235.64v304.64h-94.08V235.64h94.08m5-5H392.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M668.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M764.72 235.64v304.64h-94.08V235.64h94.08m5-5H665.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M778.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M874.72 235.64v304.64h-94.08V235.64h94.08m5-5H775.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M1042.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M1138.72 235.64v304.64h-94.08V235.64h94.08m5-5h-104.08v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M1152.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M1248.72 235.64v304.64h-94.08V235.64h94.08m5-5h-104.08v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2"
            d="M745.86 669.43h309.64v99.07H745.86z"
          />
          <path
            className="prefix__cls-3"
            d="M1053 671.93V766H748.36v-94.07H1053m5-5H743.36V771H1058V666.93z"
          />
          <path
            className="prefix__cls-2"
            d="M1067.86 669.43h309.64v99.07h-309.64z"
          />
          <path
            className="prefix__cls-3"
            d="M1375 671.93V766h-304.64v-94.07H1375m5-5h-314.64V771H1380V666.93z"
          />
          <path
            className="prefix__cls-2"
            d="M423.86 669.43H733.5v99.07H423.86z"
          />
          <path
            className="prefix__cls-3"
            d="M731 671.93V766H426.36v-94.07H731m5-5H421.36V771H736V666.93z"
          />
          <path className="prefix__cls-2" d="M46.86 669.43H356.5v99.07H46.86z" />
          <path
            className="prefix__cls-3"
            d="M354 671.93V766H49.36v-94.07H354m5-5H44.36V771H359V666.93z"
          />
          <path className="prefix__cls-2" d="M434.86 15.43H744.5v99.07H434.86z" />
          <path
            className="prefix__cls-3"
            d="M742 17.93V112H437.36V17.93H742m5-5H432.36V117H747V12.93zM0 0h26v26H0zM377 0h26v26h-26zM777 0h26v26h-26zM1040 0h26v26h-26zM1393 0h26v26h-26zM1393 758h26v26h-26zM0 758h26v26H0zM377 758h26v26h-26zM1393 519h26v26h-26zM1393 273h26v26h-26z"
          />
        </g>
        <g id="prefix__Layer_6" data-name="Layer 6">
          <path
            className="prefix__cls-4"
            d="M5.57 46h35.61v35.61H5.57zM5.57 86.22h35.61v35.61H5.57zM5.57 126.45h35.61v35.61H5.57zM5.57 166.67h35.61v35.61H5.57zM47.11 46h35.61v35.61H47.11zM47.11 86.22h35.61v35.61H47.11z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M47.11 126.45h35.61v35.61H47.11zM47.11 166.67h35.61v35.61H47.11z"
          />
          <path
            className="prefix__cls-4"
            d="M88.65 46h35.61v35.61H88.65zM88.65 86.22h35.61v35.61H88.65z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M88.65 126.45h35.61v35.61H88.65zM88.65 166.67h35.61v35.61H88.65z"
          />
          <path
            className="prefix__cls-4"
            d="M130.2 46h35.61v35.61H130.2zM130.2 86.22h35.61v35.61H130.2z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M130.2 126.45h35.61v35.61H130.2zM130.2 166.67h35.61v35.61H130.2z"
          />
          <path
            className="prefix__cls-4"
            d="M171.74 46h35.61v35.61h-35.61zM171.74 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M171.74 126.45h35.61v35.61h-35.61zM171.74 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M213.28 46h35.61v35.61h-35.61zM213.28 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M213.28 126.45h35.61v35.61h-35.61zM213.28 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M254.82 46h35.61v35.61h-35.61zM254.82 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M254.82 126.45h35.61v35.61h-35.61zM254.82 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M296.36 46h35.61v35.61h-35.61zM296.36 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M296.36 126.45h35.61v35.61h-35.61zM296.36 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M337.9 46h35.61v35.61H337.9zM337.9 86.22h35.61v35.61H337.9z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M337.9 126.45h35.61v35.61H337.9zM337.9 166.67h35.61v35.61H337.9z"
          />
          <path
            className="prefix__cls-4"
            d="M379.45 46h35.61v35.61h-35.61zM379.45 86.22h35.61v35.61h-35.61zM379.45 126.45h35.61v35.61h-35.61zM379.45 166.67h35.61v35.61h-35.61zM420.99 46h35.61v35.61h-35.61zM420.99 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M420.99 126.45h35.61v35.61h-35.61zM420.99 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M462.53 46h35.61v35.61h-35.61zM462.53 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M462.53 126.45h35.61v35.61h-35.61zM462.53 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M504.07 46h35.61v35.61h-35.61zM504.07 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M504.07 126.45h35.61v35.61h-35.61zM504.07 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M545.61 46h35.61v35.61h-35.61zM545.61 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M545.61 126.45h35.61v35.61h-35.61zM545.61 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M587.15 46h35.61v35.61h-35.61zM587.15 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M587.15 126.45h35.61v35.61h-35.61zM587.15 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M628.7 46h35.61v35.61H628.7zM628.7 86.22h35.61v35.61H628.7z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M628.7 126.45h35.61v35.61H628.7zM628.7 166.67h35.61v35.61H628.7z"
          />
          <path
            className="prefix__cls-4"
            d="M670.24 46h35.61v35.61h-35.61zM670.24 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M670.24 126.45h35.61v35.61h-35.61zM670.24 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M711.78 46h35.61v35.61h-35.61zM711.78 86.22h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M711.78 126.45h35.61v35.61h-35.61zM711.78 166.67h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M753.32 46h35.61v35.61h-35.61zM753.32 86.22h35.61v35.61h-35.61zM753.32 126.45h35.61v35.61h-35.61zM794.86 46h35.61v35.61h-35.61zM794.86 86.22h35.61v35.61h-35.61zM794.86 126.45h35.61v35.61h-35.61zM794.86 166.67h35.61v35.61h-35.61zM753.32 166.67h35.61v35.61h-35.61zM836.4 46h35.61v35.61H836.4zM836.4 86.22h35.61v35.61H836.4zM836.4 126.45h35.61v35.61H836.4zM836.4 166.67h35.61v35.61H836.4zM877.95 46h35.61v35.61h-35.61zM877.95 86.22h35.61v35.61h-35.61zM877.95 126.45h35.61v35.61h-35.61zM877.95 166.67h35.61v35.61h-35.61zM919.49 46h35.61v35.61h-35.61zM919.49 86.22h35.61v35.61h-35.61zM919.49 126.45h35.61v35.61h-35.61zM919.49 166.67h35.61v35.61h-35.61zM961.03 46h35.61v35.61h-35.61zM961.03 86.22h35.61v35.61h-35.61zM961.03 126.45h35.61v35.61h-35.61zM961.03 166.67h35.61v35.61h-35.61zM1002.57 46h35.61v35.61h-35.61zM1002.57 86.22h35.61v35.61h-35.61zM1002.57 126.45h35.61v35.61h-35.61zM1002.57 166.67h35.61v35.61h-35.61zM1044.11 46h35.61v35.61h-35.61zM1044.11 86.22h35.61v35.61h-35.61zM1044.11 126.45h35.61v35.61h-35.61zM1044.11 166.67h35.61v35.61h-35.61zM1085.65 46h35.61v35.61h-35.61zM1085.65 86.22h35.61v35.61h-35.61zM1085.65 126.45h35.61v35.61h-35.61zM1085.65 166.67h35.61v35.61h-35.61zM1127.19 46h35.61v35.61h-35.61zM1127.19 86.22h35.61v35.61h-35.61zM1127.19 126.45h35.61v35.61h-35.61zM1127.19 166.67h35.61v35.61h-35.61zM1168.74 46h35.61v35.61h-35.61zM1168.74 86.22h35.61v35.61h-35.61zM1168.74 126.45h35.61v35.61h-35.61zM1168.74 166.67h35.61v35.61h-35.61zM1210.28 46h35.61v35.61h-35.61zM1210.28 86.22h35.61v35.61h-35.61zM1210.28 126.45h35.61v35.61h-35.61zM1210.28 166.67h35.61v35.61h-35.61zM1251.82 46h35.61v35.61h-35.61zM1251.82 86.22h35.61v35.61h-35.61zM1251.82 126.45h35.61v35.61h-35.61zM1251.82 166.67h35.61v35.61h-35.61zM1293.36 46h35.61v35.61h-35.61zM1293.36 86.22h35.61v35.61h-35.61zM1293.36 126.45h35.61v35.61h-35.61zM1293.36 166.67h35.61v35.61h-35.61zM5.57 208.21h35.61v35.61H5.57zM5.57 248.43h35.61v35.61H5.57zM5.57 288.66h35.61v35.61H5.57zM5.57 328.88h35.61v35.61H5.57zM47.11 208.21h35.61v35.61H47.11zM47.11 248.43h35.61v35.61H47.11zM47.11 288.66h35.61v35.61H47.11zM47.11 328.88h35.61v35.61H47.11zM88.65 208.21h35.61v35.61H88.65zM88.65 248.43h35.61v35.61H88.65zM88.65 288.66h35.61v35.61H88.65zM88.65 328.88h35.61v35.61H88.65zM130.2 208.21h35.61v35.61H130.2zM130.2 248.43h35.61v35.61H130.2zM130.2 288.66h35.61v35.61H130.2zM130.2 328.88h35.61v35.61H130.2z"
          />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M171.74 208.21h35.61v35.61h-35.61zM171.74 248.43h35.61v35.61h-35.61zM171.74 288.66h35.61v35.61h-35.61zM171.74 328.88h35.61v35.61h-35.61zM213.28 208.21h35.61v35.61h-35.61zM213.28 248.43h35.61v35.61h-35.61zM213.28 288.66h35.61v35.61h-35.61zM213.28 328.88h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M254.82 208.21h35.61v35.61h-35.61zM254.82 248.43h35.61v35.61h-35.61zM254.82 288.66h35.61v35.61h-35.61zM254.82 328.88h35.61v35.61h-35.61zM296.36 208.21h35.61v35.61h-35.61zM296.36 248.43h35.61v35.61h-35.61zM296.36 288.66h35.61v35.61h-35.61zM296.36 328.88h35.61v35.61h-35.61zM337.9 208.21h35.61v35.61H337.9zM337.9 248.43h35.61v35.61H337.9zM337.9 288.66h35.61v35.61H337.9zM337.9 328.88h35.61v35.61H337.9zM379.45 208.21h35.61v35.61h-35.61zM379.45 248.43h35.61v35.61h-35.61zM379.45 288.66h35.61v35.61h-35.61zM379.45 328.88h35.61v35.61h-35.61zM420.99 208.21h35.61v35.61h-35.61zM420.99 248.43h35.61v35.61h-35.61zM420.99 288.66h35.61v35.61h-35.61zM420.99 328.88h35.61v35.61h-35.61zM462.53 208.21h35.61v35.61h-35.61zM462.53 248.43h35.61v35.61h-35.61zM462.53 288.66h35.61v35.61h-35.61zM462.53 328.88h35.61v35.61h-35.61zM504.07 208.21h35.61v35.61h-35.61zM504.07 248.43h35.61v35.61h-35.61zM504.07 288.66h35.61v35.61h-35.61zM504.07 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M545.61 208.21h35.61v35.61h-35.61zM545.61 248.43h35.61v35.61h-35.61zM545.61 288.66h35.61v35.61h-35.61zM545.61 328.88h35.61v35.61h-35.61zM587.15 208.21h35.61v35.61h-35.61zM587.15 248.43h35.61v35.61h-35.61zM587.15 288.66h35.61v35.61h-35.61zM587.15 328.88h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M628.7 208.21h35.61v35.61H628.7zM628.7 248.43h35.61v35.61H628.7zM628.7 288.66h35.61v35.61H628.7zM628.7 328.88h35.61v35.61H628.7zM670.24 208.21h35.61v35.61h-35.61zM670.24 248.43h35.61v35.61h-35.61zM670.24 288.66h35.61v35.61h-35.61zM670.24 328.88h35.61v35.61h-35.61zM711.78 208.21h35.61v35.61h-35.61zM711.78 248.43h35.61v35.61h-35.61zM711.78 288.66h35.61v35.61h-35.61zM711.78 328.88h35.61v35.61h-35.61zM753.32 208.21h35.61v35.61h-35.61zM753.32 248.43h35.61v35.61h-35.61zM753.32 288.66h35.61v35.61h-35.61zM753.32 328.88h35.61v35.61h-35.61zM794.86 208.21h35.61v35.61h-35.61zM794.86 248.43h35.61v35.61h-35.61zM794.86 288.66h35.61v35.61h-35.61zM794.86 328.88h35.61v35.61h-35.61zM836.4 208.21h35.61v35.61H836.4zM836.4 248.43h35.61v35.61H836.4zM836.4 288.66h35.61v35.61H836.4zM836.4 328.88h35.61v35.61H836.4zM877.95 208.21h35.61v35.61h-35.61zM877.95 248.43h35.61v35.61h-35.61zM877.95 288.66h35.61v35.61h-35.61zM877.95 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M919.49 208.21h35.61v35.61h-35.61zM919.49 248.43h35.61v35.61h-35.61zM919.49 288.66h35.61v35.61h-35.61zM919.49 328.88h35.61v35.61h-35.61zM961.03 208.21h35.61v35.61h-35.61zM961.03 248.43h35.61v35.61h-35.61zM961.03 288.66h35.61v35.61h-35.61zM961.03 328.88h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1002.57 208.21h35.61v35.61h-35.61zM1002.57 248.43h35.61v35.61h-35.61zM1002.57 288.66h35.61v35.61h-35.61zM1002.57 328.88h35.61v35.61h-35.61zM1044.11 208.21h35.61v35.61h-35.61zM1044.11 248.43h35.61v35.61h-35.61zM1044.11 288.66h35.61v35.61h-35.61zM1044.11 328.88h35.61v35.61h-35.61zM1085.65 208.21h35.61v35.61h-35.61zM1085.65 248.43h35.61v35.61h-35.61zM1085.65 288.66h35.61v35.61h-35.61zM1085.65 328.88h35.61v35.61h-35.61zM1127.19 208.21h35.61v35.61h-35.61zM1127.19 248.43h35.61v35.61h-35.61zM1127.19 288.66h35.61v35.61h-35.61zM1127.19 328.88h35.61v35.61h-35.61zM1168.74 208.21h35.61v35.61h-35.61zM1168.74 248.43h35.61v35.61h-35.61zM1168.74 288.66h35.61v35.61h-35.61zM1168.74 328.88h35.61v35.61h-35.61zM1210.28 208.21h35.61v35.61h-35.61zM1210.28 248.43h35.61v35.61h-35.61zM1210.28 288.66h35.61v35.61h-35.61zM1210.28 328.88h35.61v35.61h-35.61zM1251.82 208.21h35.61v35.61h-35.61zM1251.82 248.43h35.61v35.61h-35.61zM1251.82 288.66h35.61v35.61h-35.61zM1251.82 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M1293.36 208.21h35.61v35.61h-35.61zM1293.36 248.43h35.61v35.61h-35.61zM1293.36 288.66h35.61v35.61h-35.61zM1293.36 328.88h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M5.57 370.42h35.61v35.61H5.57zM5.57 410.64h35.61v35.61H5.57zM5.57 450.87h35.61v35.61H5.57zM5.57 491.09h35.61v35.61H5.57zM47.11 370.42h35.61v35.61H47.11zM47.11 410.64h35.61v35.61H47.11zM47.11 450.87h35.61v35.61H47.11zM47.11 491.09h35.61v35.61H47.11zM88.65 370.42h35.61v35.61H88.65zM88.65 410.64h35.61v35.61H88.65zM88.65 450.87h35.61v35.61H88.65zM88.65 491.09h35.61v35.61H88.65zM130.2 370.42h35.61v35.61H130.2zM130.2 410.64h35.61v35.61H130.2zM130.2 450.87h35.61v35.61H130.2zM130.2 491.09h35.61v35.61H130.2z"
          />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M171.74 370.42h35.61v35.61h-35.61zM171.74 410.64h35.61v35.61h-35.61zM171.74 450.87h35.61v35.61h-35.61zM171.74 491.09h35.61v35.61h-35.61zM213.28 370.42h35.61v35.61h-35.61zM213.28 410.64h35.61v35.61h-35.61zM213.28 450.87h35.61v35.61h-35.61zM213.28 491.09h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M254.82 370.42h35.61v35.61h-35.61zM254.82 410.64h35.61v35.61h-35.61zM254.82 450.87h35.61v35.61h-35.61zM254.82 491.09h35.61v35.61h-35.61zM296.36 370.42h35.61v35.61h-35.61zM296.36 410.64h35.61v35.61h-35.61zM296.36 450.87h35.61v35.61h-35.61zM296.36 491.09h35.61v35.61h-35.61zM337.9 370.42h35.61v35.61H337.9zM337.9 410.64h35.61v35.61H337.9zM337.9 450.87h35.61v35.61H337.9zM337.9 491.09h35.61v35.61H337.9zM379.45 370.42h35.61v35.61h-35.61zM379.45 410.64h35.61v35.61h-35.61zM379.45 450.87h35.61v35.61h-35.61zM379.45 491.09h35.61v35.61h-35.61zM420.99 370.42h35.61v35.61h-35.61zM420.99 410.64h35.61v35.61h-35.61zM420.99 450.87h35.61v35.61h-35.61zM420.99 491.09h35.61v35.61h-35.61zM462.53 370.42h35.61v35.61h-35.61zM462.53 410.64h35.61v35.61h-35.61zM462.53 450.87h35.61v35.61h-35.61zM462.53 491.09h35.61v35.61h-35.61zM504.07 370.42h35.61v35.61h-35.61zM504.07 410.64h35.61v35.61h-35.61zM504.07 450.87h35.61v35.61h-35.61zM504.07 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M545.61 370.42h35.61v35.61h-35.61zM545.61 410.64h35.61v35.61h-35.61zM545.61 450.87h35.61v35.61h-35.61zM545.61 491.09h35.61v35.61h-35.61zM587.15 370.42h35.61v35.61h-35.61zM587.15 410.64h35.61v35.61h-35.61zM587.15 450.87h35.61v35.61h-35.61zM587.15 491.09h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M628.7 370.42h35.61v35.61H628.7zM628.7 410.64h35.61v35.61H628.7zM628.7 450.87h35.61v35.61H628.7zM628.7 491.09h35.61v35.61H628.7zM670.24 370.42h35.61v35.61h-35.61zM670.24 410.64h35.61v35.61h-35.61zM670.24 450.87h35.61v35.61h-35.61zM670.24 491.09h35.61v35.61h-35.61zM711.78 370.42h35.61v35.61h-35.61zM711.78 410.64h35.61v35.61h-35.61zM711.78 450.87h35.61v35.61h-35.61zM711.78 491.09h35.61v35.61h-35.61zM753.32 370.42h35.61v35.61h-35.61zM753.32 410.64h35.61v35.61h-35.61zM753.32 450.87h35.61v35.61h-35.61zM753.32 491.09h35.61v35.61h-35.61zM794.86 370.42h35.61v35.61h-35.61zM794.86 410.64h35.61v35.61h-35.61zM794.86 450.87h35.61v35.61h-35.61zM794.86 491.09h35.61v35.61h-35.61zM836.4 370.42h35.61v35.61H836.4zM836.4 410.64h35.61v35.61H836.4zM836.4 450.87h35.61v35.61H836.4zM836.4 491.09h35.61v35.61H836.4zM877.95 370.42h35.61v35.61h-35.61zM877.95 410.64h35.61v35.61h-35.61zM877.95 450.87h35.61v35.61h-35.61zM877.95 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M919.49 370.42h35.61v35.61h-35.61zM919.49 410.64h35.61v35.61h-35.61zM919.49 450.87h35.61v35.61h-35.61zM919.49 491.09h35.61v35.61h-35.61zM961.03 370.42h35.61v35.61h-35.61zM961.03 410.64h35.61v35.61h-35.61zM961.03 450.87h35.61v35.61h-35.61zM961.03 491.09h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1002.57 370.42h35.61v35.61h-35.61zM1002.57 410.64h35.61v35.61h-35.61zM1002.57 450.87h35.61v35.61h-35.61zM1002.57 491.09h35.61v35.61h-35.61zM1044.11 370.42h35.61v35.61h-35.61zM1044.11 410.64h35.61v35.61h-35.61zM1044.11 450.87h35.61v35.61h-35.61zM1044.11 491.09h35.61v35.61h-35.61zM1085.65 370.42h35.61v35.61h-35.61zM1085.65 410.64h35.61v35.61h-35.61zM1085.65 450.87h35.61v35.61h-35.61zM1085.65 491.09h35.61v35.61h-35.61zM1127.19 370.42h35.61v35.61h-35.61zM1127.19 410.64h35.61v35.61h-35.61zM1127.19 450.87h35.61v35.61h-35.61zM1127.19 491.09h35.61v35.61h-35.61zM1168.74 370.42h35.61v35.61h-35.61zM1168.74 410.64h35.61v35.61h-35.61zM1168.74 450.87h35.61v35.61h-35.61zM1168.74 491.09h35.61v35.61h-35.61zM1210.28 370.42h35.61v35.61h-35.61zM1210.28 410.64h35.61v35.61h-35.61zM1210.28 450.87h35.61v35.61h-35.61zM1210.28 491.09h35.61v35.61h-35.61zM1251.82 370.42h35.61v35.61h-35.61zM1251.82 410.64h35.61v35.61h-35.61zM1251.82 450.87h35.61v35.61h-35.61zM1251.82 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M1293.36 370.42h35.61v35.61h-35.61zM1293.36 410.64h35.61v35.61h-35.61zM1293.36 450.87h35.61v35.61h-35.61zM1293.36 491.09h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M5.57 532.63h35.61v35.61H5.57zM5.57 572.85h35.61v35.61H5.57zM5.57 613.08h35.61v35.61H5.57zM5.57 653.3h35.61v35.61H5.57zM47.11 532.63h35.61v35.61H47.11z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M47.11 572.85h35.61v35.61H47.11zM47.11 613.08h35.61v35.61H47.11z"
          />
          <path
            className="prefix__cls-4"
            d="M47.11 653.3h35.61v35.61H47.11zM88.65 532.63h35.61v35.61H88.65z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M88.65 572.85h35.61v35.61H88.65zM88.65 613.08h35.61v35.61H88.65z"
          />
          <path
            className="prefix__cls-4"
            d="M88.65 653.3h35.61v35.61H88.65zM130.2 532.63h35.61v35.61H130.2z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M130.2 572.85h35.61v35.61H130.2zM130.2 613.08h35.61v35.61H130.2z"
          />
          <path className="prefix__cls-4" d="M130.2 653.3h35.61v35.61H130.2z" />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M171.74 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M171.74 572.85h35.61v35.61h-35.61zM171.74 613.08h35.61v35.61h-35.61z"
          />
          <path className="prefix__cls-4" d="M171.74 653.3h35.61v35.61h-35.61z" />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M213.28 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M213.28 572.85h35.61v35.61h-35.61zM213.28 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M213.28 653.3h35.61v35.61h-35.61zM254.82 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M254.82 572.85h35.61v35.61h-35.61zM254.82 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M254.82 653.3h35.61v35.61h-35.61zM296.36 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M296.36 572.85h35.61v35.61h-35.61zM296.36 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M296.36 653.3h35.61v35.61h-35.61zM337.9 532.63h35.61v35.61H337.9z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M337.9 572.85h35.61v35.61H337.9zM337.9 613.08h35.61v35.61H337.9z"
          />
          <path
            className="prefix__cls-4"
            d="M337.9 653.3h35.61v35.61H337.9zM379.45 532.63h35.61v35.61h-35.61zM379.45 572.85h35.61v35.61h-35.61zM379.45 613.08h35.61v35.61h-35.61zM379.45 653.3h35.61v35.61h-35.61zM420.99 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M420.99 572.85h35.61v35.61h-35.61zM420.99 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M420.99 653.3h35.61v35.61h-35.61zM462.53 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M462.53 572.85h35.61v35.61h-35.61zM462.53 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M462.53 653.3h35.61v35.61h-35.61zM504.07 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M504.07 572.85h35.61v35.61h-35.61zM504.07 613.08h35.61v35.61h-35.61z"
          />
          <path className="prefix__cls-4" d="M504.07 653.3h35.61v35.61h-35.61z" />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M545.61 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M545.61 572.85h35.61v35.61h-35.61zM545.61 613.08h35.61v35.61h-35.61z"
          />
          <path className="prefix__cls-4" d="M545.61 653.3h35.61v35.61h-35.61z" />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M587.15 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M587.15 572.85h35.61v35.61h-35.61zM587.15 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M587.15 653.3h35.61v35.61h-35.61zM628.7 532.63h35.61v35.61H628.7z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M628.7 572.85h35.61v35.61H628.7zM628.7 613.08h35.61v35.61H628.7z"
          />
          <path
            className="prefix__cls-4"
            d="M628.7 653.3h35.61v35.61H628.7zM670.24 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M670.24 572.85h35.61v35.61h-35.61zM670.24 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M670.24 653.3h35.61v35.61h-35.61zM711.78 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M711.78 572.85h35.61v35.61h-35.61zM711.78 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M711.78 653.3h35.61v35.61h-35.61zM753.32 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M753.32 572.85h35.61v35.61h-35.61zM753.32 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M753.32 653.3h35.61v35.61h-35.61zM794.86 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M794.86 572.85h35.61v35.61h-35.61zM794.86 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M794.86 653.3h35.61v35.61h-35.61zM836.4 532.63h35.61v35.61H836.4z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M836.4 572.85h35.61v35.61H836.4zM836.4 613.08h35.61v35.61H836.4z"
          />
          <path
            className="prefix__cls-4"
            d="M836.4 653.3h35.61v35.61H836.4zM877.95 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M877.95 572.85h35.61v35.61h-35.61zM877.95 613.08h35.61v35.61h-35.61z"
          />
          <path className="prefix__cls-4" d="M877.95 653.3h35.61v35.61h-35.61z" />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M919.49 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M919.49 572.85h35.61v35.61h-35.61zM919.49 613.08h35.61v35.61h-35.61z"
          />
          <path className="prefix__cls-4" d="M919.49 653.3h35.61v35.61h-35.61z" />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M961.03 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M961.03 572.85h35.61v35.61h-35.61zM961.03 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M961.03 653.3h35.61v35.61h-35.61zM1002.57 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M1002.57 572.85h35.61v35.61h-35.61zM1002.57 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1002.57 653.3h35.61v35.61h-35.61zM1044.11 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M1044.11 572.85h35.61v35.61h-35.61zM1044.11 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1044.11 653.3h35.61v35.61h-35.61zM1085.65 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1085.65 572.85h35.61v35.61h-35.61zM1085.65 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1085.65 653.3h35.61v35.61h-35.61zM1127.19 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1127.19 572.85h35.61v35.61h-35.61zM1127.19 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1127.19 653.3h35.61v35.61h-35.61zM1168.74 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1168.74 572.85h35.61v35.61h-35.61zM1168.74 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1168.74 653.3h35.61v35.61h-35.61zM1210.28 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1210.28 572.85h35.61v35.61h-35.61zM1210.28 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1210.28 653.3h35.61v35.61h-35.61zM1251.82 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1251.82 572.85h35.61v35.61h-35.61zM1251.82 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1251.82 653.3h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M1293.36 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1293.36 572.85h35.61v35.61h-35.61zM1293.36 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1293.36 653.3h35.61v35.61h-35.61zM5.57 695.17h35.61v35.61H5.57zM47.11 695.17h35.61v35.61H47.11zM88.65 695.17h35.61v35.61H88.65zM130.2 695.17h35.61v35.61H130.2zM171.74 695.17h35.61v35.61h-35.61zM213.28 695.17h35.61v35.61h-35.61zM254.82 695.17h35.61v35.61h-35.61zM296.36 695.17h35.61v35.61h-35.61zM337.9 695.17h35.61v35.61H337.9zM379.45 695.17h35.61v35.61h-35.61zM420.99 695.17h35.61v35.61h-35.61zM462.53 695.17h35.61v35.61h-35.61zM504.07 695.17h35.61v35.61h-35.61zM545.61 695.17h35.61v35.61h-35.61zM587.15 695.17h35.61v35.61h-35.61zM628.7 695.17h35.61v35.61H628.7zM670.24 695.17h35.61v35.61h-35.61zM711.78 695.17h35.61v35.61h-35.61zM753.32 695.17h35.61v35.61h-35.61zM794.86 695.17h35.61v35.61h-35.61zM836.4 695.17h35.61v35.61H836.4zM877.95 695.17h35.61v35.61h-35.61zM919.49 695.17h35.61v35.61h-35.61zM961.03 695.17h35.61v35.61h-35.61zM1002.57 695.17h35.61v35.61h-35.61zM1044.11 695.17h35.61v35.61h-35.61zM1085.65 695.17h35.61v35.61h-35.61zM1127.19 695.17h35.61v35.61h-35.61zM1168.74 695.17h35.61v35.61h-35.61zM1210.28 695.17h35.61v35.61h-35.61zM1251.82 695.17h35.61v35.61h-35.61zM1293.36 695.17h35.61v35.61h-35.61zM1334.9 46h35.61v35.61h-35.61zM1334.9 86.22h35.61v35.61h-35.61zM1334.9 126.45h35.61v35.61h-35.61zM1334.9 166.67h35.61v35.61h-35.61zM1376.44 46h35.61v35.61h-35.61zM5.57 6h35.61v35.61H5.57zM47.11 6h35.61v35.61H47.11zM88.65 6h35.61v35.61H88.65zM130.2 6h35.61v35.61H130.2zM171.74 6h35.61v35.61h-35.61zM213.28 6h35.61v35.61h-35.61zM254.82 6h35.61v35.61h-35.61zM296.36 6h35.61v35.61h-35.61zM337.9 6h35.61v35.61H337.9zM379.45 6h35.61v35.61h-35.61zM420.99 6h35.61v35.61h-35.61zM462.53 6h35.61v35.61h-35.61zM504.07 6h35.61v35.61h-35.61zM545.61 6h35.61v35.61h-35.61zM587.15 6h35.61v35.61h-35.61zM628.7 6h35.61v35.61H628.7zM670.24 6h35.61v35.61h-35.61zM711.78 6h35.61v35.61h-35.61zM753.32 6h35.61v35.61h-35.61zM794.86 6h35.61v35.61h-35.61zM836.4 6h35.61v35.61H836.4zM877.95 6h35.61v35.61h-35.61zM919.49 6h35.61v35.61h-35.61zM961.03 6h35.61v35.61h-35.61zM1002.57 6h35.61v35.61h-35.61zM1044.11 6h35.61v35.61h-35.61zM1085.65 6h35.61v35.61h-35.61zM1127.19 6h35.61v35.61h-35.61zM1168.74 6h35.61v35.61h-35.61zM1210.28 6h35.61v35.61h-35.61zM1251.82 6h35.61v35.61h-35.61zM1293.36 6h35.61v35.61h-35.61zM1334.9 6h35.61v35.61h-35.61zM1376.44 6h35.61v35.61h-35.61zM1376.44 86.22h35.61v35.61h-35.61zM1376.44 126.45h35.61v35.61h-35.61zM1376.44 166.67h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M1334.9 208.21h35.61v35.61h-35.61zM1334.9 248.43h35.61v35.61h-35.61zM1334.9 288.66h35.61v35.61h-35.61zM1334.9 328.88h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1376.44 208.21h35.61v35.61h-35.61zM1376.44 248.43h35.61v35.61h-35.61zM1376.44 288.66h35.61v35.61h-35.61zM1376.44 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M1334.9 370.42h35.61v35.61h-35.61zM1334.9 410.64h35.61v35.61h-35.61zM1334.9 450.87h35.61v35.61h-35.61zM1334.9 491.09h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1376.44 370.42h35.61v35.61h-35.61zM1376.44 410.64h35.61v35.61h-35.61zM1376.44 450.87h35.61v35.61h-35.61zM1376.44 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M1334.9 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1334.9 572.85h35.61v35.61h-35.61zM1334.9 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1334.9 653.3h35.61v35.61h-35.61zM1376.44 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-14"
            d="M1376.44 572.85h35.61v35.61h-35.61zM1376.44 613.08h35.61v35.61h-35.61z"
          />
          <path
            className="prefix__cls-4"
            d="M1376.44 653.3h35.61v35.61h-35.61zM1334.9 695.17h35.61v35.61h-35.61zM1376.44 695.17h35.61v35.61h-35.61zM5.57 735.17h35.61v35.61H5.57zM47.11 735.17h35.61v35.61H47.11zM88.65 735.17h35.61v35.61H88.65zM130.2 735.17h35.61v35.61H130.2zM171.74 735.17h35.61v35.61h-35.61zM213.28 735.17h35.61v35.61h-35.61zM254.82 735.17h35.61v35.61h-35.61zM296.36 735.17h35.61v35.61h-35.61zM337.9 735.17h35.61v35.61H337.9zM379.45 735.17h35.61v35.61h-35.61zM420.99 735.17h35.61v35.61h-35.61zM462.53 735.17h35.61v35.61h-35.61zM504.07 735.17h35.61v35.61h-35.61zM545.61 735.17h35.61v35.61h-35.61zM587.15 735.17h35.61v35.61h-35.61zM628.7 735.17h35.61v35.61H628.7zM670.24 735.17h35.61v35.61h-35.61zM711.78 735.17h35.61v35.61h-35.61zM753.32 735.17h35.61v35.61h-35.61zM794.86 735.17h35.61v35.61h-35.61zM836.4 735.17h35.61v35.61H836.4zM877.95 735.17h35.61v35.61h-35.61zM919.49 735.17h35.61v35.61h-35.61zM961.03 735.17h35.61v35.61h-35.61zM1002.57 735.17h35.61v35.61h-35.61zM1044.11 735.17h35.61v35.61h-35.61zM1085.65 735.17h35.61v35.61h-35.61zM1127.19 735.17h35.61v35.61h-35.61zM1168.74 735.17h35.61v35.61h-35.61zM1210.28 735.17h35.61v35.61h-35.61zM1251.82 735.17h35.61v35.61h-35.61zM1293.36 735.17h35.61v35.61h-35.61zM1334.9 735.17h35.61v35.61h-35.61zM1376.44 735.17h35.61v35.61h-35.61z"
          />
        </g>
      </svg>
    </>
  )
}

export default FloorPlan;