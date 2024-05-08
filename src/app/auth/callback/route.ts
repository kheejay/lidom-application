import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/src/utils/supabase/server'
import { prismadb } from '@/src/lib/prismadb'
import {hash} from 'bcrypt';
import * as z from 'zod'

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request: NextRequest) {
  const { searchParams } = new
  
  URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = '/account'

  // Create redirect link without the secret token
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')

  if (token_hash && type) {
    const supabase = createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}

const userSchema = z
  .object({
    name: z.string ().min (1,'Name is required').max(100),
    email: z.string ().min (1,'Email is required').email('Invalid email'),
    password:z
    .string()
    .min(1,'Password is required')
    .min(8, 'Password must have more than 8 characters')


  })






export async function POST (req:Request) {
  try{
    const body = await req.json()
    const {email, name, password} = userSchema.parse(body);

    // check if the email already exists
    const existingEmail = await prismadb.user.findUnique({
    where: {email: email}
  });
  if(existingEmail){
    return NextResponse.json({user:null, message: "Existing Email. Try a different one."}, {status: 409})
  }

  // check if the name already exists
  const existingName = await prismadb.user.findUnique({
    where: {name: name}
  });
  if(existingName){
    return NextResponse.json({user:null, message: "Existing Name. Try a different one."}, {status: 409})
  }
  // checking if password exists and for security encryption
  const hashedPassword = await hash(password, 8);
  const newUser = await prismadb.user.create ({
    data: {
      email,
      name,
      password:hashedPassword
    }
  });
  const {password: newUserPassword, ...rest} = newUser;


    return NextResponse.json({user: newUser, message: "Account Created Successfully."}, {status:201});
  } catch(error) {
    return NextResponse.json({message: "Error: Something went wrong"}, {status:500});
  }
}