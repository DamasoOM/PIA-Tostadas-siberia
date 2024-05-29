//Supabase
import { createBrowserClient } from '@supabase/ssr'


//Types
import type { Database } from '@/app/_types/supabase';


const supabase = createBrowserClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default supabase;
