var ethers;
function generate(){
    const wallet = ethers.Wallet.createRandom();
    var address = wallet.address;
    var mnemonic = wallet.mnemonic.phrase;
    var private_key = wallet.privateKey;
    document.getElementById("address").value=address;
    document.getElementById("private_key").value=private_key;
    document.getElementById("mnemonic").value=mnemonic;
}
