var ethers;
function generate(){
    const wallet = ethers.Wallet.createRandom();
    // console.log('address:', wallet.address);
    // console.log('mnemonic:', wallet.mnemonic.phrase);
    // console.log('privateKey:', wallet.privateKey);
    var address = wallet.address;
    var mnemonic = wallet.mnemonic.phrase;
    var private_key = wallet.privateKey;
    document.getElementById("address").value=address;
    document.getElementById("private_key").value=private_key;
    document.getElementById("mnemonic").value=mnemonic;
}
