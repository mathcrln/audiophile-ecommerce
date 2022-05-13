import Head from 'next/head';
import { Container, MainLayout } from 'components/layouts';
import { BrandHighlight } from 'components/common/BrandHighlight';
import { AllCollections } from 'components/common/Callout';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Speakers | Audiophile E-Commerce</title>
				<meta name="description" content="Find the best audio gear you need." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<MainLayout>
					<Container>
						<AllCollections styles="margin-top: 100px;" />
						<BrandHighlight />
					</Container>
				</MainLayout>
			</main>
		</div>
	);
}
