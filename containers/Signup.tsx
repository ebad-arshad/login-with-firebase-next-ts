'use client';
import { FC, useRef } from 'react'
import { Input, PasswordInput } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Signup: FC = () => {

    const nameRef = useRef<HTMLInputElement | null>(null);
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

    const signUpAcc = async () => {
        if (emailRef.current && passRef.current && nameRef.current) {
            if (!validEmail.test(emailRef.current?.value)) return;
            if (!validPassword.test(passRef.current?.value)) return;
            if (!nameRef.current?.value) return;
        }
    }

    return (
        <>
            <div
                className='px-24 bg-[#7752FE] w-[80%] mx-auto gap-2 mt-10 py-4 text-white flex flex-col items-center rounded-md'
            >
                <h1 className='text-2xl font-extrabold'>Sign up</h1>
                <div className='w-full'>
                    <Input ref={nameRef} className='w-full' placeholder="Enter full name" />
                </div>
                <div
                    className='flex gap-2 w-full items-center'
                >
                    <Input ref={emailRef} className='w-full' placeholder="Enter email" leftSection={<IconAt size={16} />} />
                    <PasswordInput
                        ref={passRef}
                        className='w-full'
                        placeholder="Enter Password"
                        leftSection={<IconLock size={16} />}
                    />

                </div>
                <Button onClick={signUpAcc} fullWidth color="#8E8FFA">Signup</Button>
                <p>Already have an account? <Link href={'/login'}><u className='cursor-pointer'><b>Login instead</b></u></Link></p>
            </div>
        </>
    )
}

export default Signup