# Vigenere Cipher
# Alphabet = printable 128 bit ascii chars (32-126)
# Matthew Lam 2018

def encrypt(key, msg):
	msg_out = ''

	for i, c in enumerate(msg):
		numeric = (ord(c)+ord(key[i%len(key)])-32) % 94
		out_char = chr(numeric+32)
		msg_out += out_char

	return msg_out

def decrypt(key, msg):
	msg_out = ''

	for i, c in enumerate(msg):
		numeric = (ord(c)-ord(key[i%len(key)])-32) % 94
		out_char = chr(numeric+32)
		msg_out += out_char

	return msg_out

#Test
#code = encrypt("password","Hello World!")
#print code
#code = decrypt("password", code)
#print code