import {artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene} from './backend.mjs';


/* artistes par date*/
try {
    const records = await artistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*
/ scenes par nom
try {
    const records = await scenesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


/* artistes par nom
try {
    const records = await artistesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/* info d'un artiste par id
try { 
    const records = await artisteID('rmffv1h7rblrni6'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* info d'une scene par id
try { 
    const records = await sceneID('w9jciap8mua4c25'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* artistes d'une scene par id de la scene et trié par date
try {
    const records = await allartistebysceneId('93azvnlgrmu95xd');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*artistes d'une scene par nom de la scene et trié par date
try {
    const records = await allartistebysceneName('Salon des Glaces');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/* ajouter un artiste
try {
    const artisteData = {
        "nom": "Izya Thiriet",
        "date_de_representation": "2026-08-29T20:00:00.000Z",
        "scene" : "93azvnlgrmu95xd",
        "description" : "elle est trop puissante",
}; 
    await addArtiste(artisteData);
} catch (e) {
    console.error(e);
}
/

/ ajouter une scene
try {
    const sceneData = {
        "nom": "lol",
        "artistes": ["cim64rnr8yofawj", "pdgkxm9zvzyneys"],
        "description" : "scene pour les joueurs de lol",
}; 
    await addScene(sceneData);
} catch (e) {
    console.error(e);
}

/* modifier un artiste
try {
    const data = {
        "nom": "Dis'cover",
        "date_de_representation": "2026-08-29T19:00:00.000Z",
        "scene" : "93azvnlgrmu95xd",
        "description" : " Adèpte des ré-interprétations de grands classiques dans des arrangements Soul / Pop.",
    };
    const record = await updateArtiste('lo2m7x57v3t02yq', data);
    console.log("Artiste mis à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}


/* modifier une scene
try {
    const data = {
        "nom": "Salle Garnier",
        "artistes": ["lo2m7x57v3t02yq", "5gko5h8u7hvp31d"],
        "description" : "Une salle intimiste parfaite pour les récitals et la musique de chambre ",
    };
    const record = await updateScene('93azvnlgrmu95xd', data);
    console.log("Scène mise à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
} */