define(() => {
    return class StringManipulator {
        // Method to return the length of a string
        getLength(str) {
            return str.length;
        }

        // Method to convert a string to uppercase
        toUpperCase(str) {
            return str.toUpperCase();
        }

        // Method to convert a string to lowercase
        toLowerCase(str) {
            return str.toLowerCase();
        }

        // Method to reverse a string
        reverseString(str) {
            return str.split('').reverse().join('');
        }

        // Method to concatenate two strings
        concatenate(str1, str2) {
            return str1 + str2;
        }
    };
});
