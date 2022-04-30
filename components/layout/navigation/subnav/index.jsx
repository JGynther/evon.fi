export default function SubNav({ children }) {
  return (
    <div className="flex flex-grow justify-center">
      <div className="flex flex-col flex-grow md:flex-grow-0 md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral-700 md:first:border-l md:last:border-r border-neutral-700">
        {children}
      </div>
    </div>
  );
}
