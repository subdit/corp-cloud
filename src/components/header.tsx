import Link from 'next/link';
export default function Header() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='/performance'>Performance</Link>
      <Link href='/reliability'>Reliabilty</Link>
      <Link href='/scale'>Scale</Link>
    </div>
  );
}
