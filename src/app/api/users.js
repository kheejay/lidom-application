// pages/api/users.js

import { PrismaClient } from '@prisma/client';
import supabase from '../../utils/supabaseClient';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    // Fetch users from Prisma
    const users = await prisma.user.findMany();

    // Return users data
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    // Create a new user in Prisma and Supabase
    const { email } = req.body;

    // Create user in Prisma
    const newUser = await prisma.user.create({
      data: {
        email,
      },
    });

    // Create user in Supabase
    const { user, error } = await supabase.auth.signUp({
      email,
    });

    if (error) {
      console.error('Error signing up:', error.message);
    }

    res.status(201).json(newUser);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
