import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useAppContext } from '../contexts/AppContext';

const PrintTopWord = (words) => {
	const numWords = 10;

	if (words.length === 0) {
		return <></>;
	}

	return (
		<>
			<h4>Top Words:</h4>
			<Table>
				<thead>
					<tr>
						<th>Word</th>
						<th>Counts</th>
					</tr>
				</thead>
				<tbody>
					{words.slice(0, numWords).map((x) => {
						return (
							<tr key={x[0]}>
								<td>{x[0]}</td>
								<td>{x[1]}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

const ResultsStatus = () => {
	const { state } = useAppContext();

	if (state.data.isRequesting) {
		return <></>;
	}

	return (
		<Container fluid>
			<Row>
				<Col>
					{state.data !== null &&
					state.data.wordsCount !== null &&
					state.data.wordsCount !== undefined ? (
						<h4>{`Words count: ${state.data.wordsCount}`}</h4>
					) : null}
				</Col>
				<Col>{PrintTopWord(state.data.words)}</Col>
			</Row>
		</Container>
	);
};

export default ResultsStatus;
