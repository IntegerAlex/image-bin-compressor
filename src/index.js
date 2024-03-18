import zlib from 'zlib';

/**
 * Compresses binary data using the zlib deflate algorithm.
 * 
 * @param {Buffer} binaryData The binary data to compress.
 * @returns {Promise<Buffer>} A promise that resolves to the compressed data.
 */
export async function compressBinaryData(binaryData) {
    // Create a new Promise to handle the asynchronous operation
    return new Promise((resolve, reject) => {
        // Use zlib.deflate to compress the binary data
        zlib.deflate(binaryData, (err, compressedData) => {
            // Check for errors during compression
            if (err) {
                // If an error occurs, reject the promise with the error
                reject(err);
            } else {
                // If compression is successful, resolve the promise with the compressed data
                resolve(compressedData);
            }
        });
    });
}

/**
 * Decompresses binary data using the zlib inflate algorithm.
 * 
 * @param {Buffer} compressedData The compressed binary data to decompress.
 * @returns {Promise<Buffer>} A promise that resolves to the decompressed data.
 */
export async function decompressBinaryData(compressedData) {
    // Create a new Promise to handle the asynchronous operation
    return new Promise((resolve, reject) => {
        // Use zlib.inflate to decompress the compressed data
        zlib.inflate(compressedData, (err, decompressedData) => {
            // Check for errors during decompression
            if (err) {
                // If an error occurs, reject the promise with the error
                reject(err);
            } else {
                // If decompression is successful, resolve the promise with the decompressed data
                resolve(decompressedData);
            }
        });
    });
}


// convert hex buffer object to binary buffer object
export function Buffer(fileBuffer){
    const buffer = Buffer.from(fileBuffer, 'hex').toString('hex');
    const Buffer = Buffer.from(buffer, 'binary');  
    return Buffer;
}