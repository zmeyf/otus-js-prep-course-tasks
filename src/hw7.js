
function fiveParagraphs(el) {
    if (!el)
        return;
    el.innerHTML = `
    <h1>Wierd animals</h1>
    <h4>Type your text below</h4>
    <label>
    <input class="text-field" type="text" autofocus>
    <button class="button">Add a new paragraph</button>
    </label>
    <p class="note"><b>Siphonophore.</b> Meet the longest animal in the world, the siphonophore. Yes, it’s even longer than the blue whale. At 45m (150 feet), the blue whale with a maximum confirmed length of 29.9m (98 feet) is a mere baby in comparison. This specimen, seen here arranged in a feeding spiral, was encountered in 2020 as part of Schmidt Ocean Institute’s deep-sea expedition.</p>
    <p class="note"><b>Hoatzin.</b> Hoatzin are also called 'stinkbirds' due to their foul odour, which is caused by the fermentation of food in their digestive system. Surely the Hoatzin is one of the weirdest Amazonian birds. As babies, the chicks have claws on their wings which they use to climb trees. Adults ferment vegetation, much like a cow, albeit in a specialised crop. It gives them a manure-like odour, hence their nickname, the stinkbird.</p>
    <p class="note"><b>Pink river dolphin.</b>The Amazon pink river dolphin has the largest bodies and brains of any freshwater dolphin. This freshwater cetacean is the largest species of river dolphin. They are born grey and acquire their pink colour with age. The final hue is influenced by many things, including behaviour, diet and how close their capillaries are to the skin.</p>
    `

    const input = document.querySelector('.text-field');
    const button = document.querySelector('.button');
    hideButton();

    function getInputText() {
        return input.value;
    }

    function clearInput() {
        input.value = '';
    }

    function buttonClick() {
        const text = getInputText();
        addPar(text);
        clearInput();
        input.focus();
    }

// click by mouse
    button.addEventListener('click', buttonClick);

// click by Enter
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            buttonClick();
            input.focus();
        }
    });

    function addPar(text) {
        const newPar = document.createElement('p');
        newPar.innerText = text;
        document.body.append(newPar);
        removePar();
        hideButton();
    }

    function removePar(text) {
        if (document.querySelectorAll('p').length > 5) {
            const firstPar = document.querySelector('p');
            firstPar.remove()
        }
    }

    function hideButton() {
        button.hidden = true;
    }

    function showButton() {
        button.hidden = false;
    }

    input.addEventListener('input', function actionButton() {
        if (input.value === '') {
            hideButton();
        } else {
            showButton();
        }
    });
}

fiveParagraphs(document.querySelector('#page'));
module.exports = {fiveParagraphs};