export const dateFormatter = (date)=>{

const d = new Date(date);

return d.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  dateStyle: "medium",
  timeStyle: "short"
});
}