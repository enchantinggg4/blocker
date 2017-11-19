import Block from './Block.js';
import {blockToHash} from './support/hash.js';
import validateBlock from './support/validate-block.js';

export default class BlockChain{
    constructor(){
        this.blocks = [
            new Block(1, new Date().getTime(), "Genesis shit", "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7"),
        ];
    }

    last(){
        return this.blocks[this.blocks.length - 1];
    }

    createBlock(content){
        const lastBlock = this.last();
        const timestamp = new Date().getTime();
        const block = new Block(
            lastBlock.index + 1, 
            timestamp,
            content, 
            lastBlock.hash,
            null);
        block.hash = blockToHash(block);
        return block;
    }

    pushBlock(block){
        this.blocks.push(block);
        return this.last();
    }



    merge(){

    }


    serialize(){
        return this.blocks.map(it => it.serialize())
    }
}