# image-bin-compressor

A simple image compressor using Node.js which takes binary buffer as input and returns compressed binary buffer as output.

## Installation

You can install the package via npm:

```javascript
npm install image-bin-compressor
```

Importing the Module

```javascript
import { compressBinaryData, decompressBinaryData } from 'image-bin-compressor';
```

Compressing Binary Data

```javascript
// binaryData is a Buffer containing the raw binary data of the image
const compressedData = await compressBinaryData(binaryData);
// Decompressing Binary Data

// compressedData is a Buffer containing the compressed binary data
const decompressedData = await decompressBinaryData(compressedData);
```

### Example

```javascript
import { compressBinaryData, decompressBinaryData } from 'image-bin-compressor';
import fs from 'fs';

async function example() {
    try {
        // Read binary data from file
        const binaryData = fs.readFileSync('image.jpg');

        // Compress binary data
        const compressedData = await compressBinaryData(binaryData);

        // Decompress compressed data
        const decompressedData = await decompressBinaryData(compressedData);

        // Compare original binary data with decompressed data
        console.log('Are original binary data and decompressed data equal?', Buffer.compare(binaryData, decompressedData) === 0);
    } catch (error) {
        console.error('Error:', error);
    }
}

example();
```
