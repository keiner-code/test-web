import Aside from "@/containers/dashboard/aside";
import Headers from "@/containers/pages/layouts/Headers";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Headers />
      <div className="flex">
        <div className="w-1/4 overflow-y-auto hide-scrollbar h-[calc(100vh-5rem)]">
          <Aside />
        </div>
        <div className="w-3/4 ml-4">{children}</div>
      </div>
    </>
  );
}
