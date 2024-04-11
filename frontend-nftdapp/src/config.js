const MyNFT = require('./contracts/MyNFT')
const Auctions = require('./contracts/Auctions')

export default {
	MYNFT_CA: '0x859a81306aedd67cb095a1c929c06680d9c125c5',
	AUCTIONS_CA: '0x8b8f6685c9a8b068f3a845bdfb749b3dcc26456d',

	MYNFT_ABI: MyNFT.abi,
	AUCTIONS_ABI: Auctions.abi,

	GAS_AMOUNT: 500000
}
