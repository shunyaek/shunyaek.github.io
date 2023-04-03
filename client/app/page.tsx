import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "./page.module.css"

export default function Home() {
  return (
    <section className={styles.logo}>
      <Image
        src="/SE_Logo.svg"
        alt="shunyaek Logo"
        width={540}
        height={200}
        priority
      />
    </section>
  )
}
