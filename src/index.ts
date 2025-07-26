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
export const FOSHO_PROGRAM_ID = "3disS3DbsgoLYWnCEUesoVdKQUaMF7EHsQ3m4L8nrhPw";
