import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useAppContext } from '../contexts/AppContext';

const Search = () => {
	const { state, getData } = useAppContext();
	const refUrl = useRef('');

	const handleGetData = async (url) => {
		if (url == null) {
			return;
		}
		await getData(url);
	};

	return (
		<Container fluid className='p-3'>
			<Row>
				<Col>
					<Form>
						<Form.Group className='mb-3' controlId='formUrl'>
							<Form.Label>Url</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Url'
								ref={refUrl}
							/>
							{state.data.errors && (
								<p className='text-danger'>
									{state.data.errors}
								</p>
							)}
						</Form.Group>
						<Button
							variant='outline-primary'
							disabled={state.data.isRequesting}
							onClick={
								!state.data.isRequesting
									? () => handleGetData(refUrl.current.value)
									: null
							}
						>
							Get images
						</Button>{' '}
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
