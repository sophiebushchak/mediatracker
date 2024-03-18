"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

export default function NavLinkItem({
  href,
  text,
}: {
  href: string,
  text: string,
}) {
  const path = usePathname()
  const isActive = href === path

  return (
    <li className={`text-2xl ${isActive ? 'underline' : ''}`}>
      <Link href={href}>{text}</Link>
    </li>
  );
}