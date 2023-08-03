import type { Metadata } from "next";
import getAllusers from "@/lib/getAllusers";

export const metadata: Metadata = {
    title: 'Users',
}

import React from 'react'
import { promises } from "dns";

export default function UsersPage() {
    const usersData: Promise<User[]>  = getAllusers()
  return (
    <div>UsersPage</div>
  )
}

