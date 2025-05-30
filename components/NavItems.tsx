"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = [{
    name: 'Home',
    href: '/',
}, {
    name: 'Companions',
    href: '/companions',
}, {
    name: 'My Journey',
    href: '/my-journey',
}]
export default function NavItems() {
    const pathname = usePathname()
    return (
        <nav className='flex items-center gap-4'>
                {Nav.map((item) => (
                        <Link href={item.href} key={item.name} className={cn(pathname === item.href && 'text-primary font-semibold')}>
                            {item.name}
                        </Link>
                ))}
        </nav>
    )
}
