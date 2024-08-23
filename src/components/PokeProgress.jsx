import ProgressBar from 'react-bootstrap/ProgressBar';

const PokeProgress = ({ name, value }) => {
	return (
		<div>
			<p className="fw-bold text-uppercase">
				{name}: {value}
			</p>
			<ProgressBar
				variant="success"
				animated
				now={Number(value)}
			/>
		</div>
	);
};

export default PokeProgress;
