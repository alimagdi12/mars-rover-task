import { Direction, Obstacle, RoverStatus } from "./models/interfaces";

/**
 * A class representing a Mars Rover that can navigate the Martian surface
 * while avoiding obstacles and reporting its position and status.
 */
class MarsRover {
  private x: number;
  private y: number;
  private direction: Direction;
  private obstacles: Obstacle[];
  private status: RoverStatus;
  private readonly directions: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

  /**
   * Creates a new Mars Rover instance
   * @param {number} x - The initial x-coordinate of the rover
   * @param {number} y - The initial y-coordinate of the rover
   * @param {Direction} direction - The initial facing direction of the rover
   * @param {Obstacle[]} [obstacles=[]] - Array of obstacle coordinates to avoid
   */
  constructor(x: number, y: number, direction: Direction, obstacles: Obstacle[] = []) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacles = obstacles;
    this.status = 'OK';
  }

  /**
   * Executes a single movement or rotation command
   * @param {string} command - The command to execute (F, B, L, or R)
   * @returns {void}
   * @throws Will throw an error if an invalid command is provided
   */
  public executeCommand(command: string): void {
    if (this.status === 'STOPPED') return;

    const commandHandlers: Record<string, () => void> = {
      'F': () => this.move(1),
      'B': () => this.move(-1),
      'L': () => this.rotate(-1),
      'R': () => this.rotate(1),
    };

    const handler = commandHandlers[command];
    if (handler) {
      handler();
    } else {
      throw new Error(`Invalid command: ${command}. Valid commands are F, B, L, R.`);
    }
  }

  /**
   * Executes a sequence of commands and returns the final position
   * @param {string} commands - A string of commands (e.g., "FFRFF")
   * @returns {string} The final position and status in format "(x, y) DIRECTION [STOPPED]"
   */
  public executeCommandSequence(commands: string): string {
    for (const command of commands) {
      this.executeCommand(command);
      if (this.status === 'STOPPED') break;
    }
    return this.getPosition();
  }

  /**
   * Moves the rover forward or backward based on current direction
   * @param {number} step - 1 for forward, -1 for backward
   * @private
   */
  private move(step: number): void {
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case 'NORTH': newY += step; break;
      case 'EAST': newX += step; break;
      case 'SOUTH': newY -= step; break;
      case 'WEST': newX -= step; break;
    }

    if (this.hasObstacle(newX, newY)) {
      this.status = 'STOPPED';
    } else {
      this.x = newX;
      this.y = newY;
    }
  }

  /**
   * Rotates the rover left or right by 90 degrees
   * @param {number} step - -1 for left, 1 for right
   * @private
   */
  private rotate(step: number): void {
    const currentIndex = this.directions.indexOf(this.direction);
    const newIndex = (currentIndex + step + 4) % 4;
    this.direction = this.directions[newIndex];
  }

  /**
   * Checks if there's an obstacle at the specified coordinates
   * @param {number} x - The x-coordinate to check
   * @param {number} y - The y-coordinate to check
   * @returns {boolean} True if obstacle exists at (x,y), false otherwise
   * @private
   */
  private hasObstacle(x: number, y: number): boolean {
    return this.obstacles.some(obs => obs.x === x && obs.y === y);
  }

  /**
   * Gets the rover's current position and status
   * @returns {string} Formatted position string "(x, y) DIRECTION [STOPPED]"
   */
  public getPosition(): string {
    return `(${this.x}, ${this.y}) ${this.direction}${this.status === 'STOPPED' ? ' STOPPED' : ''}`;
  }
}

export default MarsRover;