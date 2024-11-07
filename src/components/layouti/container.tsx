export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-50 overflow-hidden">
      <div className="bg-white min-h-screen lg:mx-16 sm:mx-7 shadow-lg">
        <div className="px-7 md:px-16 ">{children}</div>
      </div>
    </div>
  );
}
