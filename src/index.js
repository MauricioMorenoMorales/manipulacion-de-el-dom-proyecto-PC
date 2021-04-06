/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app'
const appNode = document.getElementById('app')
appNode.addEventListener('click', event => {
	if (event.target.nodeName === 'H2') {
		window.alert('Hola mundo')
	}
})
// Intl
// Formato a fechas
// Formato a monedas
const formatPrice = price => {
	const newPrice = new window.Intl.NumberFormat('en-EN', {
		style: 'currency',
		currency: 'USD',
	}).format(price)
	return newPrice
}

//web api
//Conectarnos al servidor
//procesar la respuesta y convertirla en json
// JSON -> Data -> Renderizar info en el broser
window
	.fetch(`${baseUrl}/api/avo`)
	.then(response => response.json())
	.then(responseJson => {
		const todosLosItems = []
		responseJson.data.forEach(item => {
			//Crear imagen
			const imagen = document.createElement('img')
			imagen.src = baseUrl + item.image
			imagen.className =
				'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
			//Crear titulo
			const title = document.createElement('h2')
			title.textContent = item.name
			// title.style = "font-size: 2rem"
			title.className = 'text-lg'
			//Crear precio
			const price = document.createElement('div')
			price.textContent = formatPrice(item.price)
			price.className = 'text-gray-600'
			//Crear container
			const container = document.createElement('div')
			container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'
			container.append(imagen, title, price)
			todosLosItems.push(container)
		})
		appNode.append(...todosLosItems)
	})
