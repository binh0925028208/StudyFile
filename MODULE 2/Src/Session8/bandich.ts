interface Translation {
  vietnamese: string;
  english: string;
}

function getTranslations(): Translation[] {
  const translationsJSON: string | null = localStorage.getItem("translations");
  if (translationsJSON) {
    return JSON.parse(translationsJSON);
  }
  return [];
}

function saveTranslations(translations: Translation[]): void {
  const translationsJSON: string = JSON.stringify(translations);
  localStorage.setItem("translations", translationsJSON);
}

function translateVietnameseToEnglish(
  input: string,
  translations: Translation[]
): string | undefined {
  const foundTranslation: Translation | undefined = translations.find(
    (item) => item.vietnamese === input
  );
  return foundTranslation ? foundTranslation.english : undefined;
}

function addTranslation(): void {
  const vietnameseInput: HTMLInputElement = document.getElementById(
    "vietnameseEdit"
  ) as HTMLInputElement;
  const englishInput = document.getElementById(
    "englishEdit"
  ) as HTMLInputElement;

  const translations: Translation[] = getTranslations();

  const existingTranslationIndex: number = translations.findIndex(
    (item) => item.vietnamese === vietnameseInput.value
  );
  if (existingTranslationIndex !== -1) {
    translations[existingTranslationIndex].english = englishInput.value;
  } else {
    translations.push({
      vietnamese: vietnameseInput.value,
      english: englishInput.value,
    });
  }
  saveTranslations(translations);
  window.location.reload();
}

function toggleEditForm(): void {
  const editForm: HTMLElement = document.getElementById(
    "editTranslationForm"
  ) as HTMLElement;
  const formBtn: HTMLElement = document.getElementById(
    "toggleBtn"
  ) as HTMLElement;
  if (formBtn.innerText === "Mở thêm/sửa bản dịch") {
    formBtn.innerText = "Đóng thêm/sửa bản dịch";
  } else {
    formBtn.innerText = "Mở thêm/sửa bản dịch";
  }
  if (editForm) {
    editForm.style.display =
      editForm.style.display === "none" ? "block" : "none";
  }
}
function translate(): void {
  const vietnameseInput: HTMLInputElement | null = document.getElementById(
    "vietnameseInput"
  ) as HTMLInputElement;
  const translationResult: HTMLElement | null =
    document.getElementById("translationResult");

  if (vietnameseInput && translationResult) {
    const translations: Translation[] = getTranslations();
    const result: string | undefined = translateVietnameseToEnglish(
      vietnameseInput.value,
      translations
    );

    if (result) {
      translationResult.innerHTML = `<div class="translate">
      <p>Tiếng Anh của từ ${vietnameseInput.value} là : ${result}</p>
    </div>`;
    } else {
      translationResult.innerHTML = `<div class="translate">
      <p>Không tìm thấy bản dịch !</p>
    </div>`;

      toggleEditForm();
    }
  }
}

const translateButton: HTMLButtonElement | null =
  document.querySelector("button");
if (translateButton) {
  translateButton.addEventListener("click", translate);
}
