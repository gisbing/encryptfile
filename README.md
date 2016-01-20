# Encrypt an input file using build in node crypto.
**Note:** Make sure you use same key when decrypt the file

# Install:
Clone this repo and then in the project folder, type:
```npm link

That will setup a new command, "node-crypto". Type that at the command prompt and you should see the help message. If you do, all is well!


# Sample commands:
+ To encrypt:
    ```sh $ node-crypto encrypt 'abc' 'cleartext.json' 'encrypted.txt'

+ To decrypt:
    ```sh $ node-crypto decrypt 'abc' 'encrypted.txt' 'clear.json'

# Parameters:
+ "operation"     'e' for encrypt, 'd' for decrypt
+ "key"
+ "input file"    Optional. For encryption, it is the file to be encrypted. For decryption, it is the encrypted file.
+ "output file"   Optional. For encryption, it is the encrypted file. For decryption, it is the file to be decrypted.
+ "options"       default: {algorithm: 'aes192'}