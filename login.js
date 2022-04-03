var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Import the API, Keyring and some utility functions
var _a = require('@polkadot/api'), ApiPromise = _a.ApiPromise, WsProvider = _a.WsProvider;
var Keyring = require('@polkadot/keyring').Keyring;
var _b = require('@polkadot/util'), stringToU8a = _b.stringToU8a, u8aToHex = _b.u8aToHex;
var _c = require('@polkadot/util-crypto'), randomAsU8a = _c.randomAsU8a, randomAsNumber = _c.randomAsNumber, randomAsHex = _c.randomAsHex;
// The ID of web3 user we are registering
var idtolink = '5GrgA3Pu4JGTgHEQsYHBrLwXi585gEZGVUWMNHg1rE7jhRjy';
var uriofid = 'orient portion sleep harbor laptop employ cradle bottom vast tornado shuffle noble';
// The email-id we need to register
var email = 'test33@ganesh.com';
var password = 'welcome123';
// Don;t change below two lines
var masterid = '5HnLfzCVR9vuM1z2fmZqsNazPqw6FzBJwr42HQRebmu6R4hH';
var masteruri = 'author notable dial assume confirm inner hammer attack daring hair blue join';
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var provider, api, keyring, meo, alice, nonce, challenge, loginwithchallenge, accesscheck, message, signature, isValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = new WsProvider('wss://student.selendra.org');
                    return [4 /*yield*/, ApiPromise.create({ provider: provider })];
                case 1:
                    api = _a.sent();
                    keyring = new Keyring({ type: 'sr25519' });
                    meo = keyring.addFromUri(masteruri);
                    alice = keyring.addFromUri(uriofid);
                    return [4 /*yield*/, api.query.system.account(meo.address)];
                case 2:
                    nonce = (_a.sent()).nonce;
                    console.log("Master address = " + masterid);
                    console.log("Student address = " + idtolink);
                    challenge = '5GrgArandom';
                    console.log("challenge = " + challenge);
                    loginwithchallenge = api.tx.identity.loginWeb3Sel16(challenge);
                    // Check if login is successful, using challenge provided
                    // const accesscheck = await api.query.identity.tokens(challenge);
                    // console.log(accesscheck);
                    // const login = api.tx.identity.loginWeb3Sel16(challenge);
                    // Sign and send the transaction using our account
                    return [4 /*yield*/, loginwithchallenge.signAndSend(alice)];
                case 3:
                    // Check if login is successful, using challenge provided
                    // const accesscheck = await api.query.identity.tokens(challenge);
                    // console.log(accesscheck);
                    // const login = api.tx.identity.loginWeb3Sel16(challenge);
                    // Sign and send the transaction using our account
                    _a.sent();
                    // console.log('login with hash', hash.toHex());
                    console.log("querying  " + challenge);
                    return [4 /*yield*/, api.query.identity.tokens(challenge)];
                case 4:
                    accesscheck = _a.sent();
                    console.log(JSON.stringify(accesscheck));
                    if (accesscheck.inspect().inner) {
                        console.log(accesscheck.toHuman());
                    }
                    else {
                        console.log("Access failed ");
                    }
                    message = stringToU8a('this is our message');
                    signature = alice.sign(message);
                    isValid = alice.verify(message, signature, alice.publicKey);
                    console.log("".concat(u8aToHex(signature), " is ").concat(isValid ? 'valid' : 'invalid'));
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](console.error)["finally"](function () { return process.exit(); });
