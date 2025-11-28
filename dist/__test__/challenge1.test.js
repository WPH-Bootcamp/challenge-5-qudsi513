"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenge1_1 = require("../challenge1");
describe('Challenge 1 Tests', () => {
    let consoleLogSpy;
    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });
    afterEach(() => {
        consoleLogSpy.mockRestore();
    });
    describe('addBook', () => {
        it('should add a book and log the correct message', () => {
            (0, challenge1_1.addBook)('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
            expect(consoleLogSpy).toHaveBeenCalledWith('Book added: "The Great Gatsby" by F. Scott Fitzgerald (1925)');
        });
    });
    describe('listBooks', () => {
        it('should log all added books', () => {
            (0, challenge1_1.addBook)('1984', 'George Orwell', 1949);
            (0, challenge1_1.addBook)('To Kill a Mockingbird', 'Harper Lee', 1960);
            (0, challenge1_1.listBooks)();
            expect(consoleLogSpy).toHaveBeenCalledWith('All Books:');
            expect(consoleLogSpy).toHaveBeenCalledWith('- 1984 by George Orwell (1949)');
            expect(consoleLogSpy).toHaveBeenCalledWith('- To Kill a Mockingbird by Harper Lee (1960)');
        });
    });
    describe('searchBook', () => {
        it('should prompt for a title if none is provided', () => {
            (0, challenge1_1.searchBook)();
            expect(consoleLogSpy).toHaveBeenCalledWith('Please provide a title to search.');
        });
        it('should log search results if matching books are found', () => {
            (0, challenge1_1.addBook)("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 1997);
            (0, challenge1_1.addBook)('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 1998);
            (0, challenge1_1.searchBook)('Harry Potter');
            expect(consoleLogSpy).toHaveBeenCalledWith('Search Results for "Harry Potter":');
            expect(consoleLogSpy).toHaveBeenCalledWith("- Harry Potter and the Philosopher's Stone by J.K. Rowling (1997)");
            expect(consoleLogSpy).toHaveBeenCalledWith('- Harry Potter and the Chamber of Secrets by J.K. Rowling (1998)');
        });
        it('should log a message if no matching books are found', () => {
            (0, challenge1_1.addBook)('The Hobbit', 'J.R.R. Tolkien', 1937);
            (0, challenge1_1.searchBook)('Nonexistent Title');
            expect(consoleLogSpy).toHaveBeenCalledWith('No books found with title containing "Nonexistent Title".');
        });
        it('should perform a case-sensitive search', () => {
            (0, challenge1_1.addBook)('The Catcher in the Rye', 'J.D. Salinger', 1951);
            (0, challenge1_1.searchBook)('the catcher');
            expect(consoleLogSpy).toHaveBeenCalledWith('No books found with title containing "the catcher".');
        });
    });
});
