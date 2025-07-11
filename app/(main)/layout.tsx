import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { SocketProvider } from "@/components/providers/socket-provider";

const Mainlayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    
  return (
    <SocketProvider>
    <div className="h-full">
        <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar/>
        </div>
    <main className="md:pl-[72px] h-full">
    {children}
    </main>  
    </div>
    </SocketProvider>
  )
}

export default Mainlayout