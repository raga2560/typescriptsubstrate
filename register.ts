// Import the API, Keyring and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const BOB = '5EeHmFHozZfJqP7nnSw3t4cd6F9dwSDnMw5uDAqMjcSYVi1x';

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

  const { nonce } = await api.query.system.account(alice.address);
  // Create a extrinsic, transferring 12345 units to Bob
  const register = api.tx.indraIdentity.requestRegistrationSel11("test1@test.com", "hello123");

  try {
  // Sign and send the transaction using our account
  const hash = await register.signAndSend(alice);
  console.log('Registered with hash', hash.toHex());
  } catch(err) {
  console.log('Register error ', err         );

  }
  
}

main().catch(console.error).finally(() => process.exit());
