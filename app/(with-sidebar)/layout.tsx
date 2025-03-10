import CustomSidebar from '../common/CustomSidebar';

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-5">
      <div className='col-span-1'>
        <CustomSidebar />
      </div>
      <main className="w-full col-span-4">
        {children}
      </main>
    </div>
  );
}