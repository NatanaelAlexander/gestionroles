import Aside from "@/components/menu-principal/Aside"
export default function DashboardLayout({
  children,
}) {
  return (
    <section className="flex">
      <div className="">
        <Aside className="fixed" />
      </div>
      {children}
    </section>
  )
}