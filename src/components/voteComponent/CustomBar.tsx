// components/charts/CustomBar.tsx
import React from 'react';

interface Props {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const CustomBar: React.FC<Props> = ({ fill , x, y, width, height }) => {
  const radius = 10;
  return (
    <g style={{
      fontSize: '32px',
      fontWeight: 'bold',
    }}>
      <rect
        x={x}
        y={y}
        rx={radius}
        ry={radius}
        width={width}
        height={height}
        fill={fill}
      />
    </g>
  );
};

export default CustomBar;
