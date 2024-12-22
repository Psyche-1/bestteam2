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
    email: emailInput.value,
    comment: commentsInput.value,
  };

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      modalMessage.innerHTML = `
        <span class="thank-you-text">${responseData.title}</span><br>
        <span class="thank-you-text--two">${responseData.message}</span>
      `;
      modal.classList.add('active');
      modalOverlay.classList.add('active'); 
      form.reset(); 
    } else {
      let errorMessage = 'An error occurred while sending data. Try again.';
      if (response.status === 400) {
        errorMessage = 'Bad request: Invalid request body.';
      } else if (response.status === 404) {
        errorMessage = 'Not found: The requested resource could not be found.';
      } else if (response.status === 500) {
        errorMessage = 'Server error: Please try again later.';
      }
      modalMessage.textContent = errorMessage;
      modal.classList.add('active');
      modalOverlay.classList.add('active');
    }
  } catch (error) {
    console.error('Fetch Error:', error.message);
    modalMessage.textContent = 'Fetch Error';
    modal.classList.add('active');
    modalOverlay.classList.add('active');
  }
});

closeModal.addEventListener('click', closeModalWindow);

modalOverlay.addEventListener('click', closeModalWindow);
