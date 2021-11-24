import { Title } from "@components/text";

export default function TransactionTable({ data }) {
  // Data is an array containing arrays with [date, name, purchase/sale, amount, price, sum]
  return (
    <section className="grid justify-center overflow-hidden m-5 my-10 text-center">
      <Title>Yhtiön viimeisimmät kaupat</Title>
      <div className="overflow-x-auto rounded">
        <table className="border-2 border-indigo-500">
          <thead className="bg-indigo-500 whitespace-nowrap">
            <tr>
              <th className="px-5 py-2">Päivämäärä</th>
              <th className="px-5 py-2">Tuote</th>
              <th className="px-5 py-2">Osto/myynti</th>
              <th className="px-5 py-2">Määrä</th>
              <th className="px-5 py-2">Kurssi</th>
              <th className="px-5 py-2">Summa</th>
            </tr>
          </thead>
          <tbody className="border-2 border-gray-800">
            {data.map((row, index) => (
              <tr
                key={index}
                className={`whitespace-nowrap ${
                  index % 2 === 0 ? "" : "bg-gray-800"
                }`}
              >
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className={`px-5 py-3 ${
                      index > 1 ? "text-right" : "text-left"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
