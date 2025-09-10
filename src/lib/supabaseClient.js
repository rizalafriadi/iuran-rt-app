import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wvyjrtyslituvrhpbliz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2eWpydHlzbGl0dXZyaHBibGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MDEzMDMsImV4cCI6MjA3MzA3NzMwM30.6numZbFFj5Nr1H8lMMWox-iM1dqBXlBtzuTuBkQ0x1s';

export const supabase = createClient(supabaseUrl, supabaseKey);
