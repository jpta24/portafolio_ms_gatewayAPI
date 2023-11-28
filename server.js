const app = require('./app');

const PORT = process.env.PORT || 5008;

app.listen(PORT, () => {
	console.log(
		`GatewayAPI Server listening on http://localhost:${PORT}`
	);
});
