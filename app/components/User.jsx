"use client";

import { AuthContext } from "../context/AuthContextProvider";
import Link from "next/link";
import { useContext } from "react";

export default function User() {
  const { user } = useContext(AuthContext);

  return (
    <>
    {user && <Link href="/profile">Profile</Link> }
    {!user && <Link href="/register">Register / Login</Link> }
    </>
  )
}
