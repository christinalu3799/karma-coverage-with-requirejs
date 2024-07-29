define(() => {
    return class IntegerManipulator {
        // Method to add two integers
        add(a, b) {
            return a + b;
        }

        // Method to subtract the second integer from the first
        subtract(a, b) {
            return a - b;
        }

        // Method to multiply two integers
        multiply(a, b) {
            return a * b;
        }

        // Method to divide the first integer by the second
        // Returns 'undefined' if the second integer is zero
        divide(a, b) {
            if (b === 0) {
                return undefined;
            }
            return a / b;
        }

        // Method to find the remainder of the division of the first integer by the second
        remainder(a, b) {
            return a % b;
        }
    };
});
