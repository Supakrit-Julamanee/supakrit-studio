import { contact } from "@/content/profile";
import { Section } from "./section";

const [email, ...others] = contact.links;

export function Contact() {
  return (
    <Section id="contact" title="ติดต่อ" titleEn="Contact">
      <div className="lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-x-8">
        <p className="lg:col-span-9 lg:col-start-4" lang="en">
          <a
            href={email.href}
            className="link font-display text-mail md:font-light [overflow-wrap:anywhere]"
          >
            {email.text}
          </a>
        </p>
        <p className="mt-5 text-label lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:mt-0">
          <span className="block text-graphite">ตำแหน่งที่สนใจ</span>
          <span lang="en">{contact.seeking}</span>
        </p>

        <dl className="mt-10 border-b border-pencil lg:col-span-9 lg:col-start-4 lg:mt-14">
          {others.map(({ label, text, href }) => (
            <div
              key={label}
              className="border-t border-pencil py-4 sm:grid sm:grid-cols-[7rem_1fr] sm:items-baseline"
            >
              <dt className="text-label text-graphite">{label}</dt>
              <dd lang="en">
                <a
                  href={href}
                  className="link font-display text-lead [overflow-wrap:anywhere]"
                  {...(href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {text}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
