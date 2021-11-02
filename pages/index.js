import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

const Home = () => {

  return (
    <div className="container">
      <Head>
        <title>Movies By Nik - Find Your Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-lg-12">
          <Header></Header>
        </div>
      </div>


      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to This Movies Demo
        </h1>

        <p className={styles.description}>
          A small demo of Next.Js using Okta
        </p>
      </main>

      <footer className={styles.footer}>
        A small tutorial written by&nbsp;<a target="_blank" rel="noreferrer" href="http://profile.fishbowlllc.com/">Nik Fisher</a>
        &nbsp;using&nbsp;<a target="_blank" rel="noreferrer" href="https://nextjs.org">Next.js</a> 
        &nbsp;powered by&nbsp;<a target="_blank" rel="noreferrer" href="https://www.okta.com/">Okta</a>.
      </footer>
    </div>
  )
}

export default Home
