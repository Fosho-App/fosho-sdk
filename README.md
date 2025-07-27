# Fosho SDK

A TypeScript SDK for interacting with the Fosho Solana program, an Anchor-based smart contract for event management and community engagement.

## Installation

```bash
npm install fosho-sdk
```

## Usage

### Basic Import

```typescript
import { 
  FoshoProgram, 
  FOSHO_PROGRAM_ID, 
  Community, 
  Event, 
  EventType 
} from 'fosho-sdk';
```

### Types

The SDK exports the following main types:

#### Program Types
- `FoshoProgram` - The complete Anchor IDL type definition
- `FOSHO_PROGRAM_ID` - The program's public key as a string constant

#### Account Types
- `Community` - Community account structure from IDL
- `Event` - Event account structure from IDL
- `CommunityAccount` - Helper type with friendly field names
- `EventAccount` - Helper type with friendly field names

#### Enum Types
- `EventType` - Event type enumeration (inPerson, virtual)
- `TicketState` - Ticket state enumeration (pending, rejected, approved, claimed, declined)

#### Additional Types
- `Config` - Program configuration account
- `FoshoInstructionName` - Union type of all instruction names
- `FoshoInstructions` - All program instructions
- `FoshoAccounts` - All program accounts

### Example Usage with Anchor

```typescript
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { FoshoProgram, FOSHO_PROGRAM_ID } from 'fosho-sdk';

// Setup connection and provider
const connection = new Connection('https://api.mainnet-beta.solana.com');
const provider = new AnchorProvider(connection, wallet, {});

// Create program instance
const programId = new PublicKey(FOSHO_PROGRAM_ID);
const program = new Program<FoshoProgram>(idl, programId, provider);

// Use the program to interact with Fosho contracts
const community = await program.account.community.fetch(communityAddress);
const event = await program.account.event.fetch(eventAddress);
```

### TypeScript Support

The SDK is built with TypeScript and provides full type safety for all Fosho program interactions. All types are automatically inferred from the Anchor IDL.

## Development

This SDK is generated from the Fosho Anchor IDL and provides typed interfaces for:

- Creating and managing communities
- Creating and managing events
- Ticket management and verification
- Event participation and rewards

## Program Address

The Fosho program is deployed at: `FoshoQ1XrcaP9bsLAhek4hQQCy4MC1SbDrnyDLcW7bsM`

## Requirements

- Node.js >= 16
- TypeScript >= 4.5 (for development)

## Peer Dependencies

- `@coral-xyz/anchor` ^0.29.0
- `@solana/web3.js` ^1.95.0

## License

MIT
