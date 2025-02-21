import { SidebarProvider } from "@/components/ui/sidebar";
import { Homenavbar } from "@/modules/home/ui/components/home-navbar";
import { HomeSidebar } from "../components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}
export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className='container'>
        <section className='w-full  bg-orange-300'>
          <Homenavbar />
        </section>
        <section className='flex min-h-screen pt-[4rem]'>
          <HomeSidebar />
          <main className='flex-1 overflow-y-auto'>{children}</main>
        </section>
      </div>
    </SidebarProvider>
  );
};
