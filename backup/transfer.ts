// Import the API, Keyring and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  const provider = new WsProvider('wss://indra-testnet.selendra.org');

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });


  // Instantiate the API
  //const api = await ApiPromise.create();

  // Constuct the keyring after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
  const alice = keyring.addFromUri('author notable dial assume confirm inner hammer attack daring hair blue join' );

  // Create a extrinsic, transferring 12345 units to Bob
  const transfer = api.tx.balances.transfer(BOB, 12);

  try {
  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(alice);

  console.log('Transfer sent with hash', hash.toHex());
  } catch(err) {
  console.log('Transfer send error ', err         );

  }
  
}

main().catch(console.error).finally(() => process.exit());
