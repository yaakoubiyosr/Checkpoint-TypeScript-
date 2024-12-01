import React from 'react';

interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const App: React.FC = () => {
  const myCar = new Car("Mercedes", "G63", 2024);

  myCar.start(); 

  return (
    <div className="App">
      <h1>Welcome to the Car App</h1>
    </div>
  );
}

export default App;