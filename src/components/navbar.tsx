import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-row">
      <Image
        src="/gitlab-logo.png"
        width={100}
        height={100}
        alt="gemini"
        className="top-2 left-2"
      />
      <p className="text-white ml-2">hi</p>
    </div>
  );
}
