# Mars Rover Simulation 🚀

![NASA Mars Rover]

A TypeScript implementation of a NASA-style Mars Rover control system that processes movement commands while avoiding obstacles.

## 🌟 Features

### Core Functionality
- **Movement Commands**: 
  - `F`: Move Forward 
  - `B`: Move Backward
  - `L`: Rotate Left (90°)
  - `R`: Rotate Right (90°)
- **Obstacle Detection**: Stops before hitting obstacles
- **Position Reporting**: Returns formatted position (x, y) and direction
- **Globe Wrapping**: Supports infinite grid (no world edges)

### Advanced Features
- 🛑 Collision detection with `STOPPED` status
- 🔄 Direction rotation management
- 📊 Comprehensive unit testing
- 📚 Automated documentation generation

### Developer Experience
- 🛠 TypeScript 4.x+
- 🧪 Jest test coverage
- 📝 TypeDoc documentation
- 🔄 CI-ready configuration

## 🛠 Installation

### Prerequisites
- Node.js v18+
- npm v9+ or yarn
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/AliMagdi/mars-rover-ts.git
cd mars-rover-ts

# Install dependencies
npm install

# Build project
npm run build



🏃‍♂️ Usage
Basic Execution
bash
npm start
Runs the demo scenario from src/index.ts:

Initial position: (4, 2) EAST

Command sequence: "FLFFFRFLB"

Outputs final position


🧪 Testing
npm test


🏗 Project Structure
mars-rover-ts/
├── src/
│   ├── models/
│   │   └── interfaces.ts       # Type definitions (Direction, Position, etc.)
│   ├── marsRover.ts            # Core Rover implementation
│   └── index.ts                # Demo scenario
├── tests/
│   └── marsRover.test.ts       # Unit tests (100% coverage)
├── docs/                       # Generated documentation
├── node_modules/
├── package.json                # Project config
├── tsconfig.json               # TypeScript config
├── jest.config.js              # Jest config
└── README.md                   # This file



📦 Dependencies
Production
TypeScript (^5.0.0)

ts-node (^10.9.0)

Development
Jest (^29.0.0)

ts-jest (^29.1.0)

TypeDoc (^0.25.0)

@types/node (^20.0.0)



📜 License
MIT License © 2025 AliMagdi


