import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withReduxStore from '../lib/with-redux-store'

import Header from "../src/components/Header"
import Notification from '../src/components/Notification'
import { Container } from "@material-ui/core"


class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <Container maxWidth="md">
      <Header />
      <main className="layout">{children}</main>
      <Notification />
    </Container>
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)