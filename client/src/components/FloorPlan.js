import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import svgPanZoom from 'svg-pan-zoom';

import HeatMapHoverInfo from './HeatMapHoverInfo';
import ShelfStockModal from './ShelfStockModal';
import { apiRequest } from '../api';

const StyledPath = styled.path`
  fill: ${props => props.theme.heatmapColors[props.color]};
`;

const FloorPlan = ({ times }) => {
  const [heatMap, setHeatMap] = useState([]);
  const [pos, setPos] = useState([0, 0]);
  const [active, setActive] = useState('');
  const [isVisible, setIsViible] = useState(false);
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState({ open: false, shelf: 0, stock: [] });

  const svgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (!svgRef.current) return;
      svgPanZoom(svgRef.current).zoomOut(100);
    }, 100)
  }, [svgRef])


  useEffect(() => {
    apiRequest('/api/products')
      .then(res => setProducts(res.data.map(p => {
        return { ...p, id: p.productId, interactions: p.interactions.length }
      }).sort((a, b) => a.id - b.id)));
  }, []);

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
  }, [times]);

  console.log(times);

  const handleHover = (e) => {
    setPos([e.pageX - 320, e.pageY - 180]);
    const index = e.target.getAttribute('data-index');

    heatMap[index] ? setIsViible(true) : setIsViible(false);
    if (!index) return;
    setActive({ camId: heatMap[index].id, time: heatMap[index].string, color: heatMap[index].color });
  }

  const handleClick = (e) => {
    const shelfId = e.target.getAttribute('data-shelf-id');
    const stock = products.filter((p) => p.shelfId === parseInt(shelfId));

    setModalData({ open: true, shelf: shelfId, stock });
  }


  if (heatMap.length === 0 || !heatMap) return <div>Loading...</div>;

  return (
    <>
      <ShelfStockModal modalData={modalData} />
      <HeatMapHoverInfo x={pos[0]} y={pos[1]} data={active} isVisible={isVisible} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1419 784" ref={svgRef} width="100%" height="100%" onMouseMove={(e) => handleHover(e)}>
        <defs>
          <style> {` .prefix__cls-2 { fill: #fff } .prefix__cls-14, .prefix__cls-3 { fill: #9598fa } .prefix__cls-4 { fill: #ff1d25 } .prefix__cls-10, .prefix__cls-11, .prefix__cls-12, .prefix__cls-13, .prefix__cls-4, .prefix__cls-5, .prefix__cls-6, .prefix__cls-7, .prefix__cls-8, .prefix__cls-9 { opacity: .65 } .prefix__cls-14 { font-size: 40.5px; font-family: Barlow-Bold, Barlow; font-weight: 700 }`} </style>
        </defs>
        <path
          fill="#e0e1fe"
          d="M0 0h1419v784H0z"
          id="prefix__Layer_2"
          data-name="Layer 2"
        />
        <g id="prefix__Layer_1" data-name="Layer 1">
          <path className="prefix__cls-2 cursor-pointer" d="M42.86 15.43H352.5v99.07H42.86z" onMouseDown={(e) => handleClick(e)} data-shelf-id={2} />
          <path
            className="prefix__cls-3"
            d="M350 17.93V112H45.36V17.93H350m5-5H40.36V117H355V12.93z"
          />
          <path
            className="prefix__cls-2 cursor-pointer fill-current" onMouseDown={(e) => handleClick(e)} data-shelf-id={4}
            d="M285.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M381.72 235.64v304.64h-94.08V235.64h94.08m5-5H282.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={7}
            d="M395.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M491.72 235.64v304.64h-94.08V235.64h94.08m5-5H392.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={8}
            d="M668.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M764.72 235.64v304.64h-94.08V235.64h94.08m5-5H665.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={10}
            d="M778.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M874.72 235.64v304.64h-94.08V235.64h94.08m5-5H775.64v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={11}
            d="M1042.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M1138.72 235.64v304.64h-94.08V235.64h94.08m5-5h-104.08v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={13}
            d="M1152.14 233.14h99.07v309.64h-99.07z"
          />
          <path
            className="prefix__cls-3"
            d="M1248.72 235.64v304.64h-94.08V235.64h94.08m5-5h-104.08v314.64h104.08V230.64z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={9}
            d="M745.86 669.43h309.64v99.07H745.86z"
          />
          <path
            className="prefix__cls-3"
            d="M1053 671.93V766H748.36v-94.07H1053m5-5H743.36V771H1058V666.93z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={12}
            d="M1067.86 669.43h309.64v99.07h-309.64z"
          />
          <path
            className="prefix__cls-3"
            d="M1375 671.93V766h-304.64v-94.07H1375m5-5h-314.64V771H1380V666.93z"
          />
          <path
            className="prefix__cls-2 cursor-pointer" onMouseDown={(e) => handleClick(e)} data-shelf-id={6}
            d="M423.86 669.43H733.5v99.07H423.86z"
          />
          <path
            className="prefix__cls-3"
            d="M731 671.93V766H426.36v-94.07H731m5-5H421.36V771H736V666.93z"
          />
          <path className="prefix__cls-2 cursor-pointer" d="M46.86 669.43H356.5v99.07H46.86z" onMouseDown={(e) => handleClick(e)} data-shelf-id={5} />
          <path
            className="prefix__cls-3"
            d="M354 671.93V766H49.36v-94.07H354m5-5H44.36V771H359V666.93z"
          />
          <path className="prefix__cls-2 cursor-pointer" d="M434.86 15.43H744.5v99.07H434.86z" onMouseDown={(e) => handleClick(e)} data-shelf-id={1} />
          <path
            className="prefix__cls-3"
            d="M742 17.93V112H437.36V17.93H742m5-5H432.36V117H747V12.93zM0 0h26v26H0zM377 0h26v26h-26zM777 0h26v26h-26zM1040 0h26v26h-26zM1393 0h26v26h-26zM1393 758h26v26h-26zM0 758h26v26H0zM377 758h26v26h-26zM1393 519h26v26h-26zM1393 273h26v26h-26z"
          />
          <path className="prefix__cls-2 cursor-pointer" d="M15.14 233.14h99.07v309.64H15.14z" onMouseDown={(e) => handleClick(e)} data-shelf-id={3} />
          <path
            className="prefix__cls-3"
            d="M111.72 235.64v304.64H17.64V235.64h94.08m5-5H12.64v314.64h104.08V230.64z"
          />
        </g>
        <g id="prefix__Layer_6" data-name="Layer 6">
          <StyledPath color={heatMap[8].color} data-index={8}
            className="prefix__cls-4"
            d="M47.11 126.45h35.61v35.61H47.11zM47.11 166.67h35.61v35.61H47.11zM88.65 126.45h35.61v35.61H88.65zM88.65 166.67h35.61v35.61H88.65zM130.2 126.45h35.61v35.61H130.2zM130.2 166.67h35.61v35.61H130.2zM171.74 126.45h35.61v35.61h-35.61zM171.74 166.67h35.61v35.61h-35.61zM213.28 126.45h35.61v35.61h-35.61zM213.28 166.67h35.61v35.61h-35.61zM254.82 126.45h35.61v35.61h-35.61zM254.82 166.67h35.61v35.61h-35.61zM296.36 126.45h35.61v35.61h-35.61zM296.36 166.67h35.61v35.61h-35.61zM337.9 126.45h35.61v35.61H337.9zM337.9 166.67h35.61v35.61H337.9z"
          />
          <StyledPath color={heatMap[1].color} data-index={1}
            className="prefix__cls-5"
            d="M420.99 126.45h35.61v35.61h-35.61zM420.99 166.67h35.61v35.61h-35.61zM462.53 126.45h35.61v35.61h-35.61zM462.53 166.67h35.61v35.61h-35.61zM504.07 126.45h35.61v35.61h-35.61zM504.07 166.67h35.61v35.61h-35.61zM545.61 126.45h35.61v35.61h-35.61zM545.61 166.67h35.61v35.61h-35.61zM587.15 126.45h35.61v35.61h-35.61zM587.15 166.67h35.61v35.61h-35.61zM628.7 126.45h35.61v35.61H628.7zM628.7 166.67h35.61v35.61H628.7zM670.24 126.45h35.61v35.61h-35.61zM670.24 166.67h35.61v35.61h-35.61zM711.78 126.45h35.61v35.61h-35.61zM711.78 166.67h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M171.74 208.21h35.61v35.61h-35.61zM171.74 248.43h35.61v35.61h-35.61zM171.74 288.66h35.61v35.61h-35.61zM171.74 328.88h35.61v35.61h-35.61zM213.28 208.21h35.61v35.61h-35.61zM213.28 248.43h35.61v35.61h-35.61zM213.28 288.66h35.61v35.61h-35.61zM213.28 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M545.61 208.21h35.61v35.61h-35.61zM545.61 248.43h35.61v35.61h-35.61zM545.61 288.66h35.61v35.61h-35.61zM545.61 328.88h35.61v35.61h-35.61zM587.15 208.21h35.61v35.61h-35.61zM587.15 248.43h35.61v35.61h-35.61zM587.15 288.66h35.61v35.61h-35.61zM587.15 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M919.49 208.21h35.61v35.61h-35.61zM919.49 248.43h35.61v35.61h-35.61zM919.49 288.66h35.61v35.61h-35.61zM919.49 328.88h35.61v35.61h-35.61zM961.03 208.21h35.61v35.61h-35.61zM961.03 248.43h35.61v35.61h-35.61zM961.03 288.66h35.61v35.61h-35.61zM961.03 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M1293.36 208.21h35.61v35.61h-35.61zM1293.36 248.43h35.61v35.61h-35.61zM1293.36 288.66h35.61v35.61h-35.61zM1293.36 328.88h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M171.74 370.42h35.61v35.61h-35.61zM171.74 410.64h35.61v35.61h-35.61zM171.74 450.87h35.61v35.61h-35.61zM171.74 491.09h35.61v35.61h-35.61zM213.28 370.42h35.61v35.61h-35.61zM213.28 410.64h35.61v35.61h-35.61zM213.28 450.87h35.61v35.61h-35.61zM213.28 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M545.61 370.42h35.61v35.61h-35.61zM545.61 410.64h35.61v35.61h-35.61zM545.61 450.87h35.61v35.61h-35.61zM545.61 491.09h35.61v35.61h-35.61zM587.15 370.42h35.61v35.61h-35.61zM587.15 410.64h35.61v35.61h-35.61zM587.15 450.87h35.61v35.61h-35.61zM587.15 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M919.49 370.42h35.61v35.61h-35.61zM919.49 410.64h35.61v35.61h-35.61zM919.49 450.87h35.61v35.61h-35.61zM919.49 491.09h35.61v35.61h-35.61zM961.03 370.42h35.61v35.61h-35.61zM961.03 410.64h35.61v35.61h-35.61zM961.03 450.87h35.61v35.61h-35.61zM961.03 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M1293.36 370.42h35.61v35.61h-35.61zM1293.36 410.64h35.61v35.61h-35.61zM1293.36 450.87h35.61v35.61h-35.61zM1293.36 491.09h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M47.11 572.85h35.61v35.61H47.11zM47.11 613.08h35.61v35.61H47.11zM88.65 572.85h35.61v35.61H88.65zM88.65 613.08h35.61v35.61H88.65zM130.2 572.85h35.61v35.61H130.2zM130.2 613.08h35.61v35.61H130.2z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M171.74 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M171.74 572.85h35.61v35.61h-35.61zM171.74 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[0].color} data-index={0}
            className="prefix__cls-6"
            d="M213.28 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[9].color} data-index={9}
            className="prefix__cls-10"
            d="M213.28 572.85h35.61v35.61h-35.61zM213.28 613.08h35.61v35.61h-35.61zM254.82 572.85h35.61v35.61h-35.61zM254.82 613.08h35.61v35.61h-35.61zM296.36 572.85h35.61v35.61h-35.61zM296.36 613.08h35.61v35.61h-35.61zM337.9 572.85h35.61v35.61H337.9zM337.9 613.08h35.61v35.61H337.9z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M420.99 572.85h35.61v35.61h-35.61zM420.99 613.08h35.61v35.61h-35.61zM462.53 572.85h35.61v35.61h-35.61zM462.53 613.08h35.61v35.61h-35.61zM504.07 572.85h35.61v35.61h-35.61zM504.07 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M545.61 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M545.61 572.85h35.61v35.61h-35.61zM545.61 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[2].color} data-index={2}
            className="prefix__cls-7"
            d="M587.15 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[3].color} data-index={3}
            className="prefix__cls-11"
            d="M587.15 572.85h35.61v35.61h-35.61zM587.15 613.08h35.61v35.61h-35.61zM628.7 572.85h35.61v35.61H628.7zM628.7 613.08h35.61v35.61H628.7zM670.24 572.85h35.61v35.61h-35.61zM670.24 613.08h35.61v35.61h-35.61zM711.78 572.85h35.61v35.61h-35.61zM711.78 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M753.32 572.85h35.61v35.61h-35.61zM753.32 613.08h35.61v35.61h-35.61zM794.86 572.85h35.61v35.61h-35.61zM794.86 613.08h35.61v35.61h-35.61zM836.4 572.85h35.61v35.61H836.4zM836.4 613.08h35.61v35.61H836.4zM877.95 572.85h35.61v35.61h-35.61zM877.95 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M919.49 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M919.49 572.85h35.61v35.61h-35.61zM919.49 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[5].color} data-index={5}
            className="prefix__cls-8"
            d="M961.03 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[4].color} data-index={4}
            className="prefix__cls-12"
            d="M961.03 572.85h35.61v35.61h-35.61zM961.03 613.08h35.61v35.61h-35.61zM1002.57 572.85h35.61v35.61h-35.61zM1002.57 613.08h35.61v35.61h-35.61zM1044.11 572.85h35.61v35.61h-35.61zM1044.11 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M1085.65 572.85h35.61v35.61h-35.61zM1085.65 613.08h35.61v35.61h-35.61zM1127.19 572.85h35.61v35.61h-35.61zM1127.19 613.08h35.61v35.61h-35.61zM1168.74 572.85h35.61v35.61h-35.61zM1168.74 613.08h35.61v35.61h-35.61zM1210.28 572.85h35.61v35.61h-35.61zM1210.28 613.08h35.61v35.61h-35.61zM1251.82 572.85h35.61v35.61h-35.61zM1251.82 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M1293.36 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M1293.36 572.85h35.61v35.61h-35.61zM1293.36 613.08h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[7].color} data-index={7}
            className="prefix__cls-9"
            d="M1334.9 208.21h35.61v35.61h-35.61zM1334.9 248.43h35.61v35.61h-35.61zM1334.9 288.66h35.61v35.61h-35.61zM1334.9 328.88h35.61v35.61h-35.61zM1334.9 370.42h35.61v35.61h-35.61zM1334.9 410.64h35.61v35.61h-35.61zM1334.9 450.87h35.61v35.61h-35.61zM1334.9 491.09h35.61v35.61h-35.61zM1334.9 532.63h35.61v35.61h-35.61z"
          />
          <StyledPath color={heatMap[6].color} data-index={6}
            className="prefix__cls-13"
            d="M1334.9 572.85h35.61v35.61h-35.61zM1334.9 613.08h35.61v35.61h-35.61zM1376.44 572.85h35.61v35.61h-35.61zM1376.44 613.08h35.61v35.61h-35.61z"
          />
          <text className="prefix__cls-14" transform="translate(582.51 77.62)">
            {"1"}
          </text>
          <text className="prefix__cls-14" transform="translate(186.34 77.62)">
            {"2"}
          </text>
          <text className="prefix__cls-14" transform="translate(53.75 400.62)">
            {"3"}
          </text>
          <text className="prefix__cls-14" transform="translate(322.75 400.62)">
            {"4"}
          </text>
          <text className="prefix__cls-14" transform="translate(190.77 731.62)">
            {"5"}
          </text>
          <text className="prefix__cls-14" transform="translate(567.81 731.62)">
            {"6"}
          </text>
          <text className="prefix__cls-14" transform="translate(433.81 400.62)">
            {"7"}
          </text>
          <text className="prefix__cls-14" transform="translate(709.81 400.62)">
            {"8"}
          </text>
          <text className="prefix__cls-14" transform="translate(889.93 731.62)">
            {"9"}
          </text>
          <text className="prefix__cls-14" transform="translate(808.97 400.62)">
            {"10"}
          </text>
          <text className="prefix__cls-14" transform="translate(1077.2 400.62)">
            <tspan letterSpacing=".01em">{"1"}</tspan>
            <tspan x={14.62} y={0}>
              {"1"}
            </tspan>
          </text>
          <text className="prefix__cls-14" transform="translate(1204.17 731.62)">
            {"12"}
          </text>
          <text className="prefix__cls-14" transform="translate(1183.58 400.62)">
            {"13"}
          </text>
          <path data-index={0} opacity={0} fill="#fff" d="M421 126h327v76H421z" />
          <path data-index={1} opacity={0} fill="#fff" d="M47 126h327v76H47z" />
          <path data-index={2} transform="rotate(90 210 388)" opacity={0} fill="#fff" d="M30 350h360v76H30z" />
          <path data-index={3} transform="rotate(180 210 610.5)" opacity={0} fill="#fff" d="M47 572h326v77H47z" />
          <path data-index={4} transform="rotate(180 584 610.5)" opacity={0} fill="#fff" d="M421 572h326v77H421z" /> 
          <path data-index={5} transform="rotate(90 584 388)" opacity={0} fill="#fff" d="M404 350h360v76H404z" /> 
          <path data-index={6} transform="rotate(180 917 610.5)" opacity={0} fill="#fff" d="M754 572h326v77H754z" /> 
          <path data-index={7} transform="rotate(90 958 388)" opacity={0} fill="#fff" d="M778 350h360v76H778z" />
          <path data-index={8} transform="rotate(180 1249 610.5)" opacity={0} fill="#fff" d="M1086 572h326v77h-326z" />
          <path data-index={9} transform="rotate(90 1332 388)" opacity={0} fill="#fff" d="M1152 350h360v76h-360z" />
        </g>
      </svg>
    </>
  )
}

export default FloorPlan;