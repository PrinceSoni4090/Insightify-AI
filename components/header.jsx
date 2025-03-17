import { SignedIn, UserButton } from '@clerk/nextjs';
import { SignedOut, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { checkUser } from '@/lib/checkUser';
import { ClipboardEdit } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center gap-3">
            <Image
              src="/logo5.svg"
              alt="logo"
              width={40}
              height={30}
              className="h-9 py-1 w-auto object-contain"
            />
            <h1 className="hidden text-2xl font-bold sm:inline-block">Insightify AI</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>
            <Link href="/interview">
              <Button variant="outline">
                <ClipboardEdit className="h-4 w-4" />
                <span className="hidden md:block">Mock Interview</span>
              </Button>
            </Link>
          </SignedIn>

          <ThemeToggle />

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold',
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
