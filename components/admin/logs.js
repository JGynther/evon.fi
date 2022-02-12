import { useState, useEffect } from "react";
import { supabase } from "@lib/supabase";

import Spinner from "@components/spinner";

export default function Logs() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setData(null);
    setFilteredData(null);

    const { data, error } = await supabase
      .from("admin_logs")
      .select()
      .order("id", { ascending: false });

    setData(data);
    setFilteredData(data);
    setUpdated(new Date().toLocaleTimeString());
  };

  return (
    <>
      <Header
        data={data}
        filteredData={filteredData}
        getData={getData}
        setFilteredData={setFilteredData}
      />
      <Table data={filteredData} />
      <Footer data={data} filteredData={filteredData} updated={updated} />
    </>
  );
}

function Header({ data, filteredData, setFilteredData, getData }) {
  return (
    <>
      <div className="h-12 flex flex-none items-center justify-between border-b border-gray-700 px-4">
        <div className="tracking-wider">Admin logs</div>
      </div>
      <HeaderRows
        data={data}
        filteredData={filteredData}
        getData={getData}
        setFilteredData={setFilteredData}
      />
    </>
  );
}

function Search({ data, setFilteredData }) {
  const [search, setSearch] = useState("event");

  const handleSearch = (e, attribute) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = data.filter((row) => {
      return JSON.stringify(row[attribute])?.search(value) !== -1;
    });
    setFilteredData(result);
  };

  const handleAttributeChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex gap-3 items-center bg-gray-700 text-xs tracking-wider py-1 px-4 rounded transition shadow">
      Search{" "}
      <select
        selected="event"
        onChange={(e) => handleAttributeChange(e)}
        className="appearance-none bg-gray-600 hover:bg-gray-500 cursor-pointer shadow rounded text-center py-1 px-1 transition focus:outline-none"
      >
        <option value="event">event</option>
        <option value="email">email</option>
        <option value="content">content</option>
      </select>
      <input
        type="search"
        className="bg-gray-800 rounded px-2 py-1 outline-none ring-indigo-500"
        onChange={(e) => handleSearch(e, search)}
      />
    </div>
  );
}

function Footer({ data, filteredData, updated }) {
  return (
    <div className="h-10 px-4 flex flex-none justify-between items-center border-t border-gray-700 bg-gray-800 text-xs text-white text-opacity-60 tracking-wider">
      <div>
        {data ? (
          `Showing ${filteredData?.length} out of ${data?.length} logs`
        ) : (
          <Spinner size="w-3 h-3" />
        )}
      </div>
      <div>Last updated: {updated}</div>
    </div>
  );
}

function HeaderRows({ data, filteredData, setFilteredData, getData }) {
  const refresh = () => getData();
  return (
    <>
      <div className="h-12 flex flex-none gap-4 justify-between items-center border-b border-gray-700 px-4 bg-gray-800">
        <button
          className="flex gap-2 items-center bg-gray-700 hover:bg-gray-600 text-xs tracking-wider py-2 px-4 rounded transition shadow"
          onClick={refresh}
        >
          {filteredData === null && <Spinner size="w-3 h-3" />} Refresh logs
        </button>
        <Search data={data} setFilteredData={setFilteredData} />
      </div>
      <div className="flex bg-gray-800 border-b border-gray-700 divide-x-[1px] divide-gray-700">
        <Cell size="w-52">timestamp</Cell>
        <Cell size="w-52">event</Cell>
        <Cell size="w-52">email</Cell>
        <Cell>content</Cell>
      </div>
    </>
  );
}

function Table({ data }) {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      <div className="h-full divide-y-[1px] divide-gray-700">
        {data &&
          data.map((row) => (
            <div
              key={row.id}
              className="flex hover:bg-gray-800 transition cursor-pointer divide-x-[1px] divide-gray-700"
            >
              <Cell size="w-52" textColor="text-indigo-500">
                {new Date(row.created_at).toISOString()}
              </Cell>
              <Cell size="w-52">{row.event}</Cell>
              <Cell size="w-52">{row.email}</Cell>
              <Cell>{row.content && JSON.stringify(row.content)}</Cell>
            </div>
          ))}
        {!data && (
          <div className="h-full flex items-center justify-center">
            <Spinner size="w-10 h-10" />
          </div>
        )}
      </div>
    </div>
  );
}

function Cell({ size, textColor = "text-white", children }) {
  return (
    <div
      className={`px-4 py-2 ${textColor} ${size} flex-none text-opacity-80 text-xs font-mono whitespace-nowrap`}
    >
      {children}
    </div>
  );
}
