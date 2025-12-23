import { useState } from "react";
import { allStat } from "../lib/apicalls";
import StatCard from "./StatCard";


const StatsGrid = () => {
const [total, settotal] = useState("__")
const [pending, setpending] = useState("__")
const [resolved, setresolved] = useState("__")
const [progess, setprogress] = useState("__")


 const getStat = async()=>{
   let data = await allStat()
  // console.log(data)
  settotal(data.total)
  setpending(data.pending)
  setresolved(data.resolved)
  setprogress(data.inProgress)
  
 }

 getStat();


  return (
    <div className="grid md:grid-cols-4 gap-6">
      <StatCard title="Total Reports" value={total}color="#1E3A8A" />
      <StatCard title="Pending" value={pending} color="#FACC15" />
      <StatCard title="In Progress" value={progess} color="#3B82F6" />
      <StatCard title="Resolved" value={resolved}color="#10B981" />
    </div>
  );
};

export default StatsGrid;