/**
 * The OCP states the following: “Software entities (classes, modules, functions, and so on)
 * should be open for extension, but closed for modification”
 */

abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  constructor(public size: number) {
    super();
  }

  area(): number {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return this.radius ** 2 * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }

  area(): number {
    return this.height * this.width;
  }
}

class Triangle extends Shape {
  constructor(public a: number, public b: number) {
    super();
  }

  area(): number {
    return (this.a * this.b) / 2;
  }
}

class Calculator {
  constructor(public shapes = [] as Shape[]) {}

  sum(): number {
    return this.shapes.reduce((acc: number, shape: Shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calculator = new Calculator([
  new Square(10),
  new Circle(1),
  new Rectangle(20, 5),
  new Triangle(50, 3),
]);

console.log(calculator.sum()); // 278.1415926535898 ;
