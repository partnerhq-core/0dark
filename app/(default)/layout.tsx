export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-screen overflow-y-scroll">{children}</div>
}
