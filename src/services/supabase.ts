import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

export const supabaseUrl = "https://okrairinnmdybcgbvmzl.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
