# Encrypt an input file using build in node crypto.
**Note:** Make sure you use same key when decrypt the file

# Install:
Clone this repo and then in the project folder, type:

```sh
npm link
```


That will setup a new command, "node-crypto". Type that at the command prompt and you should see the help message. If you do, all is well!


# Sample commands:
+ To encrypt:
```sh 
   $ node-crypto encrypt 'abc' 'cleartext.json' 'encrypted.txt'
```

+ To decrypt:
```sh 
   $ node-crypto decrypt 'abc' 'encrypted.txt' 'clear.json'
```

# Sample commands with a key file:
+ To encrypt:
```sh 
   $ node-crypto encrypt keyfile.key 'cleartext.json' 'encrypted.txt'
```

+ To decrypt:
```sh 
   $ node-crypto decrypt keyfile.key 'encrypted.txt' 'clear.json'
```

# Parameters:
+ "operation"     'encrypt' for encrypt, 'decrypt' for decrypt
+ "key"			  Can be a file name or the actual key
+ "input file"    Optional. For encryption, it is the file to be encrypted. For decryption, it is the encrypted file.
+ "output file"   Optional. For encryption, it is the encrypted file. For decryption, it is the file to be decrypted.
+ "options"       default: {algorithm: 'aes192'}