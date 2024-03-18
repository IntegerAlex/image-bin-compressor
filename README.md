# image-bin-compressor

A simple Node.js utility designed to be used with Multer in server-side applications to compress data.
It offers lossless compression using the gzip algorithm.

🚧🔧🚨 **UNDER MAINTENANCE** 🚨🔧🚧

***This project is currently undergoing maintenance.***

***🛠️👷‍♂️ Please bear with us as we work to improve the project. Thank you for your patience! 👷‍♀️🔨***
## Multer implementation

example usage, please refer to the [EXAMPLE.md](EXAMPLE.md) file.

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


