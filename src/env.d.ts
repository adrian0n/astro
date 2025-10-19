/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly OPENAI_API_KEY: string;
  readonly STRIPE_SECRET_KEY: string;
  readonly STRIPE_PUBLISHABLE_KEY: string;
  readonly JWT_SECRET: string;
  readonly AZURE_STORAGE_CONNECTION_STRING: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

