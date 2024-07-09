# Photo Gallery Project

A simple and attractive photo gallery built using React.js and Fancybox for image lightbox functionality.

## Features

- Display a collection of photos in a grid layout.
- Click on a photo to open it in a lightbox for a larger view.
- Navigate through images in the lightbox.

## Project Structure

```
photo-gallery/
├── public/
│   ├── fancybox/
│   │   ├── jquery.fancybox.min.css
│   │   └── jquery.fancybox.min.js
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Photo.js
│   │   ├── PhotoGallery.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
├── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/photo-gallery.git
   cd photo-gallery
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- Add your images to the `src/components/PhotoGallery.js` file.
- Customize the gallery styles in `src/App.css`.

## Dependencies

- [React](https://reactjs.org/)
- [Fancybox](https://fancyapps.com/fancybox/3/)

## Adding Images

To add images to your gallery, modify the `src/components/PhotoGallery.js` file. Add your image URLs to the `photos` array.

Example:

```javascript
const photos = [
  { src: 'https://source.unsplash.com/random/800x600', alt: 'Random Image 1' },
  { src: 'https://source.unsplash.com/random/800x601', alt: 'Random Image 2' },
  { src: 'https://source.unsplash.com/random/800x602', alt: 'Random Image 3' },
];
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
