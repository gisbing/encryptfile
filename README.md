# Encrypt an input file using build in node crypto. Make sure you use same key when decrypted the file

# Sample command:
+ To encrypt:
    + ```sh
    $ node app.js 'e' 'abc' 'cleartext.json' 'encrypted.txt'
+ To decrypt:
    + ```sh
    $ node app.js 'd' 'abc' 'encrypted.txt' 'new.json'

# Parameters:
+ "operation"     'e' for encrypt, 'd' for decrypt
+ "key"
+ "input file"    Optional. For encryption, it is the file to be encrypted. For decryption, it is the encrypted file.
+ "output file"   Optional. For encryption, it is the encrypted file. For decryption, it is the file to be decrypted.
+ "options"       default: {algorithm: 'aes192'}