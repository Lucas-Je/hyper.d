import Link from 'next/link';
import React from 'react';
interface ISmoothLink {
  href: string;
  className?: string;
  scrollPosition?: ScrollLogicalPosition;
  children: React.ReactNode;
}
const SmoothLink = ({ children, href, className, scrollPosition = 'start' }: ISmoothLink) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget?.href;
    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ block: scrollPosition, behavior: 'smooth' });
  };
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default SmoothLink;
