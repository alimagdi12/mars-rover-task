import MarsRover from './marsRover';
import { Obstacle } from "./models/interfaces";

const obstacles: Obstacle[] = [{ x: 1, y: 4 }, { x: 3, y: 5 }, { x: 7, y: 4 }];
const rover = new MarsRover(1, 2, 'EAST', obstacles);

const result = rover.executeCommandSequence('FLBFFFFFFFFLFRFLLB');
console.log(result);