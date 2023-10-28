'use client';

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  const { data: session } = useSession();

  console.log(session?.user);


  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      Welcome {session?.user?.name}
      <br />
      Email: {session?.user?.email}
      <br />
      <Image
        src={session?.user?.image ?? ""}
        alt={session.user?.name ?? ""}
        width={200}
        height={200}
      />
      <br />
      <button onClick={() => signOut()}>Log out</button>
    </div>
  )
}