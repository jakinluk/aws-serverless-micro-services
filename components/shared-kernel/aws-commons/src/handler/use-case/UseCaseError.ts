export class UseCaseError {
	constructor(readonly message: string) {}
	getErrorType(): string {
		return this.constructor.name;
	}
}
