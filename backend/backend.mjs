import PocketBase from 'pocketbase'; 
const pb = new PocketBase('https://chorussymphonia.thiriet.optimiseus.fr:443');

export async function artistesSorted() { 
    const records = await pb.collection('Artistes').getFullList({ sort: 'date_representation' }); 
    return records; 
}

export async function scenesName() { 
    const records = await pb.collection('Scenes').getFullList({ sort: 'nom_scene' }); 
    return records; 
}

export async function artistesName() { 
    const records = await pb.collection('Artistes').getFullList({ sort: 'nom_artiste' }); 
    return records; 
}

export async function artisteID(id) { 
    const record = await pb.collection('Artistes').getOne(id); 
    return record; 
}

export async function sceneID(id) { 
    const record = await pb.collection('Scenes').getOne(id, { expand: 'Concerts' }); 
    return record; 
}

export async function allartistebysceneId(id) { 
    const scene = await pb.collection('Scenes').getOne(id, { expand: 'Concerts' }); 
    return scene.expand?.Concerts || []; 
}

export async function allartistebysceneName(nom) {
    const scene = await pb.collection('Scenes').getFirstListItem(`nom="${nom}"`);
    const records = await pb.collection('Artistes').getFullList({ filter: `scene="${scene.id}"`, sort: 'date_representation' }); 
    return records; 
}
export async function addArtiste(artisteData) {
    try {
        const record = await pb.collection('Artistes').create(artisteData);
        console.log('Artiste ajouté :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'artiste :", error);
        throw error;
    }
}

export async function addScene(sceneData) {
    try {
        const record = await pb.collection('Scenes').create(sceneData);
        console.log('Scène ajoutée :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout de la scène :", error);
        throw error;
    }
}

export async function updateArtiste(id, artisteData) {
    try {
        const record = await pb.collection('Artistes').update(id, artisteData);
        console.log('Artiste modifié :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification de l'artiste :", error);
        throw error;
    }
}

export async function updateScene(id, sceneData) {
    try {
        const record = await pb.collection('Scenes').update(id, sceneData);
        console.log('Scène modifiée :', record);
        return record;
    } catch (error) {
        console.error('Erreur lors de la modification de la scène :', error);
        throw error;
    }
}

// new helpers for Contact collection
export async function contactsList() {
    try {
        const records = await pb.collection('Contact').getFullList();
        return records;
    } catch (err) {
        // if the collection is not publicly readable we get a 403; fall back to empty array
        console.warn('contactsList failed, returning empty:', err.message || err);
        return [];
    }
}

export async function addContact(contactData) {
    try {
        const record = await pb.collection('Contact').create(contactData);
        console.log('Contact ajouté :', record);
        return record;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du contact :', error);
        throw error;
    }
}