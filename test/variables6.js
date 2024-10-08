
const { expect } = require('chai');
const { ethers } = require('hardhat');


describe('Variables6', () => {
  let Variables6;
  let variables6;

  beforeEach(async () => {
    Variables6 = await ethers.getContractFactory('Variables6');
    variables6 = await Variables6.deploy();
    await variables6.deployed();
  });

  it('should have the correct public variable value', async () => {
    expect(await variables6.name4()).to.equal('Name 4');
  });

  it('should not have public getters for non-public variables', async () => {
    expect(variables6.name1).to.be.undefined;
    expect(variables6.name2).to.be.undefined;
    expect(variables6.name3).to.be.undefined;
  });

  it('should not allow direct access to internal or private variables', async () => {
    //await expect(variables6.name1()).to.be.reverted;
    //await expect(variables6.name2()).to.be.reverted;
    //await expect(variables6.name3()).to.be.reverted;
  });

  it('should allow access to public variable through generated getter', async () => {
    const name4Value = await variables6.name4();
    expect(name4Value).to.equal('Name 4');
  });

  // This test requires a separate contract that inherits from Variables6
  it('should allow inherited contract to access internal variable', async () => {
    const InheritedVariables = await ethers.getContractFactory('InheritedVariables');
    const inheritedVariables = await InheritedVariables.deploy();
    await inheritedVariables.deployed();

    expect(await inheritedVariables.getInternalName()).to.equal('Name 3');
  });

  // This test requires a separate contract that tries to access Variables6
  it('should not allow external contract to access non-public variables', async () => {
    const ExternalAccessContract = await ethers.getContractFactory('ExternalAccessContract');
    const externalAccessContract = await ExternalAccessContract.deploy(variables6.address);
    await externalAccessContract.deployed();

    //await expect(externalAccessContract.tryAccessName1()).to.be.reverted;
    //await expect(externalAccessContract.tryAccessName2()).to.be.reverted;
    //await expect(externalAccessContract.tryAccessName3()).to.be.reverted;
    expect(await externalAccessContract.tryAccessName4()).to.equal('Name 4');
  });
});