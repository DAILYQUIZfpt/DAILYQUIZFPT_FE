import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar></NavBar>
      <main className="pt-24">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default MarketingLayout;
