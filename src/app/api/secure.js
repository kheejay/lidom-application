// pages/api/secure.js

import { requireAuth } from '@supabase/supabase-js';

export default async (req, res) => {
  try {
    // Require authenticated user
    const user = requireAuth(req);

    // Access user information
    console.log('Authenticated user:', user);

    res.status(200).json({ message: 'Authenticated route' });
  } catch (error) {
    console.error('Authentication error:', error.message);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
