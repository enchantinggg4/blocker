import {blockToHash} from './hash';

export default function isValidBlock(previousBlock, newBlock){
    if(previousBlock.index + 1 !== newBlock.index){
        console.log(`Wrong index, expected ${previousBlock.index + 1} got ${newBlock.index}`)        
        return false;
    }else if(previousBlock.hash !== newBlock.previousHash){
        console.log(`Wrong previous block's hash, expected ${previousBlock.hash} got ${newBlock.previousHash}`)                
        return false;
    }else if(blockToHash(newBlock) !== newBlock.hash){
        console.log(`Wrong hash, expected ${blockToHash(newBlock)} got ${newBlock.hash}`)
        return false;   
    }else
        return true;
};


export const isValidChain = (blocks) => {
    return blocks.reduce((previousBlock, currentBlock) => {
        return isValidBlock(previousBlock, currentBlock);
    })
}