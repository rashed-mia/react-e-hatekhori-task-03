import propTypes from 'prop-types';
export default function CarDetails({ car }) {
    return (
        <div className="border p-4 rounded-lg">
            <h2 className="font-bold text-xl py-2">{car.title}</h2>
            <p><span className="font-semibold text-md pr-1">Brand:</span>{car.brand}</p>
            <p><span className="font-semibold text-md pr-1">Year:</span>{car.year}</p>
            <p><span className="font-semibold text-md pr-1">Price:</span>{car.price}</p>
            <p><span className="font-semibold text-md pr-1">Premium:</span>{car.isPremium ? 'Yes' : 'No'}</p>
        </div>
    );
}
CarDetails.propTypes = {
    car: propTypes.object.isRequired 
    };