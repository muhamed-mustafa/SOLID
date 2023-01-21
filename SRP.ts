/**
 * Each software module has one, and only one, reason to change
 * Each module should be responsible to one, and only one
 */

class News {
  constructor(
    public title: string,
    public description: string,
    public isModified?: boolean
  ) {
    this.isModified = false;
  }

  update(description: string) {
    this.description = description;
    this.isModified = true;
  }
}

class PrintNews {
  constructor(public news: News) {}

  html() {
    return `
    <div>
        <h1>${this.news.title}</h1>
        <p>${this.news.description}</p>
    </div>
    `;
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      description: this.news.description,
      isModified: this.news.isModified,
    });
  }

  xml() {
    return `
    <news>
        <title>${this.news.title}</title>        
        <description>${this.news.description}</description>        
    </news>
    `;
  }
}

const news = new News('Weather news today', 'Very cold weather');

const printer = new PrintNews(news);

console.log(printer.html());
console.log(printer.xml());
console.log(printer.json());

news.update('Sunny Weather');

console.log(printer.html());
console.log(printer.xml());
console.log(printer.json());
