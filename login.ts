// Import the API, Keyring and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { randomAsU8a, randomAsNumber, randomAsHex } = require( '@polkadot/util-crypto');

// The ID of web3 user we are registering
const idtolink = '5GrgA3Pu4JGTgHEQsYHBrLwXi585gEZGVUWMNHg1rE7jhRjy';
const uriofid = 'orient portion sleep harbor laptop employ cradle bottom vast tornado shuffle noble'; 

// The email-id we need to register
const email = 'test33@ganesh.com';
const password = 'welcome123';

// Don;t change below two lines
const masterid =  '5HnLfzCVR9vuM1z2fmZqsNazPqw6FzBJwr42HQRebmu6R4hH';
const masteruri = 'author notable dial assume confirm inner hammer attack daring hair blue join';

async function main () {
  const provider = new WsProvider('wss://student.selendra.org');

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });


  // Instantiate the API
  //const api = await ApiPromise.create();

  // Constuct the keyring after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
  const meo = keyring.addFromUri(masteruri);

  let alice = keyring.addFromUri(uriofid);

  const { nonce } = await api.query.system.account(meo.address);

  console.log("Master address = "+masterid);
  console.log("Student address = "+idtolink);



  const challenge = '5GrgArandom'; //(Math.random() + 1).toString(36).substr(32);


  console.log("challenge = "+challenge);

  // Using web3-id, users logs in. A unique random challenge is provided
  // If allowed, challenge is marked as allowed
  const loginwithchallenge = api.tx.identity.loginWeb3Sel16(challenge);

  // Check if login is successful, using challenge provided
  // const accesscheck = await api.query.identity.tokens(challenge);
  // console.log(accesscheck);

  // const login = api.tx.identity.loginWeb3Sel16(challenge);


  // Sign and send the transaction using our account
  await loginwithchallenge.signAndSend(alice);
 // console.log('login with hash', hash.toHex());

  console.log("querying  " + challenge);
  let accesscheck = await api.query.identity.tokens(challenge);
  console.log(JSON.stringify(accesscheck));
  if(accesscheck.inspect().inner) {
  console.log(accesscheck.toHuman());

  } else {

  console.log("Access failed ");
  }

 

}

main().catch(console.error).finally(() => process.exit());
