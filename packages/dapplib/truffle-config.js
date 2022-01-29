require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember arrow hope clinic tail giggle'; 
let testAccounts = [
"0xc5b7090b4857f3f2a9ef79f9a5a4ab1f94eac1a972628f0b972327f89a4667af",
"0xbd636912e9dd1630430e14ed61d45f69b5ebc23fc66d2623661f7fc0da30e96d",
"0xb666ab24f1f6c07ff5bcceb16f7ca65abd5097add9141a1410e379988216ea80",
"0x069267863fa6e7c70dc77a526a0fcebbe68872d03ec60e8cf10663f8291df7f9",
"0x63faaf8a9380495181d21666ee67e55d583e1b6d0fa84686a002d1d88edfab9d",
"0xfe3c6dc88cf6b8acd81cbb398799ccd87e26a0559ab8cec664a7442d24aff115",
"0x14a467a42557ef3135d863c82639aa9e5be729b2edfd8d24ca825c0d5c974d91",
"0x46d23ea3b1ebb5ee8a7def342f0ef650474441f6e94475be88bfedf318ed8d30",
"0x58eeb357420b2d55a4c63a3dc473612c60b88204420f92af53d83fef115c10c9",
"0xca783e1c7f77f183f8fa714d98e562f42f56cb9f19253a5d0dd01f5c9d4b9e9d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


