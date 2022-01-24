import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
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
        <div className='m-8 h-24 text-3xl text-white flex items-center px-8 rounded-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500'> Create Collection</div>
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
