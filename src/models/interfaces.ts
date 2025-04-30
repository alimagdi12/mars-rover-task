export type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';
export type Position = { x: number; y: number };
export type Obstacle = Position;
export type RoverStatus = 'OK' | 'STOPPED';