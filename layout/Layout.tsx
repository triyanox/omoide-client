import Head from 'next/head'
import { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

type Props = {
  children: React.ReactNode
  title: string
  description: string
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout
