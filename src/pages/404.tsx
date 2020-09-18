import React, { Component } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from "../components/head"
import Layout from '../components/layout';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Head title="404"/>
                    <h1>Page not found</h1>
                    <p><a href="/"> Head home </a></p>
                </Layout>
            </div>
        )
    }
}