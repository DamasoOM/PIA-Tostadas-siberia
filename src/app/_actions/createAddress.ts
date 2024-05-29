//NextJS
'use server';


const createAddress = async (formData: FormData) => {
	const alias = formData.get('alias');
	const street = formData.get('street');
	const betweenStreets = formData.get('between-streets');
	const number = formData.get('number');
	const indoorNumber = formData.get('indoor-number');
	const colony = formData.get('colony');
	const city = formData.get('city');
	const state = formData.get('state');
	const postalCode = formData.get('postal-code');
	const references = formData.get('references');

	// Submit all to data base
};


export default createAddress;
