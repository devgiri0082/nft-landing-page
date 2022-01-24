import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ShowPhoto from '../components/ShowPhoto'
import Upload from '../components/Upload'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>NFT MarketPlace</title>

      </Head>
      <div className='h-screen w-screen bg-[rgb(40,40,40)]'>
        <Header />
        <Banner />
        <div className='flex  px-20 gap-20'>
          <div className="w-full">
            <Upload />
          </div>
          <div className='w-1/2'>
            <ShowPhoto />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
