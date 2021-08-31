import Link from 'next/link';
import { Container } from 'components/Container';
import { ButtonWrapper, Button } from 'components/Button';
import { H1 } from 'components/Heading';

export default function Home() {
	return (
		<Container>
			<H1>Next.js CSR, SSR Example</H1>
			<ButtonWrapper>
				<Link passHref={true} href="/csr">
					<Button>Client-side rendering</Button>
				</Link>
				<Link passHref={true} href="/ssr">
					<Button>Server-side rendering</Button>
				</Link>
			</ButtonWrapper>
		</Container>
	);
}
