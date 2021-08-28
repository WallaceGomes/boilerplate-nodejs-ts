class HttpError extends Error {
	public code: number = 500;

	constructor(message: string, errorCode: number) {
		super(message);
		this.code = errorCode;
	}
}
