import { echo } from '../echo';
describe('echo', () => {
    it('should return the same value that was passed in', () => {
        const input = 'test';
        const result = echo(input);
        expect(result).toBe(input);
    });
    it('should work with numbers', () => {
        const input = 42;
        const result = echo(input);
        expect(result).toBe(input);
    });
    it('should work with objects', () => {
        const input = { key: 'value' };
        const result = echo(input);
        expect(result).toEqual(input);
    });
    it('should work with arrays', () => {
        const input = [1, 2, 3];
        const result = echo(input);
        expect(result).toEqual(input);
    });
});
//# sourceMappingURL=echo.test.js.map