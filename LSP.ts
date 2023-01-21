/**
 * if you have class B inherits from class A then class A
 * Should be replaceable by class B without any changes
 */

class Bird {
  eat(): string {
    return `I can eat`;
  }
}

class FlyBird extends Bird {
  fly(): string {
    return `I can Fly`;
  }
}

class Duck extends FlyBird {
  quack(): string {
    return `I can quack`;
  }
}

class Penguin extends Bird {
  swim(): string {
    return `I can swim`;
  }
}

const duck = new Duck();
const penguin = new Penguin();

const birdFly = (bird: FlyBird): string => {
  return bird.fly();
};

const birdSwim = (bird: Penguin): string => {
  return bird.swim();
};

console.log(birdFly(duck));
console.log(birdSwim(penguin));
