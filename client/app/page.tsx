import Image from 'next/image'
import styles from "./page.module.css"

type ContactIconType = {
  type: "Chat" | "E-Mail";
}

const ContactIcon = (props: ContactIconType) => {
  const { type } = props;
  if (type === "Chat") {
    return (
      <div>{"💬"}</div>
    );
  } else if (type === "E-Mail") {
    return (
      <div>{"✉️"}</div>
    );
  } else {
    return (
      <div>{"🏡"}</div>
    );
  }
}

type ContactButtonType = {
  type: "Chat" | "E-Mail";
  title: string;
  path: string;
}

export default function Home() {
  const contactButtons: ContactButtonType[] = [
    { type: "Chat", title: "+91 781 888 8887", path: "https://wa.me/message/HDI26CHRSLLUP1" },
    { type: "E-Mail", title: "hi@shunyaek.se", path: "mailto:hi@shunyaek.se" },
  ];
  return (
    <>
      <article className={styles.halfwidthpane}>
        <section className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="shunyaek Logo"
            width={540}
            height={200}
            priority
          />
        </section>
        {/* <section className={styles.bitstomagic}>bits to magic</section> */}
        <section className={styles.contact}>
          {contactButtons.map((tab: ContactButtonType) => {
            return (<a key={tab.path} target='_blank' href={tab.path}>
              <ContactIcon type={tab.type} />
              {tab.title}
            </a>);
          })}
        </section>
      </article>
    </>
  )
}
