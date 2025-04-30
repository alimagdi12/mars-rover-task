import MarsRover from '../src/marsRover';

describe('MarsRover', () => {
  describe('Initialization', () => {
    it('should initialize with correct position and direction', () => {
      const rover = new MarsRover(4, 2, 'EAST');
      expect(rover.getPosition()).toBe('(4, 2) EAST');
    });
  });

  describe('Movement', () => {
    it('should move forward correctly facing NORTH', () => {
      const rover = new MarsRover(0, 0, 'NORTH');
      rover.executeCommand('F');
      expect(rover.getPosition()).toBe('(0, 1) NORTH');
    });

    it('should move backward correctly facing EAST', () => {
      const rover = new MarsRover(3, 3, 'EAST');
      rover.executeCommand('B');
      expect(rover.getPosition()).toBe('(2, 3) EAST');
    });

    it('should handle multiple commands', () => {
      const rover = new MarsRover(0, 0, 'NORTH');
      const result = rover.executeCommandSequence('FFRFF');
      expect(result).toBe('(2, 2) EAST');
    });
  });

  describe('Obstacle Detection', () => {
    it('should stop before obstacle', () => {
      const obstacles = [{ x: 0, y: 2 }];
      const rover = new MarsRover(0, 0, 'NORTH', obstacles);
      rover.executeCommandSequence('FF');
      expect(rover.getPosition()).toBe('(0, 1) NORTH STOPPED');
    });

    it('should not stop if no obstacles', () => {
      const obstacles = [{ x: 1, y: 1 }];
      const rover = new MarsRover(0, 0, 'NORTH', obstacles);
      rover.executeCommandSequence('FF');
      expect(rover.getPosition()).toBe('(0, 2) NORTH');
    });
  });
});