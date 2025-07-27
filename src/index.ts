import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor';
import { Connection } from '@solana/web3.js';
import { FoshoProgram } from './client/idl';

// Export the main program IDL and types
export type { FoshoProgram } from './client/idl';

// Export individual types for convenience
export type {
  Community,
  Event,
  EventType,
  TicketState,
  Config,
  CommunityAccount,
  EventAccount,
  FoshoInstructionName,
  FoshoInstructions,
  FoshoAccounts
} from './types';

// Export utility functions
export {
  getCommunityPDA,
  getEventPDA,
  getTicketPDA,
  getEventCollectionPDA,
  timestampToDate,
  dateToTimestamp,
  lamportsToSol,
  solToLamports
} from './utils';

// Export program address
export const FOSHO_PROGRAM_ID = "FoshoQ1XrcaP9bsLAhek4hQQCy4MC1SbDrnyDLcW7bsM";

// Export program instance
export function createFoshoClient(connection: Connection): Program<FoshoProgram> {
  const provider = new AnchorProvider(connection, {} as Wallet, {});
  return new Program<FoshoProgram>(FOSHO_PROGRAM_ID, provider);
}
