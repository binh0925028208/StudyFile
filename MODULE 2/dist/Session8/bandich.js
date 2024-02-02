"use strict";
function getTranslations() {
    const translationsJSON = localStorage.getItem("translations");
    if (translationsJSON) {
        return JSON.parse(translationsJSON);
    }
    return [];
}
function saveTranslations(translations) {
    const translationsJSON = JSON.stringify(translations);
    localStorage.setItem("translations", translationsJSON);
}
function translateVietnameseToEnglish(input, translations) {
    const foundTranslation = translations.find((item) => item.vietnamese === input);
    return foundTranslation ? foundTranslation.english : undefined;
}
function addTranslation() {
    const vietnameseInput = document.getElementById("vietnameseEdit");
    const englishInput = document.getElementById("englishEdit");
    const translations = getTranslations();
    const existingTranslationIndex = translations.findIndex((item) => item.vietnamese === vietnameseInput.value);
    if (existingTranslationIndex !== -1) {
        translations[existingTranslationIndex].english = englishInput.value;
    }
    else {
        translations.push({
            vietnamese: vietnameseInput.value,
            english: englishInput.value,
        });
    }
    saveTranslations(translations);
    window.location.reload();
}
function toggleEditForm() {
    const editForm = document.getElementById("editTranslationForm");
    const formBtn = document.getElementById("toggleBtn");
    if (formBtn.innerText === "Mở thêm/sửa bản dịch") {
        formBtn.innerText = "Đóng thêm/sửa bản dịch";
    }
    else {
        formBtn.innerText = "Mở thêm/sửa bản dịch";
    }
    if (editForm) {
        editForm.style.display =
            editForm.style.display === "none" ? "block" : "none";
    }
}
function translate() {
    const vietnameseInput = document.getElementById("vietnameseInput");
    const translationResult = document.getElementById("translationResult");
    if (vietnameseInput && translationResult) {
        const translations = getTranslations();
        const result = translateVietnameseToEnglish(vietnameseInput.value, translations);
        if (result) {
            translationResult.innerHTML = `<div class="translate">
      <p>Tiếng Anh của từ ${vietnameseInput.value} là : ${result}</p>
    </div>`;
        }
        else {
            translationResult.innerHTML = `<div class="translate">
      <p>Không tìm thấy bản dịch !</p>
    </div>`;
            toggleEditForm();
        }
    }
}
const translateButton = document.querySelector("button");
if (translateButton) {
    translateButton.addEventListener("click", translate);
}
