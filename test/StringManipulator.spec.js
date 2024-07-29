define(['StringManipulator'], (StringManipulator) => {
    let manipulator;

    beforeEach(function () {
        manipulator = new StringManipulator();
    });

    it('should return the length of a string', function () {
        expect(manipulator.getLength('Hello World')).toBe(11);
        expect(manipulator.getLength('')).toBe(0);
        expect(manipulator.getLength('A')).toBe(1);
    });

    it('should convert a string to uppercase', function () {
        expect(manipulator.toUpperCase('Hello World')).toBe('HELLO WORLD');
        expect(manipulator.toUpperCase('hello')).toBe('HELLO');
        expect(manipulator.toUpperCase('')).toBe('');
    });

    // it('should convert a string to lowercase', function () {
    //     expect(manipulator.toLowerCase('Hello World')).toBe('hello world');
    //     expect(manipulator.toLowerCase('HELLO')).toBe('hello');
    //     expect(manipulator.toLowerCase('')).toBe('');
    // });

    it('should reverse a string', function () {
        expect(manipulator.reverseString('Hello World')).toBe('dlroW olleH');
        expect(manipulator.reverseString('')).toBe('');
        expect(manipulator.reverseString('A')).toBe('A');
    });

    it('should concatenate two strings', function () {
        expect(manipulator.concatenate('Hello', ' World')).toBe('Hello World');
        expect(manipulator.concatenate('', 'World')).toBe('World');
        expect(manipulator.concatenate('Hello', '')).toBe('Hello');
    });
});
