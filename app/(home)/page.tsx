import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) redirect("/?month=01");

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboards</h1>
          <TimeSelect />
        </div>

        <div className="grid-cols-[2fr,1fr] grid">
          <SummaryCards month={month} />
        </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-6">
          <TransactionsPieChart />
        </div>
      </div>
    </>
  );
};

export default Home;
