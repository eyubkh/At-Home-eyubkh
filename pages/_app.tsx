import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Sidetrade Shop by Ayoub</title>
				<meta
					name="description"
					content="The SideTrade shop create by Ayoub to buy plenty of products for your orders to cash business."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
			</Head>
			<Sidebar>
				<Component {...pageProps} />
			</Sidebar>
		</>
	);
}
export default MyApp;
