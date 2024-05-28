import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://veohsbknlmuhxjdzcdwm.supabase.co/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlb2hzYmtubG11aHhqZHpjZHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NTcyOTMsImV4cCI6MjAzMDMzMzI5M30.cxHy0RU3jKCdGxyyiPBuLoUYt3Iss0FvLbGoUWskr-g";

export const supabase = createClient(supabaseUrl, supabaseKey);
