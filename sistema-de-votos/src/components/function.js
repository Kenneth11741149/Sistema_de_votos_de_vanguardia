

import db from './firebase.js'
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
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
    var data = await (async () => {
        let response = [];

        const querySnapshot = await getDocs(collection(db, "Votaciones"));
        querySnapshot.forEach((doc) => {

            const selectedItem = {
                id: doc.id,
                Nombre: doc.data().Nombre,
                Description: doc.data().Description,
                A: doc.data().A,
                B: doc.data().B,
                C: doc.data().C,
                CodePeople: doc.data().CodePeople


            };
            response.push(selectedItem);

        });
        return response
    })()
    return data
}



async function updateVote(uid, selection, value) {
    var data = await (async () => {
        let response = [];

        const vote = doc(db, "Votaciones", uid);

        if (selection == 'A') {
            await updateDoc(vote, {
                A: value + 1,

            });
        } else if (selection == 'B') {
            await updateDoc(vote, {
                B: value + 1,

            });
        } else {
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