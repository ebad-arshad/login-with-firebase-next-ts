'use client';
import { FC, useRef } from 'react'
import { Input, PasswordInput } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

const Login: FC = () => {

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);
    const { data: session } = useSession();

    if (session) {
        redirect('/');
    }

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const loginAcc = () => {
        if (emailRef.current && passRef.current) {
            if (!validEmail.test(emailRef.current?.value)) return;
            if (!validPassword.test(passRef.current?.value)) return;
        }
    }

    return (
        <>
            <div
                className='px-24 bg-[#7752FE] w-[80%] mx-auto gap-2 mt-10 py-4 text-white flex flex-col items-center rounded-md'
            >
                <h1 className='text-2xl font-extrabold'>Login</h1>
                <div
                    className='flex gap-2 w-full items-center'
                >
                    <Input ref={emailRef} className='w-full' placeholder="Enter Email" leftSection={<IconAt size={16} />} />
                    <PasswordInput
                        ref={passRef}
                        className='w-full'
                        placeholder="Enter Password"
                        leftSection={<IconLock size={16} />}
                    />
                </div>
                <Button onClick={() => signIn('github')} fullWidth color="#8E8FFA">Log in</Button>
                <p>Dont have an account? <Link href={'/signup'}><u className='cursor-pointer'><b>Create one</b></u></Link></p>
            </div>
        </>
    )
}

export default Login