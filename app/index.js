'use strict';

//use crypto directly
var fs = require('fs');
var crypto = require('crypto');


exports.encrypt = function (inputFile, outputFile, key, options) {
    var keyBuf = new Buffer(key);

    if (!inputFile || !fs.existsSync(inputFile)){
        console.log('Can not encrypt. File \'' + inputFile + '\' does not exist');
        return false;
    }

    try {
        var cipher = crypto.createCipher(options.algorithm, keyBuf);
        var data = fs.readFileSync(inputFile);      //buffer entire file
        var encryptedData = cipher.update(data);
        encryptedData = Buffer.concat([encryptedData, cipher.final()]);
        //console.log('data in: ' + encryptedData.length);
        fs.writeFile(outputFile, encryptedData, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('Success! Encrypted file: ' + outputFile);
            return true;
        });
    } catch (e) {
        console.log(e.message);
        return false;
    }
}

exports.decrypt = function (inputFile, outputFile, key, options) {
    var keyBuf = new Buffer(key);

    if (!inputFile || !fs.existsSync(inputFile)){
        console.log('Can not decrypt. File \'' + inputFile + '\' does not exist');
        return false;
    }

    try {
        var decipher = crypto.createDecipher(options.algorithm, keyBuf);
        var data2 = fs.readFileSync(inputFile);

        var decoded = decipher.update(data2);
        decoded = Buffer.concat([decoded, decipher.final()]);

        if (outputFile) {

            fs.writeFile(outputFile, decoded, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log('Success! Decrypted file: ' + outputFile);

            });
        } else {
            console.log('encoded content: \n' + decoded);
        }
    } catch (e) {
        console.log(e.message);
    }
};



/*
var encryptor = require('file-encryptor');

var options = { algorithm : 'aes192' };
var key = 'My Super Secret Key';

exports.encrypt = function () {

    encryptor.encryptFile('values.json', 'encrypted.dat', key, function (err){
        if (err){
            console.log(err);
        }
    })
}

exports.decrypt = function () {
    try {
        encryptor.decryptFile('encrypted.dat', 'new.json', key, function (err) {
            if (err) {
                console.log(err);
            }
        })
    } catch (e) {
        console.log('error: .....' + e);
    }
}
*/
