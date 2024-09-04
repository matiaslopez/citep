// Diccionario con imágenes de resultado
const imageDictionary = {
    1: ["damage_01.png", "damage_02.png", "damage_03.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png"],
    2: ["damage_01.png", "damage_02.png", "damage_03.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png"],
    3: ["damage_01.png", "damage_02.png", "damage_03.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png", "cross.png"],
    4: ["damage_01.png", "damage_02.png", "damage_03.png", "damage_04.png", "damage_05.png", "damage_06.png", "cross.png", "cross.png", "cross.png"],
    5: ["damage_01.png", "damage_02.png", "damage_03.png", "damage_04.png", "damage_05.png", "damage_06.png", "cross.png", "cross.png", "cross.png"],
    6: ["damage_01.png", "damage_02.png", "damage_03.png", "damage_04.png", "damage_05.png", "damage_06.png", "cross.png", "cross.png", "cross.png"],
    7: ["damage_01.png", "damage_02.png", "damage_03.png", "cross.png", "cross.png", "cross.png", "damage_07.png", "damage_08.png", "damage_09.png", "cross.png"],
    8: ["damage_01.png", "damage_02.png", "damage_03.png", "cross.png", "cross.png", "cross.png", "damage_07.png", "damage_08.png", "damage_09.png", "cross.png"],
    9: ["damage_01.png", "damage_02.png", "damage_03.png", "cross.png", "cross.png", "cross.png", "damage_07.png", "damage_08.png", "damage_09.png", "cross.png"],
    10: ["damage_01.png", "damage_02.png", "damage_03.png", "damage_04.png", "damage_05.png", "damage_06.png", "damage_07.png", "damage_08.png", "damage_09.png", "damage_10.png"]
};

// Función para generar una imagen de resultado
function generateResult(id) {
    // Generar un número aleatorio basado en la longitud de las imágenes disponibles para el id
    const randomIndex = Math.floor(Math.random() * imageDictionary[id].length);

    // Obtener la imagen generada
    const resultImage = imageDictionary[id][randomIndex];

    // Mostrar la nueva imagen en el lugar de resultado
    document.getElementById("result-image").src = resultImage;

    // Mostrar el número aleatorio en el campo de texto
    document.getElementById("random-number").value = randomIndex;

    // Mostrar la imagen original y la imagen generada superpuestas

    if (id !== 10) {
        id = `0${id}`; // Imagen original
    }
    document.getElementById("original-image").src = `refuerzo_${id}.png`; // Imagen original
    document.getElementById("superposed-image").src = resultImage;     // Imagen generada
}