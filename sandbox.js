import Block from './src/Block';
import BlockChain from './src/BlockChain';
import isValidBlock, {isValidChain} from './src/support/validate-block';
import createServer from './src/node/server';


const chain = new BlockChain();

chain.createBlock("Luba loh").commit(chain);

console.log(isValidChain(chain.blocks))

const server = createServer(chain, 4444);


