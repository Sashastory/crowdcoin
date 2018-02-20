import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x67E49237DCDa4fAaed0F43105b0BC9fe13956129'
);

export default instance;