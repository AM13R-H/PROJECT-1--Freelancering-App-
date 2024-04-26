function Table({ children }) {
  return <table className="m-auto w-4/5 ">{children}</table>;
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead className="flex bg-primary-900  rounded-lg">{children}</thead>
  );
}

function TableBody({ children }) {
  return <tbody className="flex flex-col  ">{children}</tbody>;
}

function TableRow({ children }) {
  return (
    <tr className="flex rounded-lg items-center text-secondary-0 bg-secondary-100 h-fit border ">
      {children}
    </tr>
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
