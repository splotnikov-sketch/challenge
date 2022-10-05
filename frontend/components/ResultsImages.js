import Carousel from 'react-bootstrap/Carousel';
import { useAppContext } from '../contexts/AppContext';

const ResultsImages = () => {
	const { state } = useAppContext();

	if (state.data.isRequesting) {
		return <div>Loading...</div>;
	}

	if (
		state.data.images === null ||
		state.data.images === undefined ||
		state.data.images.length === 0
	) {
		return <div>No images on the page for that url</div>;
	}

	return (
		<Carousel>
			{state.data.images.map((x, index) => {
				const caption = `Slide # ${index}`;

				return (
					<Carousel.Item key={index}>
						<img src={x} alt={caption} width={900} height={500} />
						<Carousel.Caption>
							<h3>{caption}</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default ResultsImages;
