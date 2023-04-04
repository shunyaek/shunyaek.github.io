import './globals.css'
import Head from 'next/head'
import Image from 'next/image'
import styles from "./page.module.css"

export const metadata = {
  title: 'shunyaek',
  description: 'shunyaek.se',
}

type ContactIconType = {
  type: "Chat" | "E-Mail";
}

type ContactButtonType = {
  type: "Chat" | "E-Mail";
  title: string;
  path: string;
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contactButtons: ContactButtonType[] = [
    { type: "Chat", title: "+91 781 888 8887", path: "https://wa.me/message/HDI26CHRSLLUP1" },
    { type: "E-Mail", title: "hi@shunyaek.se", path: "mailto:hi@shunyaek.se" },
  ];
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a4a4a" />
      </Head>
      <body>
        <main>
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
            <section className={styles.contact}>
              {contactButtons.map((tab: ContactButtonType) => {
                return (<a key={tab.path} target='_blank' href={tab.path}>
                  <ContactIcon type={tab.type} />
                  {tab.title}
                </a>);
              })}
            </section>
          </article>
          {children}
        </main>
      </body>
    </html>
  )
}
