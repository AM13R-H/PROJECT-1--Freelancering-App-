const styleStat = {
    primary: "bg-primary-100 text-primary-900",
    green: "bg-green-100 text-green-900",
    blue: "bg-blue-100 text-blue-900"
}

function Stat({color, title, value, icon }) {
  return (
    <div className="border rounded-lg p-5 flex flex-col gap-3 items-center">
      <div className={`border w-fit rounded-full p-3 ${styleStat[color]}`}>
        {icon}
      </div>
      <span className="text-center">
        <h1 className="text-3xl tracking-widest font-extrabold ">{title}</h1>
        <p className="text-2xl">{value}</p>
      </span>
    </div>
  );
}

export default Stat;
