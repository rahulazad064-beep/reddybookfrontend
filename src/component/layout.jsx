import DesktopSidebar from "./dasktopBar";
import MarketBoard from "./marketBoard";

export default function Layout() {
  return (
    <div className="flex">
      <DesktopSidebar />
      <main className="flex-1">
        <MarketBoard/>
      </main>
    </div>
  );
}
