import Occupancy from "../components/Occupancy";

const Dashboard = () => {
  return (
    <main className="px-6 col-start-2 row-start-2">
      <div className="flex h-36 col-span-4">
        <Occupancy />
      </div>
    </main>
  )
}

export default Dashboard;
