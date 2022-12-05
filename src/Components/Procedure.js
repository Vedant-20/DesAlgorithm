import React from 'react'

export default function Procedure() {
  return (
    
    <div className='procedure'>
    <h1 >PROCEDURE</h1>
        <h3>Step 1 : Generate Plaintext m, keyA and keyB by clicking on rexpective buttons PART I of the simulation page.</h3>

<h3>Step 2 : Enter generated Plaintext m from PART I to PART II in "Your text to be encrypted/decrypted:" block.</h3>

<h3>Step 3 : Enter generated keyA from PART I to PART II "Key to be used:" block and click on DES encrpt button to output ciphertext c1.This is First Encryption.</h3>

<h3>Step 4 : Enter generated ciphertext c1 from PART II "Output:" Block to PART II in "Your text to be encrypted/decrypted:" block.</h3>

<h3>Step 5 : Enter generated keyB from PART I to PART II in "Key to be used:" block and click on DES decrypt button to output ciphertect c2.This is Second Encryption.</h3>

<h3>Step 6 : Enter generated ciphertext c2** from PART II "Output:" block to PART II in "Your text to be encrypted/decrypted:" block.</h3>

<h3>Step 7 : Enter generated keyA from PART I to PART II "Key to be used:" block and click on DES encrpt button to output ciphertext c3.This is Third Encryption. As Encryption is done thrice.This Scheme is called triple DES.</h3>

<h3>Step 7 : Enter generated ciphertext c3 from PART II "Output:" Block to PART III "Enter your answer here:" block inorder to verify your Triple DES.</h3>
    </div>
    
    
  );
}