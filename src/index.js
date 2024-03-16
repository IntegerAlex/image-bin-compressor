import zlib from 'zlib';
import fs from 'fs';

const binaryData = fs.readFileSync( 'binary.txt' );// for testing purpose, originally the data is already a buffer object
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


// Compress and decompress binary data for testing
async function compressAndDecompress() {
    try {
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
compressAndDecompress();
