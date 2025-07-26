import { PublicKey } from '@solana/web3.js';
import { FOSHO_PROGRAM_ID } from './index';

/**
 * Utility functions for working with Fosho program accounts
 */

/**
 * Generate a Community PDA (Program Derived Address)
 * @param seed - The seed used to create the community
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Community PDA and bump seed
 */
export async function getCommunityPDA(
  seed: PublicKey,
  programId: string = FOSHO_PROGRAM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddressSync(
    [Buffer.from('community'), seed.toBuffer()],
    new PublicKey(programId)
  );
}

/**
 * Generate an Event PDA (Program Derived Address)
 * @param community - The community public key
 * @param nonce - The event nonce
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Event PDA and bump seed
 */
export async function getEventPDA(
  community: PublicKey,
  nonce: number,
  programId: string = FOSHO_PROGRAM_ID
): Promise<[PublicKey, number]> {
  const nonceBuffer = Buffer.alloc(4);
  nonceBuffer.writeUInt32LE(nonce, 0);
  
  return PublicKey.findProgramAddressSync(
    [Buffer.from('event'), community.toBuffer(), nonceBuffer],
    new PublicKey(programId)
  );
}

/**
 * Generate a Ticket PDA (Program Derived Address)
 * @param event - The event public key
 * @param attendee - The attendee public key
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Ticket PDA and bump seed
 */
export async function getTicketPDA(
  event: PublicKey,
  attendee: PublicKey,
  programId: string = FOSHO_PROGRAM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddressSync(
    [Buffer.from('event'), event.toBuffer(), attendee.toBuffer(), Buffer.from('ticket')],
    new PublicKey(programId)
  );
}

/**
 * Generate an Event Collection PDA (Program Derived Address)
 * @param event - The event public key
 * @param programId - The program ID (optional, defaults to FOSHO_PROGRAM_ID)
 * @returns The Event Collection PDA and bump seed
 */
export async function getEventCollectionPDA(
  event: PublicKey,
  programId: string = FOSHO_PROGRAM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddressSync(
    [Buffer.from('event'), event.toBuffer(), Buffer.from('collection')],
    new PublicKey(programId)
  );
}

/**
 * Convert timestamp to Date object
 * @param timestamp - Unix timestamp as bigint
 * @returns Date object
 */
export function timestampToDate(timestamp: bigint): Date {
  return new Date(Number(timestamp) * 1000);
}

/**
 * Convert Date to timestamp
 * @param date - Date object
 * @returns Unix timestamp as bigint
 */
export function dateToTimestamp(date: Date): bigint {
  return BigInt(Math.floor(date.getTime() / 1000));
}

/**
 * Convert lamports to SOL
 * @param lamports - Amount in lamports as bigint
 * @returns Amount in SOL as number
 */
export function lamportsToSol(lamports: bigint): number {
  return Number(lamports) / 1000000000; // 1 SOL = 1e9 lamports
}

/**
 * Convert SOL to lamports
 * @param sol - Amount in SOL as number
 * @returns Amount in lamports as bigint
 */
export function solToLamports(sol: number): bigint {
  return BigInt(Math.floor(sol * 1000000000));
}
