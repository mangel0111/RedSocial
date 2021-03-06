import React from 'react';
import { Rect, Group } from 'react-konva';
import tetrisConstants from '../model/tetrisConstants.js';

const { blockUnit } = tetrisConstants;

const TetrominosList = ({ grid }) => {
	const arr = [];
	grid.forEach((val, i) => {
		val.forEach((block, j) => {
			if (block !== 'grey') {
				const key = JSON.stringify({ x: i, y: j });
				arr.push(<Rect key={key} 
				width={blockUnit} height={blockUnit} 
				x={i * 30} y={j * 30} fill={block} 
				stroke="black" strokeWidth={3} />);
			}
		});
	});
	return <Group>{ arr }</Group>;
};

export default TetrominosList;
