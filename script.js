document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('liters');
    const resSugar = document.getElementById('res-sugar');
    const resSolA = document.getElementById('res-sol-a');
    const resSolB = document.getElementById('res-sol-b');
    const resWater = document.getElementById('res-water');

    function updateCalc() {
        let liters = parseFloat(input.value);
        
        if (isNaN(liters) || liters < 0.1) {
            liters = 0;
        }

        // ratios per liter
        const sugar = 104 * liters;
        const solA = 1 * liters;
        const solB = 10 * liters;

        // results
        resSugar.textContent = (liters === 0) ? "--" : `${sugar.toFixed(1)} g`;
        resSolA.textContent = (liters === 0) ? "--" : `${solA.toFixed(1)} mL`;
        resSolB.textContent = (liters === 0) ? "--" : `${solB.toFixed(1)} mL`;
        resWater.textContent = (liters === 0) ? "--" : `Fill to ${liters} L`;
    }

    updateCalc();
    input.addEventListener('input', updateCalc);
});