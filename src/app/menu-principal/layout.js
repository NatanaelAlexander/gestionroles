import Aside from "@/components/menu-principal/Aside"
export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="flex">
        <Aside className=""/>
        {children}
      </section>
    )
  }