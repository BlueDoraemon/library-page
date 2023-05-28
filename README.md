# library-page
Library page WIP
# Library of Alexandria

Library of Alexandria is a book tracking web application built on HTML5, CSS, and vanilla JavaScript. It allows users to keep track of their personal library by adding, marking as read/unread, and removing books. The application was created as part of The Odin Project's Full Stack JavaScript path curriculum.

## Installation

A live deployment of Library of Alexandria is available on GitHub Pages. You can access the application by visiting [Library of Alexandria](https://example.com).

If you prefer to run the application locally or make modifications to the source code, follow the steps below:

1. Clone the repository with the following command:
   ```
   git clone https://github.com/bluedoraemon/library-page.git
   ```
   Alternatively, you can download the source code as a ZIP file and extract it.

2. Navigate to the directory where the repository is saved on your local machine.

3. Open the `index.html` file in your preferred web browser to launch the application.

## Usage

To add a book to your library, click on the "Add Book" button. This will open a modal where you can fill in the book details such as the title, author, number of pages, and whether you have read the book or not. Once you click the save button, the book will be added to your library. You can mark books as read or unread and also remove them from your library.

Library of Alexandria saves user data using the Web Storage API's localStorage mechanism. Your library will be preserved even if you close the application. The data is stored locally on your computer and is private to that specific machine.

![Library of Alexandria Demo](images/chrome-capture-2023-4-28.gif)

## Contributing

If you encounter any bugs or issues while using the application, feel free to submit an issue on the GitHub repository. You are also welcome to make a pull request if you would like to contribute by adding new features or making improvements.

## License

Library of Alexandria is released under the MIT License. You can find the detailed license information in the [LICENSE](LICENSE) file.

---

*Note: The above readme assumes that you have already set up a GitHub repository for your project and have appropriate images or GIFs saved under the `images` directory.*