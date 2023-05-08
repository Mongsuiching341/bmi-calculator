const form = document.querySelector('.bmi-form');
const weightDanger = document.querySelector('.weight-danger')
const heightDanger = document.querySelector('.height-danger')
const result = document.querySelector('.show-result');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = form.weight.value;
    const height = form.height.value / 100;

    if (weight && height) {
        heightDanger.classList.remove('active');
        weightDanger.classList.remove('active');

        // calculation 

        const bmi = weight / (height * height)

        // console.log(Math.round(bmi))
        result.innerHTML = `${bmi.toFixed(1)} kgm<sup>2</sup>`

    } else if (weight == '' && height == '') {
        weightDanger.classList.add('active');
        heightDanger.classList.add('active');
        result.innerHTML = `Nothing to show`
    } else if (weight == '') {
        heightDanger.classList.remove('active');
        weightDanger.classList.add('active');
        result.innerHTML = `Nothing to show`
    } else {
        weightDanger.classList.remove('active');
        heightDanger.classList.add('active');
        result.innerHTML = `Nothing to show`
    }
})