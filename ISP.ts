/**
 *  states that no client should be forced to depend on methods
 *  it doesn't use
 */

interface IPrinter {
  print(): string;
}

interface IScanner {
  scan(): string;
}

interface IFax {
  fax(): string;
}

class SuperPrinter implements IPrinter, IScanner, IFax {
  print(): string {
    return 'print';
  }

  scan(): string {
    return 'scan';
  }

  fax(): string {
    return 'fax';
  }
}

class EcoPrinter implements IPrinter {
  print(): string {
    return 'print';
  }
}

class FaxPrinter implements IFax {
  fax(): string {
    return 'fax';
  }
}

const superPrinter = new SuperPrinter();
console.log(superPrinter.print());
console.log(superPrinter.scan());
console.log(superPrinter.fax());

const ecoPrinter = new EcoPrinter();
console.log(ecoPrinter.print());

const faxPrinter = new FaxPrinter();
console.log(faxPrinter.fax());
