var today = new Date();
        var hourNow = today.getHours();
        var greeting;

        if (hourNow < 5) {
            greeting = 'Good morning!';
        } else if (hourNow > 12) {
            greeting = 'Good afternoon!';
        } else if (hourNow < 21) {
            greeting = 'Good evening!';
        } else {
            greeting = 'Welcome!';
        }

document.write('<h3>' + greeting + '</h3>');
const labels = document.querySelectorAll('.form-control label')

            labels.forEach(label => {
            label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style =transition-delay:${idx *50}ms"> ${letter}</span>`)
            .join('')

            })