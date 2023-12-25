"use client"

import Image from 'next/image'
import styles from "./page.module.css"
import { VscMail, VscCommentDiscussion, VscHome, VscHeart } from "react-icons/vsc"
import { useEffect, useState } from 'react'

type ContactIconType = {
  type: "Chat" | "E-Mail";
}

const ContactIcon = (props: ContactIconType) => {
  const { type } = props;
  if (type === "Chat") {
    return (
      <VscCommentDiscussion />
    );
  } else if (type === "E-Mail") {
    return (
      <VscMail />
    );
  } else {
    return (
      <VscHome />
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
    { type: "E-Mail", title: "01@shunyaek.se", path: "mailto:01@shunyaek.se" },
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)
  const [textAtCursor, setTextAtCursor] = useState<string>("")
  const [completeText, setCompleteText] = useState<string>("Hello, world!")
  const [shouldTypeReverse, setShouldTypeReverse] = useState<boolean>(false)
  useEffect(() => {
    const textList = [
      "Product Engineering",
      "Back-End Engineering",
      "Design-first Approach",
      "CI/CD Pipelines",
      "Front-End Engineering",
      "Database Design",
      "Scalable Architecture",
      "Application Security",
      "Design Systems",
      "Cloud Adoption",
    ]
    if (textAtCursor.length < completeText.length && !shouldTypeReverse) {
      setTimeout(() => {
        setTextAtCursor(textAtCursor + completeText[textAtCursor.length])
      }, Math.random() * 150)
    }
    if (textAtCursor.length === completeText.length) {
      setTimeout(() => {
        setShouldTypeReverse(true)
      }, 600)
    }
    if (textAtCursor.length <= completeText.length && shouldTypeReverse) {
      setTimeout(() => {
        setTextAtCursor(textAtCursor.slice(0, -1))
      }, Math.random() * 100)
    }
    if (textAtCursor.length === 0 && shouldTypeReverse) {
      setShouldTypeReverse(false)
      setCurrentTextIndex(previousIndex => (previousIndex + 1) % textList.length)
      setCompleteText(textList[currentTextIndex])
    }
  }, [completeText, currentTextIndex, shouldTypeReverse, textAtCursor])
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
        <section className={styles.contact}>
          {contactButtons.map((tab: ContactButtonType) => {
            return (<a key={tab.path} target='_blank' href={tab.path}>
              <ContactIcon type={tab.type} />
              {tab.title}
            </a>);
          })}
        </section>
        <section className={styles.bitstomagic}>
          {/* <h1 className={styles.domains}><VscHeart /></h1> */}
          <h1 className={styles.typewriter}>{textAtCursor}<span className={styles.cursor}>{"|"}</span></h1>
        </section>
        {/* <section className={styles.bitstomagic}>
          <h1 className={styles.domains}><VscHeart /></h1>
          <h1 className={styles.domains}>product engineering</h1>
        </section> */}
      </article>
    </>
  )
}
