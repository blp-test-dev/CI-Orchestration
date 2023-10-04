
public class Book {

    /**
     * The title of the book.
     */
    private String title;

    /**
     * The author of the book.
     */
    private String author;

    /**
     * The number of pages in the book.
     */
    private int pages;

    /**
     * Constructs a new Book with the specified title, author, and number of pages.
     *
     * @param title  The title of the book.
     * @param author The author of the book.
     * @param pages  The number of pages in the book.
     */
    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    /**
     * Returns the title of the book.
     *
     * @return The title of the book.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets the title of the book.
     *
     * @param title The new title of the book.
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Returns the author of the book.
     *
     * @return The author of the book.
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Sets the author of the book.
     *
     * @param author The new author of the book.
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Returns the number of pages in the book.
     *
     * @return The number of pages in the book.
     */
    public int getPages() {
        return pages;
    }

    /**
     * Sets the number of pages in the book.
     *
     * @param pages The new number of pages in the book.
     */
    public void setPages(int pages) {
        this.pages = pages;
    }

    /**
     * Returns a string representation of the book.
     *
     * @return A string representation of the book.
     */
    @Override
    public String toString() {
        return "Book{title='" + title + "', author='" + author + "', pages=" + pages + '}';
    }

    /**
     * A simple main method to demonstrate the use of the Book class.
     *
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {
        Book book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
        System.out.println(book);
    }
}

