import Button from '@/components/ux/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react'



const page = async ({}) => {
  const session = await getServerSession(authOptions)

  return <div>ffff</div>
}

export default page;