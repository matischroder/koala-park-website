import Image from "next/image";
import { fullAddress, mapsUrl, site, smsHref, telHref } from "@/content/site";
import { formatTime, hoursLine } from "@/lib/hours";
import { ChatIcon, PhoneIcon, PinIcon } from "./Icons";
import { OpenNow } from "./OpenNow";
import aerial from "../../public/photos/aerial.jpg";
import shopfront from "../../public/photos/shopfront.jpg";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="defer-render py-16 sm:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-script text-3xl text-teal-dark">find us</p>
          <h2 id="visit-title" className="mt-1 font-display text-4xl leading-none font-semibold sm:text-5xl">
            {site.address.street}, Burleigh Heads.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            In the Koala Park shopping strip just off the Gold Coast Highway, with a convenience store, a hairdresser and a coffee
            shop in the same complex. Burleigh Heads National Park and Tallebudgera Creek beach are a short stroll away.
          </p>

          <div className="mt-8 rounded-3xl bg-paper-2 p-6">
            <p className="font-display text-3xl font-semibold">{hoursLine}</p>
            <div className="mt-2">
              <OpenNow />
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              Last wash at {formatTime(site.lastWash)} please — if you also need to dry, start your washer by{" "}
              {formatTime(site.lastWashIfDrying)}.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li>
              <a href={telHref} className="flex h-full flex-col gap-2 rounded-2xl p-4 ring-2 ring-ink/15 hover:bg-mint">
                <PhoneIcon className="size-5" />
                <span className="text-sm text-ink-soft">Call</span>
                <span className="font-bold">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={smsHref} className="flex h-full flex-col gap-2 rounded-2xl p-4 ring-2 ring-ink/15 hover:bg-mint">
                <ChatIcon className="size-5" />
                <span className="text-sm text-ink-soft">Text</span>
                <span className="font-bold">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col gap-2 rounded-2xl p-4 ring-2 ring-ink/15 hover:bg-mint">
                <PinIcon className="size-5" />
                <span className="text-sm text-ink-soft">Directions</span>
                <span className="font-bold">{fullAddress}</span>
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-ink-soft">
            Follow along on{" "}
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
              Facebook
            </a>{" "}
            and{" "}
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
              Instagram
            </a>
            .
          </p>
        </div>

        <div className="grid content-start gap-3">
          <div className="overflow-hidden rounded-3xl">
            <Image src={shopfront} alt="Koala Park shopping strip with the teal LAUNDROMAT sign" sizes="(min-width: 1024px) 560px, 92vw" placeholder="blur" className="w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image src={aerial} alt="Aerial view showing the laundromat's location near Tallebudgera Creek and Burleigh Heads" sizes="(min-width: 1024px) 560px, 92vw" placeholder="blur" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
