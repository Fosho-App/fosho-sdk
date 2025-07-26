import type { FoshoProgram } from './client/idl';

// Extract individual types from the IDL program type
export type Community = Extract<FoshoProgram['types'][number], { name: 'community' }>['type'];
export type Event = Extract<FoshoProgram['types'][number], { name: 'event' }>['type'];
export type EventType = Extract<FoshoProgram['types'][number], { name: 'eventType' }>['type'];
export type TicketState = Extract<FoshoProgram['types'][number], { name: 'ticketState' }>['type'];
export type Config = Extract<FoshoProgram['types'][number], { name: 'config' }>['type'];

// Helper types for better developer experience
export interface CommunityAccount {
  seed: string;
  authority: string;
  eventsCount: number;
  bump: number[];
  name: string;
  uri: string;
  approvers: string[];
  reserved: number[];
}

export interface EventAccount {
  community: string;
  rewardMint: string | null;
  capacity: number | null;
  nonce: number;
  commitmentFee: bigint;
  rewardPerUser: bigint;
  eventStartsAt: bigint;
  eventEndsAt: bigint;
  registrationStartsAt: bigint | null;
  registrationEndsAt: bigint;
  isCancelled: boolean;
  bump: number[];
  eventType: EventType;
  approver: string | null;
  reserved: number[];
}

// Instruction names for type safety
export type FoshoInstructionName = FoshoProgram['instructions'][number]['name'];

// Program instructions type
export type FoshoInstructions = FoshoProgram['instructions'];

// Program accounts type
export type FoshoAccounts = FoshoProgram['accounts'];
