/**
 * High Level Modules Should not depend upon low level modules.
 * Both Should depend upon abstractions
 * This Principle aim to achieve Dependency Injection
 */

class Fetch {
  request(url: string): string {
    return `Data Fetch From ${url}`;
  }
}

class LocalStorage {
  get(key: string): string {
    return `Data From Local Storage ${key}`;
  }
}

class FetchClient {
  fetch: Fetch;

  constructor() {
    this.fetch = new Fetch();
  }

  getClient(url: string) {
    return this.fetch.request(url);
  }
}

class LocalStorageClient {
  localStorage: LocalStorage;

  constructor() {
    this.localStorage = new LocalStorage();
  }

  getClient(key: string) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(public client: FetchClient | LocalStorageClient) {}

  getData(key: string) {
    return this.client.getClient(key);
  }
}

const dbLocalStorage = new Database(new LocalStorageClient());
console.log(dbLocalStorage.getData('something could be there'));

const dbFetch = new Database(new FetchClient());
console.log(dbFetch.getData('http://fetch.com'));
