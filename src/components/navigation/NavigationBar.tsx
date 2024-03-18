import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLinkItem from '@/components/navigation/NavLinkItem';

const NavItems = [
  {
    text: 'Games',
    path: '/collection/games'
  },
  {
    text: 'Movies',
    path: '/collection/movies'
  },
  {
    text: 'TV Shows',
    path: '/collection/tv-shows'
  }
];


export function NavigationBar() {
  return (
    <nav className='w-full py-4'>
      <ul className='flex gap-4'>
        {NavItems.map(item => (
          <NavLinkItem
            key={item.path}
            href={item.path}
            text={item.text}
          />
        ))}
      </ul>
    </nav>
  );
}