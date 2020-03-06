export default class Generator {
	private i = 0;

	getNewString(): string {
		return this.getNewNumber().toString(36);
	}

	getNewNumber(): number {
		return this.i++;
	}
}
