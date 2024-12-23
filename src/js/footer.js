import axios from 'axios';

const form = document.getElementById('form-together');
const modal = document.getElementById('successModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');

function closeModalWindow() {
  modal.classList.remove('active'); 
  modalOverlay.classList.remove('active');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const emailInput = document.getElementById('together-input--email');
  const commentsInput = document.getElementById('together-input--comments');
  const data = {
    email: emailInput.value.trim(),
    comment: commentsInput.value.trim(),
  };

  if (!data.email || !data.comment) {
    modalMessage.textContent = 'Please fill out all required fields.';
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    return; 
  }

  try {
    const response = await axios.post('https://portfolio-js.b.goit.study/api/requests', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = response.data;
    modalMessage.innerHTML = `
      <span class="thank-you-text">${responseData.title}</span><br>
      <span class="thank-you-text--two">${responseData.message}</span>
    `;
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    form.reset();
  } catch (error) {
    let errorMessage = 'An error occurred while sending data. Try again.';
    if (error.response) {
      if (error.response.status === 400) {
        errorMessage = 'Bad request: Invalid request body.';
      } else if (error.response.status === 404) {
        errorMessage = 'Not found: The requested resource could not be found.';
      } else if (error.response.status === 500) {
        errorMessage = 'Server error: Please try again later.';
      }
    } else if (error.request) {
      errorMessage = 'A network error occurred. Please check your connection and try again.';
    } else {
      errorMessage = `Error: ${error.message}`;
    }

    modalMessage.textContent = errorMessage;
    modal.classList.add('active');
    modalOverlay.classList.add('active');
  }
});

closeModal.addEventListener('click', closeModalWindow);

modalOverlay.addEventListener('click', closeModalWindow);


