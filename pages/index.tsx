import Head from 'next/head';
import { MainLayout, Container } from 'components/layouts';
import Hero from 'components/pages/Home/Hero';
import { AllCollections } from 'components/common/Callout';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Audiophile E-Commerce</title>
				<meta name="description" content="Find the best audio gear you need." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainLayout>
				<Hero />
				<Container>
					<AllCollections styles="margin-top: 100px;" />
				</Container>
			</MainLayout>
		</div>
	);
}
