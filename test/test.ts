import * as chai from "chai";
import { ethers } from "ethers";
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)

function parseEther(amount: Number) {
    return ethers.utils.parseUnits(amount.toString(), 18);
}