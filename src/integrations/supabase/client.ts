
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nyncxpsoqahjxeiearfv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55bmN4cHNvcWFoanhlaWVhcmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3OTM2OTEsImV4cCI6MjA2MDM2OTY5MX0.hr0kPUAylPKKrW3c70fxkvXk-stycikCkpT3W3nOPfo";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
