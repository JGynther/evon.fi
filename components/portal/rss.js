export default function RSSFeed({ data }) {
  return (
    <section className="flex justify-center mx-5">
      <div className="grid max-w-screen-sm border-2 border-gray-800 rounded">
        <div className="bg-indigo-500 text-center py-2 font-bold">
          <p>KL NYT</p>
          <p className="text-xs font-normal text-opacity-60">
            Lue mitä markkinoilla tapahtuu. Kauppalehti NYT RSS.
          </p>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid py-4 px-3 gap-2 ${
              index % 2 === 0 ? "" : "bg-gray-800"
            }`}
          >
            <span className="flex gap-2 text-xs">
              <p className="text-white text-opacity-60">
                {new Date(item.pubDate).toTimeString().slice(0, 5)}
              </p>
              <p className="uppercase tracking-widest text-indigo-500 ">
                {item.categories[0]}
              </p>
            </span>
            <p className="text-white text-opacity-80 hover:text-opacity-100 hover:underline transition">
              <a href={item.link}>{item.title}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
