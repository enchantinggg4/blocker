import sha256 from "sha256";

export default function hash(data){
    return sha256(data);
}

export const blockToHash = (block) => {
    return hash((block.index) + block.previousHash + block.timestamp + block.content)
}