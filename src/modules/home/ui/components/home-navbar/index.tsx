import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../search-input";
import { AuthButton } from "@/modules/auth/ui/component/auth-button";

export const Homenavbar = () => {
  return (
    <>
      <nav className='fixed top-0 left-0 w-full h-16 bg-white flex items-center px-2 pr-5 z-50'>
        <div className='flex items-center gap-4 w-full'>
          {/* menu and logo section */}
          <div className='flex items-center flex-shrink-0'>
            <SidebarTrigger />
            <Link href='/'>
              <div className='p-4 flex items-center gap-2 '>
                <Image src='/logo.svg' height={50} width={50} alt='logo' />
                <p className='text-xl font-semibold tracking-tighter'>
                  youtube clone
                </p>
              </div>
            </Link>
          </div>
          {/* search bar section */}
          <div className='flex-1 flex justify-center max-w-[720px] mx-auto'>
            <SearchInput />
          </div>

          {/* auth section */}
          <div className='flex-shrink-0 items-center flex gap-4'>
            <AuthButton />
          </div>
        </div>
      </nav>
    </>
  );
};
