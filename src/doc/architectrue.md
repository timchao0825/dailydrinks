# Project Architecture

## Table of Contents

- [Directories Arrangement](#directories-arrangement)

## Directories Arrangement

```bash

├── src/
│  ├── docs/                    # Documents (always out-of-date)
│  │  ├── architecture.md       # File structure md
│  │  └── note.md               # Project note md
│  ├── components/              # React components
│  │  ├── AddOrder              # Add drink list component 
│  │  ├── OrderList             # Show drink list component
│  │  │  ├── EditForm           # Single drink list Edit From component
│  │  │  └── ListItem           # Single drink list component
├── App.js                      # Component handling list function       
├── index.js                    # Creat from react app main js
dist/* to gh-pages
├── .gitignore                  # Disable git commit record
├── package.json
├── README.md
└── yarn.lock
```

# 
