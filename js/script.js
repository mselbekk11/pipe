const projectOne = document.getElementById('project-one');
const projectTwo = document.getElementById('project-two');
const projectThree = document.getElementById('project-three');

const circleOne = document.getElementById('circle-one');
const circleTwo = document.getElementById('circle-two');
const circleThree = document.getElementById('circle-three');

const projectTitleOne = document.getElementById('project-title-one');
const projectTitleTwo = document.getElementById('project-title-two');
const projectTitleThree = document.getElementById('project-title-three');


// Project 1

projectOne.addEventListener('mouseenter', function(e){
    circleOne.style.top = '-80px';
    circleOne.style.left = '-50px';
    circleOne.style.transition = 'ease-in 0.3s';

    projectTitleOne.style.bottom = '30px';
    projectTitleOne.style.transition = 'ease-in 0.3s';
})

projectOne.addEventListener('mouseleave', function(e) {
    circleOne.style.top = '-100px';
    circleOne.style.left = '-70px';
    circleOne.style.transition = 'ease-out 0.3s';

    projectTitleOne.style.bottom = '20px';
    projectTitleOne.style.transition = 'ease-out 0.3s';
})


// Project 2

projectTwo.addEventListener('mouseenter', function(e){
    circleTwo.style.bottom = '-80px';
    circleTwo.style.right = '-40px';
    circleTwo.style.transition = 'ease-in 0.3s';

    projectTitleTwo.style.bottom = '30px';
    projectTitleTwo.style.transition = 'ease-in 0.3s';
})

projectTwo.addEventListener('mouseleave', function(e) {
    circleTwo.style.bottom = '-100px';
    circleTwo.style.right = '-50px';
    circleTwo.style.transition = 'ease-out 0.3s';

    projectTitleTwo.style.bottom = '20px';
    projectTitleTwo.style.transition = 'ease-out 0.3s';
})

// Project 3

projectThree.addEventListener('mouseenter', function(e){
    circleThree.style.top = '-80px';
    circleThree.style.right = '-50px';
    circleThree.style.transition = 'ease-in 0.3s';

    projectTitleThree.style.bottom = '30px';
    projectTitleThree.style.transition = 'ease-in 0.3s';
})

projectThree.addEventListener('mouseleave', function(e) {
    circleThree.style.top = '-100px';
    circleThree.style.right = '-70px';
    circleThree.style.transition = 'ease-out 0.3s';

    projectTitleThree.style.bottom = '20px';
    projectTitleThree.style.transition = 'ease-out 0.3s';
})












// Form


// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');



// Show input error message
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control error";
//     const small = formControl.querySelector("small");
//     small.innerText = message;
//   }

  
//   //show success outline
//   function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";
//   }


// Check required fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//       if (input.value.trim() === "") {
//         showError(input, `${getFieldName(input)} is required`);
//       } else {
//         showSuccess(input);
//       }
//     });
//   }





// Event Listeners

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

// checkRequired([name, email, message]);

// });


