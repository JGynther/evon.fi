import { Title } from "@components/text";

export default function Portfolio({ data }) {
  return (
    <section className="grid justify-center overflow-hidden m-5 text-center text-sm">
      <Title>Yhtiön (osake)salkku</Title>
      <div className="overflow-x-auto rounded">
        <table className="border-2 border-indigo-500">
          <thead className="bg-indigo-500 whitespace-nowrap">
            <tr className="">
              <th className="px-5 py-2">Osake</th>
              <th className="px-5 py-2">KPL</th>
              <th className="px-5 py-2">Keskihinta (EUR)</th>
              <th className="px-5 py-2">Hankinta-arvo (EUR)</th>
              <th className="px-5 py-2">Kurssi (EUR)</th>
              <th className="px-5 py-2">Tuotto (%)</th>
              <th className="px-5 py-2">Tuotto (EUR)</th>
              <th className="px-5 py-2">Arvo (EUR)</th>
              <th className="px-5 py-2">Paino (%)</th>
            </tr>
          </thead>
          <tbody className="border-2 border-gray-800">
            {data.map((row, index) => (
              <tr
                key={index}
                className={`
                    whitespace-nowrap 
                    ${index % 2 === 0 ? "" : "bg-gray-800"} 
                    ${index >= data.length - 5 ? "font-bold" : "font-light"}
                  `}
              >
                {row.map(
                  (cell, index) =>
                    index !== 1 && (
                      <td
                        key={index}
                        className={`px-5 py-3 ${
                          index > 1 ? "text-right" : "text-left"
                        }`}
                      >
                        {cell}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-right">* Osakkeiden kurssit viivästettyjä</p>
      <p className="text-right">** USD positiot arvioita euroina</p>
    </section>
  );
}
