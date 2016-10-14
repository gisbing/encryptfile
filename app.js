#!/usr/bin/env node

var encryptor = require("./app/index.js");
var fs = require("fs");
//encryptor.decrypt('encrypted.txt', 'test.txt', 'abc', {algorithm: 'aes192'});
//return;


var operation = process.argv[2];
if(!operation) {
    printHelp();
}

var key = process.argv[3];
if(fs.existsSync(key)) {
    key = fs.readFileSync(key).toString(); 
    console.log("Key File Exists, using contents for key:", key);
} else {
    if(key) {
        console.log("Key File DOES NOT Exist, using this key:", key);
    } else {
        console.log("Key File DOES NOT Exist and key is missing.");
        printHelp();
        process.exit(1);    
    }
}

var file1 = process.argv[4]; //input file
if(!fs.existsSync(file1)) {
    console.log("Input file does not exist:", file1);
    printHelp();
    process.exit(1);
}


var options = process.argv[6] || {algorithm: 'aes192'};


if (operation === 'encrypt'){
    var clearData = process.argv[4];        //input file contains clear data
    var encryptedData = process.argv[5] || 'encrypted.txt';
    encryptor.encrypt(clearData, encryptedData,  key, options);
}else if (operation === 'decrypt') {
    var encryptedData = process.argv[4];    //input encrypted file
    var decryptedData = process.argv[5]; //output decrypted file
    encryptor.decrypt(encryptedData, decryptedData, key, options);
} else {
    printHelp();
}

function printHelp(){
    console.log('Please specify an operation:'); 
    console.log("      'encrypt' to encrypt, 'decrypt' for decrypt");
    console.log("Examples: ");
    console.log("  node-crypto encrypt <key Or KeyFileName> <ClearDataFile> <outputEncrypted>");
    console.log("  node-crypto decrypt <key Or KeyFileName> <EncryptedFile> <outputClear>");
    process.exit(1);
}

/*
var plainText = '1234567812345678';
var cipher1 = crypto.createCipher('aes256', 'password');
var cipherText1 = cipher1.update(plainText, 'ascii','binary');
cipherText1 += cipher1.final('binary');
console.log('Method 1 - plainText:' + plainText );
console.log('Method 1 - cipherText length:' + cipherText1.length);
var decipher1 = crypto.createDecipher('aes256', 'password');
var result1 = decipher1.update(cipherText1);
result1 += decipher1.final();
console.log('Method 1 - result:' + result1);*/
