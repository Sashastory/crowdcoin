import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x7BF2b6a81718F5ef67D53DFaF557a8E9f794242D'
);

export default instance;