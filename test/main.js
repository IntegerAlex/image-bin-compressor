import zlib from 'zlib';
import fs from 'fs';

// Define a function to compress binary data using zlib
async function compressBinaryData(binaryData) {
    return new Promise((resolve, reject) => {
        zlib.deflate(binaryData, (err, compressedData) => {
            if (err) {
                reject(err);
            } else {
                resolve(compressedData);
            }
        });
    });
}

// Define a function to decompress binary data using zlib
async function decompressBinaryData(compressedData) {
    return new Promise((resolve, reject) => {
        zlib.inflate(compressedData, (err, decompressedData) => {
            if (err) {
                reject(err);
            } else {
                resolve(decompressedData);
            }
        });
    });
}

// Define binary data (replace this with your binary data)
const binaryData = Buffer.from('Hello, world!', 'utf8');

// Compress and decompress binary data
async function compressAndDecompress() {
    try {
        // Compress binary data
        const compressedData = await compressBinaryData(binaryData);
        console.log('Compressed data:', compressedData);

        // Decompress compressed data
        const decompressedData = await decompressBinaryData(compressedData);
        console.log('Decompressed data:', decompressedData);

        // Compare original binary data with decompressed data
        console.log('Are original binary data and decompressed data equal?', Buffer.compare(binaryData, decompressedData) === 0);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the compressAndDecompress function
compressAndDecompress();
