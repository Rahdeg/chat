"use client"

import { signOut } from "next-auth/react"

// import { db } from "@/lib/db";

// import Button from "@/components/ux/Button";

export default  function Home() {
  return <button onClick={()=> signOut()}> hello </button>
}
