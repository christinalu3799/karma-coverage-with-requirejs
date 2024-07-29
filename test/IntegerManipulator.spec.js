define(['IntegerManipulator'], (IntegerManipulator) => {
    describe('IntegerManipulator', () => {
        let manipulator;

        beforeEach(function () {
            manipulator = new IntegerManipulator();
        });

        it('should add two integers', function () {
            expect(manipulator.add(1, 2)).toBe(3);
            expect(manipulator.add(-1, 2)).toBe(1);
            expect(manipulator.add(0, 0)).toBe(0);
        });

        it('should subtract the second integer from the first', function () {
            expect(manipulator.subtract(5, 3)).toBe(2);
            expect(manipulator.subtract(2, 5)).toBe(-3);
            expect(manipulator.subtract(0, 0)).toBe(0);
        });

        it('should multiply two integers', function () {
            expect(manipulator.multiply(3, 4)).toBe(12);
            expect(manipulator.multiply(-2, 3)).toBe(-6);
            expect(manipulator.multiply(0, 5)).toBe(0);
        });

        it('should divide the first integer by the second', function () {
            expect(manipulator.divide(10, 2)).toBe(5);
            expect(manipulator.divide(9, 3)).toBe(3);
            expect(manipulator.divide(5, 0)).toBeUndefined();
        });

        it('should find the remainder of the division of the first integer by the second', function () {
            expect(manipulator.remainder(10, 3)).toBe(1);
            expect(manipulator.remainder(10, 2)).toBe(0);
            expect(manipulator.remainder(5, 0)).toBeNaN();
        });
    });
});
