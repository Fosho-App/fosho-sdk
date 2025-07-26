/**
 * Example usage of the Fosho SDK
 * 
 * This example shows how to use the Fosho SDK to interact with the Fosho Solana program.
 * Make sure to install the required peer dependencies:
 * 
 * npm install @coral-xyz/anchor @solana/web3.js
 */

import { 
  FoshoProgram, 
  FOSHO_PROGRAM_ID,
  getCommunityPDA,
  getEventPDA,
  CommunityAccount,
  EventAccount,
  EventType
} from 'fosho-sdk';

import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor';

// Example: Setting up the Fosho program
async function setupFoshoProgram() {
  // Create a connection to Solana
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  
  // Create a wallet (in a real app, this would be connected via wallet adapter)
  const wallet = new Wallet(Keypair.generate());
  
  // Create the provider
  const provider = new AnchorProvider(connection, wallet, {});
  
  // Create the program instance
  // Note: You'll need to provide the actual IDL object here
  // const program = new Program<FoshoProgram>(IDL, FOSHO_PROGRAM_ID, provider);
  
  console.log(`Fosho Program ID: ${FOSHO_PROGRAM_ID}`);
  
  return { connection, provider };
}

// Example: Generate PDAs for accounts
async function generatePDAs() {
  // Example community seed
  const communityKeypair = Keypair.generate();
  const communitySeed = communityKeypair.publicKey;
  
  // Generate Community PDA
  const [communityPDA, communityBump] = await getCommunityPDA(communitySeed);
  console.log(`Community PDA: ${communityPDA.toString()}`);
  console.log(`Community Bump: ${communityBump}`);
  
  // Generate Event PDA (assuming nonce 0 for first event)
  const eventNonce = 0;
  const [eventPDA, eventBump] = await getEventPDA(communityPDA, eventNonce);
  console.log(`Event PDA: ${eventPDA.toString()}`);
  console.log(`Event Bump: ${eventBump}`);
}

// Example: Type-safe account handling
function handleCommunityAccount(community: CommunityAccount) {
  console.log(`Community: ${community.name}`);
  console.log(`Authority: ${community.authority}`);
  console.log(`Events Count: ${community.eventsCount}`);
  console.log(`URI: ${community.uri}`);
  console.log(`Approvers: ${community.approvers.join(', ')}`);
}

function handleEventAccount(event: EventAccount) {
  console.log(`Event Community: ${event.community}`);
  console.log(`Event Type: ${event.eventType}`);
  console.log(`Capacity: ${event.capacity || 'Unlimited'}`);
  console.log(`Commitment Fee: ${event.commitmentFee.toString()}`);
  console.log(`Reward Per User: ${event.rewardPerUser.toString()}`);
  console.log(`Event Starts: ${new Date(Number(event.eventStartsAt) * 1000)}`);
  console.log(`Event Ends: ${new Date(Number(event.eventEndsAt) * 1000)}`);
  console.log(`Is Cancelled: ${event.isCancelled}`);
}

// Example: Working with event types
function createEventType(): EventType {
  // EventType is an enum with 'inPerson' and 'virtual' variants
  return { inPerson: {} }; // or { virtual: {} }
}

// Run examples
async function main() {
  console.log('=== Fosho SDK Example ===');
  
  await setupFoshoProgram();
  console.log('\\n=== PDA Generation ===');
  await generatePDAs();
  
  console.log('\\n=== Event Type Example ===');
  const eventType = createEventType();
  console.log('Event Type:', eventType);
}

// Uncomment to run the example
// main().catch(console.error);

export {
  setupFoshoProgram,
  generatePDAs,
  handleCommunityAccount,
  handleEventAccount,
  createEventType
};
