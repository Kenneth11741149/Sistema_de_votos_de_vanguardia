

import db from './firebase.js'
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { ethers } from 'ethers';
import DragonAbi from '../contracts/DragonVote.json';
import PineappleAbi from '../contracts/PineapplePizzaVote.json';
import Web3Abi from '../contracts/Web3Vote.json';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
/*
async function getAllVotes() {
    var data = await (async () => {
        try {
            console.log(db)
            let query = db.collection('votes')
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        idVote: doc.id,
                        entrada: doc.data().entrada
                    };
                    response.push(selectedItem);
                }
            });
            return response
        } catch (error) {
            console.log(error);
        }
    })()
    return data
}
*/


async function getAllVotesList() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    let signerAddress;
    var data = await (async () => {
        let response = [];
        signerAddress = await signer.getAddress();
        const querySnapshot = await getDocs(collection(db, "Votaciones"));
        querySnapshot.forEach(async (doc) => {

            const selectedItem = {
                id: doc.id,
                Nombre: doc.data().Nombre,
                Description: doc.data().Description,
                A: doc.data().A,
                B: doc.data().B,
                C: doc.data().C,
                CodePeople: doc.data().CodePeople


            };
            selectedItem.signerAddress = signerAddress;
            if(selectedItem.Nombre == "Dragon"){
                const {abi} = DragonAbi; 
                selectedItem.abi = abi;
            }else if (selectedItem.Nombre == "Pineapple Pizza"){
                const {abi} = PineappleAbi; 
                selectedItem.abi = abi;
            }else if (selectedItem.Nombre == "Web3"){
                const {abi} = Web3Abi; 
                selectedItem.abi = abi;
            }

            selectedItem.provider = provider;
            selectedItem.signer = signer;
            selectedItem.contract = new ethers.Contract(selectedItem.signerAddress, selectedItem.abi, signer)
            response.push(selectedItem);

        });
        return response;
    })();
    return data;
}



async function updateVote(uid, selection, value,contract) {
    var data = await (async () => {
        let response = [];

        const vote = doc(db, "Votaciones", uid);
        if (selection == 'A') {
            await contract.addVoteYes()
            let newVal = await contract.getVoteYes()
            await updateDoc(vote, {
                A: value + 1,

            });
        } else if (selection == 'B') {
            await contract.addVoteNo()
            let newVal = await contract.getVoteNo()
            await updateDoc(vote, {
                B: value + 1,

            });
        } else {
            await contract.addVoteNone()
            let newVal = await contract.getVoteNone()
            await updateDoc(vote, {
                C: value + 1,

            });
        }



        return true
    })()
    return data
}

export default {
    getAllVotesList,
    updateVote


}