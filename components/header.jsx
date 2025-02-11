import { SignedIn, UserButton } from '@clerk/nextjs';
import { SignedOut, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Stars } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { FileText } from 'lucide-react';
import { PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();
  console.log("checkuser:", checkUser);
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className='hidden md:block'>Industry Insights</span>
              </Button>
            </Link>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <Stars className="h-4 w-4" />
                  <span className='hidden md:block'>Growth tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/resume"} className='flex items-center gap-2'>
                    <FileText className="h-4 w-4" />
                    <span >Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem><Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                  <PenBox className="h-4 w-4" />
                  <span >Cover letter</span>
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem><Link href={"/interview"} className='flex items-center gap-2'>
                  <FileText className="h-4 w-4" />
                  <span >Interview Prep</span>
                </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button >
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                }
              }}
              afterSignOutUrl='/'
            />
          </SignedIn>

        </div>
      </nav>
    </header>
  );
};

export default Header;
