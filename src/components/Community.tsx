import Image from "next/image";
import { facilities, reviews } from "@/content/extras";
import chairs from "../../public/photos/interior-5.jpg";
import table from "../../public/photos/folding-table.jpg";
import basket from "../../public/photos/basket-table.jpg";

export function Community() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ink py-16 text-paper sm:py-24">
      <div className="container-site">
        <p className="font-script text-3xl text-teal">clean, friendly &amp; well loved</p>
        <h2 id="about-title" className="mt-1 max-w-3xl font-display text-4xl leading-none font-semibold sm:text-5xl">
          Not your average laundromat.
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="overflow-hidden rounded-3xl sm:row-span-2">
            <Image src={chairs} alt="Teal and navy chairs and framed chalkboards along the wall" sizes="(min-width: 640px) 33vw, 92vw" placeholder="blur" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl sm:col-span-2">
            <Image src={table} alt="The long timber folding table in front of the washers" sizes="(min-width: 640px) 66vw, 92vw" placeholder="blur" className="aspect-[2/1] h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl sm:col-span-2">
            <Image src={basket} alt="A laundry basket on the folding table, the open front door behind" sizes="(min-width: 640px) 66vw, 92vw" placeholder="blur" className="aspect-[2/1] h-full w-full object-cover" />
          </div>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <li key={f.title} className="border-t-2 border-teal pt-4">
              <h3 className="font-bold">{f.title}</h3>
              <p className="mt-1 text-paper/75">{f.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 font-display text-3xl font-semibold">What our customers say</h3>
        <ul className="mt-6 grid gap-4 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <li key={r.name} className={`rounded-3xl p-6 text-ink ${["bg-sun", "bg-teal", "bg-paper"][i % 3]}`}>
              <blockquote>
                <p className="leading-relaxed">“{r.quote}”</p>
              </blockquote>
              <p className="mt-4 font-bold">— {r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
