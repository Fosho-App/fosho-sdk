// Utility module to handle IDL JSON import
import type { FoshoProgram } from './idl';

// Since we can't directly import JSON with strict TypeScript,
// we'll re-export the IDL structure as a constant
export const IDL_JSON: FoshoProgram = {
  "address": "3disS3DbsgoLYWnCEUesoVdKQUaMF7EHsQ3m4L8nrhPw",
  "metadata": {
    "name": "foshoProgram",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  // Note: The full IDL content would be copied here
  // For brevity, we'll reference the typed version from idl.ts
} as any; // We'll cast as any since the full structure is quite large
