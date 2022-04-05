import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const supabaseUrl = 'https://tuywvagocubrrnottfdr.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1eXd2YWdvY3VicnJub3R0ZmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkxNTEyODUsImV4cCI6MTk2NDcyNzI4NX0.fGrMzcn3zHqNkHRwMdPCIpXqwlrRkepBhpRmmImaVFs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});
