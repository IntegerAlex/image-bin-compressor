import { compressBinaryData, decompressBinaryData } from '../src/index.js';
import fs from 'fs';

async function compressAndDecompress() {
    try {
        // Read binary data from file
        const binaryData = fs.readFileSync('binary.txt');

        // Compress binary data
        const compressedData = await compressBinaryData(binaryData);
        console.log('Compressed data:', compressedData);
        console.log('Compressed data size:', compressedData.length / 1024, 'KB');

        // Decompress compressed data
        const decompressedData = await decompressBinaryData(compressedData);
        console.log('Decompressed data:', decompressedData);
        console.log('Decompressed data size:', decompressedData.length / 1024, 'KB');
        console.log('Original data size:', binaryData.length / 1024, 'KB');

        // Compare original binary data with decompressed data
        console.log('Are original binary data and decompressed data equal?', Buffer.compare(binaryData, decompressedData) === 0);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the compressAndDecompress function for testing
compressAndDecompress().then(() => {
    console.log('compressAndDecompress function has been executed');
}).catch(error => {
    console.error('Error executing compressAndDecompress function:', error);
});
