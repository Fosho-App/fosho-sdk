"use strict";
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
exports.getCommunityPDA = getCommunityPDA;
exports.getEventPDA = getEventPDA;
exports.getTicketPDA = getTicketPDA;
exports.getEventCollectionPDA = getEventCollectionPDA;
exports.timestampToDate = timestampToDate;
exports.dateToTimestamp = dateToTimestamp;
exports.lamportsToSol = lamportsToSol;
exports.solToLamports = solToLamports;
var web3_js_1 = require("@solana/web3.js");
var index_1 = require("./index");
/**
 * Utility functions for working with Fosho program accounts
 */
/**
 * Generate a Community PDA (Program Derived Address)
 * @param seed - The seed used to create the community
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Community PDA and bump seed
 */
function getCommunityPDA(seed_1) {
    return __awaiter(this, arguments, void 0, function (seed, programId) {
        if (programId === void 0) { programId = index_1.FOSHO_PROGRAM_ID; }
        return __generator(this, function (_a) {
            return [2 /*return*/, web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('community'), seed.toBuffer()], new web3_js_1.PublicKey(programId))];
        });
    });
}
/**
 * Generate an Event PDA (Program Derived Address)
 * @param community - The community public key
 * @param nonce - The event nonce
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Event PDA and bump seed
 */
function getEventPDA(community_1, nonce_1) {
    return __awaiter(this, arguments, void 0, function (community, nonce, programId) {
        var nonceBuffer;
        if (programId === void 0) { programId = index_1.FOSHO_PROGRAM_ID; }
        return __generator(this, function (_a) {
            nonceBuffer = Buffer.alloc(4);
            nonceBuffer.writeUInt32LE(nonce, 0);
            return [2 /*return*/, web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('event'), community.toBuffer(), nonceBuffer], new web3_js_1.PublicKey(programId))];
        });
    });
}
/**
 * Generate a Ticket PDA (Program Derived Address)
 * @param event - The event public key
 * @param attendee - The attendee public key
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Ticket PDA and bump seed
 */
function getTicketPDA(event_1, attendee_1) {
    return __awaiter(this, arguments, void 0, function (event, attendee, programId) {
        if (programId === void 0) { programId = index_1.FOSHO_PROGRAM_ID; }
        return __generator(this, function (_a) {
            return [2 /*return*/, web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('event'), event.toBuffer(), attendee.toBuffer(), Buffer.from('ticket')], new web3_js_1.PublicKey(programId))];
        });
    });
}
/**
 * Generate an Event Collection PDA (Program Derived Address)
 * @param event - The event public key
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Event Collection PDA and bump seed
 */
function getEventCollectionPDA(event_1) {
    return __awaiter(this, arguments, void 0, function (event, programId) {
        if (programId === void 0) { programId = index_1.FOSHO_PROGRAM_ID; }
        return __generator(this, function (_a) {
            return [2 /*return*/, web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('event'), event.toBuffer(), Buffer.from('collection')], new web3_js_1.PublicKey(programId))];
        });
    });
}
/**
 * Convert timestamp to Date object
 * @param timestamp - Unix timestamp as bigint
 * @returns Date object
 */
function timestampToDate(timestamp) {
    return new Date(Number(timestamp) * 1000);
}
/**
 * Convert Date to timestamp
 * @param date - Date object
 * @returns Unix timestamp as bigint
 */
function dateToTimestamp(date) {
    return BigInt(Math.floor(date.getTime() / 1000));
}
/**
 * Convert lamports to SOL
 * @param lamports - Amount in lamports as bigint
 * @returns Amount in SOL as number
 */
function lamportsToSol(lamports) {
    return Number(lamports) / 1000000000; // 1 SOL = 1e9 lamports
}
/**
 * Convert SOL to lamports
 * @param sol - Amount in SOL as number
 * @returns Amount in lamports as bigint
 */
function solToLamports(sol) {
    return BigInt(Math.floor(sol * 1000000000));
}
