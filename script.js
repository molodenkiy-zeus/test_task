// Функція для створення поп-апу
function createPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup'); // Додаємо клас для стилізації

    const content = document.createElement('div');
    content.classList.add('popup-content');
    content.textContent = 'Я зміг розв’язати цю задачу, ура!';

    popup.appendChild(content);
    document.body.appendChild(popup);
}

// Викликаємо функцію після завантаження сторінки
window.onload = createPopup;
