import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../components/Search';
import ResultsImages from '../components/ResultsImages';
import ResultsStatus from '../components/ResultsStatus';

export default function Home() {
	return (
		<Container fluid className='p-3'>
			<Row>
				<Search />
			</Row>
			<Row md={2} className='p-3'>
				<ResultsImages />
			</Row>
			<Row className='p-3'>
				<ResultsStatus />
			</Row>
		</Container>
	);
}
