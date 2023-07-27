"use client";

import Link from "next/link";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <main className="main">
      <h3>Profile</h3>
      <div>
        email: {user?.email} | uid: {user?.uid}
      </div>

      Back to main menu 
      <Link href='/'>Go to main menu</Link>
    </main>
  );
}
