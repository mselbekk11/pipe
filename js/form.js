
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message'); 
      const formClear = document.getElementById('my-form');

      const scriptURL = 'https://script.google.com/macros/s/AKfycbwsRfsQvwyT9M7bSEsybp_6ulxVsnx260sq7tkzvmD7rfVhqm4/exec'
      const form = document.forms['submit-to-google-sheet']


    function formCongrats() {
        formClear.innerHTML = `
        <div class="success">
        <p>Thanks for reaching out!</p>
        </div>
        `;
    }

    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))

          formClear.reset();
          formCongrats();
      })


