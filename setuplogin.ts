// Import the API, Keyring and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { randomAsU8a, randomAsNumber, randomAsHex } = require( '@polkadot/util-crypto');

// The ID of web3 user we are registering
const idtolink = '5GrgA3Pu4JGTgHEQsYHBrLwXi585gEZGVUWMNHg1rE7jhRjy';
const uriofid = 'orient portion sleep harbor laptop employ cradle bottom vast tornado shuffle noble'; 

// The email-id we need to register
const email = 'test2@ganesh.com';
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

  const { nonce } = await api.query.system.account(meo.address);

  let record = await api.query.identity.studentidOf(email);

  if(!record.inspect().inner) {
  // Master id registers email, passworf provided
  const registered = api.tx.identity.requestRegistrationSel11(email, password);
  console.log("email = "+email);
  console.log("password = "+password);
  await registered.signAndSend(meo);
  }


  record = await api.query.identity.studentidOf(email);
  if(record.inspect().inner) {
    let recordp = JSON.parse(record);
    console.log("Email " + email + " registered with " + recordp.accountId);

  }else {
    console.log("Email "+ email + "  not registered" );
    process.exit();
  }


  // Check if the given user is already linked

  record = await api.query.identity.emailId(idtolink);
  if(record.inspect().inner) {
    console.log(JSON.stringify(record));
    let recordp = JSON.parse(record);
    console.log("Id "+ idtolink + " linked to Email ");
    process.exit();
  }else {
  console.log("Id "+ idtolink + " Linking with Email ");
    
  const referal = (Math.random() + 1).toString(36).substring(7);
  console.log("referal = "+referal);


  // Master id creates referal to link web3 to be given
  const referalset = api.tx.identity.setReferalSel12(email, referal);
  await referalset.signAndSend(meo);
  console.log("referal set ");




  console.log("Linking referal");
  let alice = keyring.addFromUri(uriofid);
  // Master id links using referal web3-id to email-id
  const linkedweb3 = api.tx.identity.createWeb3linkSel15(email, idtolink, referal);
  await linkedweb3.signAndSend(alice);
  console.log("Referal linked ");

  }

  record = await api.query.identity.emailId(idtolink);

  if(record.inspect().inner) {
    console.log(JSON.stringify(record));
    let recordp = JSON.parse(record);
    console.log("Id "+ idtolink + " linked to Email ");
    process.exit();

  }  

    process.exit();

    /*
  const challenge = randomAsHex();
  console.log("challenge = "+challenge);

  try {
  // Using web3-id, users logs in. A unique random challenge is provided
  // If allowed, challenge is marked as allowed
  const loginwithchallenge = api.tx.identity.loginWeb3Sel16(challenge);

  // Check if login is successful, using challenge provided
  //const accesscheck = await api.query.identity.tokens(challenge);
  //console.log(accesscheck);

  //const login = api.tx.identity.loginWeb3Sel16(challenge);


  // Sign and send the transaction using our account
  const hash = await loginwithchallenge.signAndSend(alice);
 // console.log('login with hash', hash.toHex());

  const accesscheck = await api.query.identity.tokens(challenge);
//  console.log(accesscheck);

  let [xx] =  accesscheck.toHuman();

//  console.log(xx.metadata);
  console.log("Id of access holder = "+ xx.sender);
  console.log("Access status = "+ xx.data);

  } catch(err) {

  console.log('login error ', err         );

  }
*/ 

}

main().catch(console.error).finally(() => process.exit());
