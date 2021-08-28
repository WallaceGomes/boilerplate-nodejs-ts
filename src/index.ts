import app from './app';

app.listen(process.env.PORT || 3000, (): void => {
	console.log('Server running...');
});
