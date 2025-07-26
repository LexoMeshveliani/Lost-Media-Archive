# Lost Media Archive

A retro-themed web archive for forgotten and lost media: games, comics, movies, VHS tapes, arcade exclusives, and vintage magazines.

## Features

- Browse categories of lost media with pixel-art inspired design
- View detailed entries for each item, including images and descriptions
- Responsive layout for desktop and mobile
- Animated video backgrounds for immersive nostalgia

## Project Structure

```
.
├── index.html           # Main landing page (category selection)
├── details.html         # Category details page (item listings)
├── data/
│   ├── categories.json  # Category metadata
│   └── data.json        # All item data
├── images/              # Media images and video backgrounds
├── scripts/
│   ├── script.js        # JS for index.html
│   └── script2.js       # JS for details.html
└── style/
    ├── style.css        # Main styles
    └── style2.css       # Details page styles
```

## How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser (no build step required).
3. Click a category to browse lost media items.

## Customization

- Add new categories in [`data/categories.json`](data/categories.json)
- Add or edit items in [`data/data.json`](data/data.json)
- Place new images in the [`images/`](images/) folder and reference them in your data files

## Credits

- Fonts: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P), [VT323](https://fonts.google.com/specimen/VT323)
- Video backgrounds and images: gyphy.com, pinterest, reddit

## License

This project is for educational and archival purposes.
