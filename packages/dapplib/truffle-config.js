require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift repeat night purpose grace cash equal gauge'; 
let testAccounts = [
"0x1b9ab245d2726f8af9ba3cc0ef53a5b980c7b6166a9e8ffa03d590510050f777",
"0x9421294bc28c81171b6f5e3638163de3f4d7cf104ba5914a751774ea18728cde",
"0x0d19c419b13db1110bb045a4260fee6356de70825d970f221c6ea7a92db8b8f4",
"0x85fc530dc8fbece8c2a61973326fbea3eacba82c60a74dd85588ae59830fe524",
"0x22667cc616e711eaee8da5436913bc9a408b131231f62dffbec3b5581ca24cff",
"0x87c4dff37881d188d026f423bec33af352b4a33aed3c68bd6cf5316e2f0b3005",
"0x8657a4e35a966303bab692c7d719644dc662e3cda9f7272dd920065508ca75cc",
"0xcabaed025e4ac5d0dc415b853e75054b8f15e3d886a01969627bbf1c6a0f7989",
"0xa650bbec3468f0a2ed92097bdbc8cfd9c6e252d076cd956cb12000a861e18441",
"0x04435ee8857a20b9abffea2ac76bc8969a583bf390763d3d951045a307b29185"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

