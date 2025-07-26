"use strict";
/**
 * Example usage of the Fosho SDK
 *
 * This example shows how to use the Fosho SDK to interact with the Fosho Solana program.
 * Make sure to install the required peer dependencies:
 *
 * npm install @coral-xyz/anchor @solana/web3.js
 */
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupFoshoProgram = setupFoshoProgram;
exports.generatePDAs = generatePDAs;
exports.handleCommunityAccount = handleCommunityAccount;
exports.handleEventAccount = handleEventAccount;
exports.createEventType = createEventType;
var fosho_sdk_1 = require("fosho-sdk");
var web3_js_1 = require("@solana/web3.js");
var anchor_1 = require("@coral-xyz/anchor");
// Example: Setting up the Fosho program
function setupFoshoProgram() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, wallet, provider;
        return __generator(this, function (_a) {
            connection = new web3_js_1.Connection('https://api.devnet.solana.com', 'confirmed');
            wallet = new anchor_1.Wallet(web3_js_1.Keypair.generate());
            provider = new anchor_1.AnchorProvider(connection, wallet, {});
            // Create the program instance
            // Note: You'll need to provide the actual IDL object here
            // const program = new Program<FoshoProgram>(IDL, FOSHO_PROGRAM_ID, provider);
            console.log("Fosho Program ID: ".concat(fosho_sdk_1.FOSHO_PROGRAM_ID));
            return [2 /*return*/, { connection: connection, provider: provider }];
        });
    });
}
// Example: Generate PDAs for accounts
function generatePDAs() {
    return __awaiter(this, void 0, void 0, function () {
        var communityKeypair, communitySeed, _a, communityPDA, communityBump, eventNonce, _b, eventPDA, eventBump;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    communityKeypair = web3_js_1.Keypair.generate();
                    communitySeed = communityKeypair.publicKey;
                    return [4 /*yield*/, (0, fosho_sdk_1.getCommunityPDA)(communitySeed)];
                case 1:
                    _a = _c.sent(), communityPDA = _a[0], communityBump = _a[1];
                    console.log("Community PDA: ".concat(communityPDA.toString()));
                    console.log("Community Bump: ".concat(communityBump));
                    eventNonce = 0;
                    return [4 /*yield*/, (0, fosho_sdk_1.getEventPDA)(communityPDA, eventNonce)];
                case 2:
                    _b = _c.sent(), eventPDA = _b[0], eventBump = _b[1];
                    console.log("Event PDA: ".concat(eventPDA.toString()));
                    console.log("Event Bump: ".concat(eventBump));
                    return [2 /*return*/];
            }
        });
    });
}
// Example: Type-safe account handling
function handleCommunityAccount(community) {
    console.log("Community: ".concat(community.name));
    console.log("Authority: ".concat(community.authority));
    console.log("Events Count: ".concat(community.eventsCount));
    console.log("URI: ".concat(community.uri));
    console.log("Approvers: ".concat(community.approvers.join(', ')));
}
function handleEventAccount(event) {
    console.log("Event Community: ".concat(event.community));
    console.log("Event Type: ".concat(event.eventType));
    console.log("Capacity: ".concat(event.capacity || 'Unlimited'));
    console.log("Commitment Fee: ".concat(event.commitmentFee.toString()));
    console.log("Reward Per User: ".concat(event.rewardPerUser.toString()));
    console.log("Event Starts: ".concat(new Date(Number(event.eventStartsAt) * 1000)));
    console.log("Event Ends: ".concat(new Date(Number(event.eventEndsAt) * 1000)));
    console.log("Is Cancelled: ".concat(event.isCancelled));
}
// Example: Working with event types
function createEventType() {
    // EventType is an enum with 'inPerson' and 'virtual' variants
    return { inPerson: {} }; // or { virtual: {} }
}
// Run examples
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var eventType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('=== Fosho SDK Example ===');
                    return [4 /*yield*/, setupFoshoProgram()];
                case 1:
                    _a.sent();
                    console.log('\\n=== PDA Generation ===');
                    return [4 /*yield*/, generatePDAs()];
                case 2:
                    _a.sent();
                    console.log('\\n=== Event Type Example ===');
                    eventType = createEventType();
                    console.log('Event Type:', eventType);
                    return [2 /*return*/];
            }
        });
    });
}
