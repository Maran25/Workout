class Node {
  constructor() {
    this.links = new Array(26);
    this.cntWord = 0;
    this.cntPrefix = 0;
  }

  get(ch) {
    return this.links[ch.charCodeAt(0) - 97];
  }

  put(ch) {
    this.links[ch.charCodeAt(0) - 97] = new Node();
  }

  containsKey(ch) {
    return this.links[ch.charCodeAt(0) - 97] !== undefined;
  }

  increaseCntWord() {
    this.cntWord++;
  }

  decreaseCntWord() {
    this.cntWord--;
  }

  increaseCntPrefix() {
    this.cntPrefix++;
  }

  decreaseCntPrefix() {
    this.cntPrefix--;
  }

  getCntWord() {
    return this.cntWord;
  }

  getCntPrefix() {
    return this.cntPrefix;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.containsKey(ch)) {
        node.put(ch);
      }
      node = node.get(ch);
      node.increaseCntPrefix();
    }
    node.increaseCntWord();
  }

  totalWord(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.containsKey(ch)) return;
      node = node.get(ch);
    }
    return node.getCntWord();
  }

  totalPrefix(prefix) {
    let node = this.root;
    for (let ch of prefix) {
      if (!node.containsKey(ch)) return;
      node = node.get(ch);
    }
    return node.getCntPrefix();
  }

  earse(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.containsKey(ch)) return;
      node.decreaseCntPrefix();
      node = node.get(ch);
    }
    node.decreaseCntWord();
  }
}

const tire = new Trie();
tire.insert("apple");
tire.insert("appl");
tire.insert("apps");
tire.insert("apps");
tire.insert("orange");

console.log(tire.totalWord("apps"));
console.log(tire.totalWord("apple"));
console.log(tire.totalPrefix("app"));
console.log(tire.totalPrefix("appl"));
console.log(tire.earse("apple"));
console.log(tire.totalWord("apple"));
console.log(tire.totalPrefix("app"));
