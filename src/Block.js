export default class Block{
    constructor(index, timestamp, content, previousHash, hash){
        this.index = index;
        this.timestamp = timestamp;
        this.content = content;
        this.previousHash = previousHash;
        this.hash = hash;
    }

    commit(chain){
        chain.pushBlock(this);
    }

    serialize(){
        return {
            index: this.index,
            timestamp: this.timestamp,
            content: this.content,
            previousHash: this.previousHash,
            hash: this.hash
        }
    }
}